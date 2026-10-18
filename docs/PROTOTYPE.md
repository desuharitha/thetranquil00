# Deployed prototype — Tranquils Sound Cave

Website: https://desuharitha.github.io/thetranquil00/

## Scope

Minimal React/Vite player, public Drive discovery, search/filter, native progressive audio/video playback and seeking. No Firebase, R2, database, media cache or paid hosting. Original diagnostics remain at diagnostic.html and final.html. The initial README and previous local React prototype are preserved.

## Browser key

Rotate the previously shared key before production use. Create/use a standard browser key restricted to Google Drive API and website referrer https://desuharitha.github.io/*. Add localhost only when testing there. A URL path cannot reliably serve as an origin-level security boundary. Do not use service-account credentials, OAuth access tokens or client secrets.

Enter the replacement in the site's password field each session. No key is embedded in source, GitHub variables, built assets or persistent browser storage. Discovery uses x-goog-api-key and credentials:omit. Native media playback requires the restricted browser key in its API request URL, where visitors and browser tools can observe it. Referrer/API restrictions limit use; they do not make a browser key secret or authorize private files. Only publicly shared media is discoverable by this mode.

The site is therefore a manually configured prototype, not a zero-configuration public launch. Refresh requires key entry again. Do not paste keys into chat, issues, diagnostics exports or Git.

## Deployment

GitHub Actions builds on main push with npm ci and npm run build and publishes dist using Pages deployment. Vite base is /thetranquil00/. Pages build source is GitHub Actions; HTTPS enabled. Pages is public. No secrets are required for this workflow; it uses the GitHub-provided short-lived deployment token.

Local: npm ci, npm run dev. Production check: npm run build, npm run preview.

## Device tests

1. Enter the newly rotated key and connect the collection. Confirm public anonymous discovery from the actual Pages origin.
2. Play one audio MP4 and video MP4. Pause/resume; seek forward/backward with native controls.
3. Find a public video over 30 MB, preferably 50–150 MB, and use Test seeks. The automatic test seeks to 85% then back to 50%; inspect whether targets were already buffered. A completed seek inside full buffering is not proof of remote streaming.
4. Export the diagnostic log. It includes selected filenames and browser user agent but excludes keys and media URLs. Review before sharing.
5. Repeat in Android Chrome and iPhone Safari; try portrait/landscape, fullscreen where available, backgrounding and lock screen. No Media Session or uninterrupted background playback guarantee in this minimal milestone.
6. Stop once testing is complete. Do not download the collection or use a Blob workaround for large files.

Drive errors distinguish quota/rate limits (429), access/referrer/permissions/download quota failures (403), unavailable media (404), network failures, and browser playback/codec restrictions. A 403 can have several causes; the app does not falsely identify every 403 as a quota failure. No automatic retry loop can consume quota indefinitely.

## Validation status

Production build and local UI loading passed. No key detected in staged source. Earlier local small-file key tests passed progressive audio/video playback and seeks; they are not production-origin or large-file results. Production discovery/playback, a larger MP4 and real-device behavior require the newly rotated production-restricted key and must be reported separately.
