# IndexNow

This site has its own IndexNow key, deliberately separate from waqtazan.com's —
if this key is ever abused, it cannot be used to submit URLs for the main site.

Key: `5ec18561f116c7a77dbf1529d7df1e1c`
Key file: <https://waqtazan-guide.vercel.app/5ec18561f116c7a77dbf1529d7df1e1c.txt>

IndexNow keys are **not secrets**. The key file is required to be publicly
readable at the domain root; that is how Bing verifies you control the host.

## Resubmitting after adding or changing an article

```bash
curl -X POST https://www.bing.com/indexnow \
  -H 'Content-Type: application/json' \
  -d '{
    "host": "waqtazan-guide.vercel.app",
    "key": "5ec18561f116c7a77dbf1529d7df1e1c",
    "keyLocation": "https://waqtazan-guide.vercel.app/5ec18561f116c7a77dbf1529d7df1e1c.txt",
    "urlList": ["https://waqtazan-guide.vercel.app/"]
  }'
```

Use `https://www.bing.com/indexnow`, not `api.indexnow.org` — the latter
returned 403 for the waqtazan.com key.
