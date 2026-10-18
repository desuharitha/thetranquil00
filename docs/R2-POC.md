# R2 three-file proof of concept

Bucket: thetranquil00-poc, Standard storage, Eastern North America. User approved public access and GitHub Pages deployment for exactly three copies. Drive originals and the full collection remain unchanged.

Test URL: https://desuharitha.github.io/thetranquil00/?source=r2
Select R2 three-file test and Connect collection. No Google key is needed. Drive diagnostics remain available through the source selector and existing diagnostic pages.

Files (6,062,279 bytes total):
- Ravi varmake.mp4 — 2,070,513 bytes
- VID-20250728-WA0048.mp4 — 2,986,243 bytes
- Nindu aakashamantha manasu.mp4 — 1,005,523 bytes; audio-only MP4

Only these copies were downloaded using the supported Drive Download control, then uploaded through the Cloudflare dashboard. No API tokens, private credentials or preview-page scraping. Media are outside the Git repository and were not committed.

CORS allows GitHub Pages and the two test localhost origins; GET/HEAD, Range, exposed Content-Range/Accept-Ranges/Content-Length/Content-Type/ETag. CORS is not an access restriction: anyone with the approved public URLs can download these samples.

The r2.dev address is a rate-limited development endpoint, not a production hosting commitment. No custom domain, Worker, paid Stream product, database or bulk migration. R2 activation has usage-based billing beyond free allowances; this tiny test is expected to stay within available allowance, not a guaranteed billing cap.

Anonymous HTTP checks passed for all three: bytes=0-1023 and bytes=524288-525311 returned 206, Content-Length 1024, exact Content-Range totals, and Access-Control-Allow-Origin https://desuharitha.github.io. Upload-derived MIME type is video/mp4 for all objects, including the audio-only sample; the catalog correctly identifies audio/mp4 for player layout. The dashboard offers no metadata editor, so this header remains a recorded test limitation to validate in browsers.

The existing React player resolves R2 sources through a separate catalog adapter; Vite base remains /thetranquil00/. Test seeks is available for all three samples. Small files may fully buffer before a seek; event logs must distinguish already-buffered and unbuffered targets. No Blob downloads or automatic media cache.
