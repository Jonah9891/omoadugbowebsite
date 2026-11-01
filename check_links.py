import os
import re
from urllib.parse import urlparse

html_files = {}
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html') and not f.startswith('scratch') and 'node_modules' not in root:
            p = os.path.normpath(os.path.join(root, f))
            with open(p, 'r', encoding='utf-8') as fl:
                c = fl.read()
                ids = set(re.findall(r'id=["\']([^"\']+)["\']', c))
                html_files[p] = (c, ids)

broken_links = []
total_links = 0

for p, (content, ids) in html_files.items():
    hrefs = re.findall(r'href=["\']([^"\']+)["\']', content)
    for href in hrefs:
        if href.startswith(('tel:', 'mailto:', 'javascript:', '#', 'http://', 'https://')):
            if href.startswith('#'):
                frag = href[1:]
                if frag and frag not in ids:
                    broken_links.append((p, href, f'Missing local anchor #{frag}'))
            continue
        
        total_links += 1
        parsed = urlparse(href)
        path = parsed.path
        frag = parsed.fragment

        if path == '/':
            target_file = 'index.html'
        elif path.endswith('/'):
            target_file = os.path.normpath(path.strip('/') + '/index.html')
        elif not os.path.splitext(path)[1]:
            target_file = os.path.normpath(path.strip('/') + '/index.html')
        else:
            target_file = os.path.normpath(path.lstrip('/'))

        if target_file not in html_files and not os.path.exists(target_file):
            broken_links.append((p, href, f'Target file {target_file} does not exist'))
        else:
            if frag:
                target_ids = html_files.get(target_file, (None, set()))[1]
                if frag not in target_ids:
                    broken_links.append((p, href, f'Target anchor #{frag} missing in {target_file}'))

print(f'Checked {total_links} internal links across {len(html_files)} HTML pages.')
print(f'Broken links found: {len(broken_links)}')
for bl in broken_links:
    print(' -', bl)

