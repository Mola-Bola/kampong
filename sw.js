// Kampong web: open the app with no connection, from the first visit on.
// Installing this worker saves the whole app on the device: the page, the code, fonts and images. The list of files
// is written into the built copy of this file by scripts/web-pwa.mjs (BUILD below), with a version that changes
// whenever any file does, so a new version saves itself fresh and the old one is removed.
// Pages come from the network first, so a new version shows as soon as you're online; the saved copy is used offline.
// Built files never change once published, so they're served from the saved copy.
// Data (Supabase) is not touched: the app keeps its own offline copy of what you've seen.
const BUILD = {"version":"ea602e800f1b","files":["_expo/static/css/native-tabs.module-a651c580566f288ddcaa0e602ea96277.css","_expo/static/js/web/entry-89ac300ed7560d6e87db49431cb8d40e.js","assets/_kampong/node_modules/@expo-google-fonts/fredoka/600SemiBold/Fredoka_600SemiBold.89a2d8224922009e6f9b96181093b634.ttf","assets/_kampong/node_modules/@expo-google-fonts/fredoka/700Bold/Fredoka_700Bold.eaa34632fd156f78e16a584d1648ffcc.ttf","assets/_kampong/node_modules/@expo-google-fonts/nunito/600SemiBold/Nunito_600SemiBold.b1364260246b29fd9393a1a071f3af61.ttf","assets/_kampong/node_modules/@expo-google-fonts/nunito/700Bold/Nunito_700Bold.c133c0b8cd169e7798d0cd239477cf32.ttf","assets/_kampong/node_modules/@expo-google-fonts/nunito/800ExtraBold/Nunito_800ExtraBold.2b1bb82750274fc2d1043bf3891cb531.ttf","assets/_kampong/node_modules/@expo-google-fonts/nunito/900Black/Nunito_900Black.3ffae19d12dc67269f5cdd8d7a0aaeaf.ttf","assets/_kampong/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.6e435534bd35da5fef04168860a9b8fa.ttf","assets/_kampong/node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png","assets/_kampong/node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png","assets/_kampong/node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png","assets/_kampong/node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png","assets/_kampong/node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png","assets/_kampong/node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png","assets/_kampong/node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png","assets/assets/ext/hatch.0486359ae3611bd547f3984d70dfc85b.png","assets/assets/ext/oleh.e4d5e5c138c3bbbabb7f536b0dc067be.png","assets/assets/illustrations/circle-quiet.546013375da77f8c5287793646f1ec42.webp","assets/assets/illustrations/seeds-empty.b24e708cbcff88bb40f8321ebb868921.webp","assets/assets/illustrations/waiting-invite.3f215aa82bd431e84481237bd0a5d58e.webp","assets/assets/village/hatch-house.257814b8d6d0ded8de9b425141bd3e9e.webp","assets/assets/village/house-blue.9f6242c2cb79d7d2a13c4f2515bc930c.webp","assets/assets/village/hut-butter.3da461bfa0eb5debe82189a3ae7204cd.webp","assets/assets/village/hut-lilac.d7eeb8ceed277b7320e5c6ae2a34581c.webp","assets/assets/village/hut-mint.14dbff8ca80e670d038ecffe820749a5.webp","assets/assets/village/hut-peach.b0cc1023d0f0b46d61c91f73641952d9.webp","assets/assets/village/hut-rose.16c82da973773d12c7b72d051ed88d98.webp","assets/assets/village/hut-sky.22046eaecd1cbd6eeba70b443b57d4c2.webp","assets/assets/village/oleh-house.7e6ec401d954972ad850160adf9b11e0.webp","assets/assets/village/plans-house.4d292d3ee989bfe41ad59a5f644800fd.webp","assets/assets/village/plot-seed.7811c7f606dcb991bd9798ca34ba0669.webp","assets/assets/village/plot.e1b33fa12dec4a878af1e2a68802e10a.webp","assets/assets/village/scene-day.56dab611d202021c19eeb54fd03d5eae.webp","assets/assets/village/scene-evening.0f7ece508f1aafa9223c1df1b9b13983.webp","favicon.ico","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","index.html","manifest.webmanifest"]}; // filled in by scripts/web-pwa.mjs
const SAVED = `kampong-app-${BUILD.version}`;
// Anything asked for that isn't in the list (a build that skipped web-pwa.mjs): saved as it's first fetched.
const EXTRA = 'kampong-extra-v1';
const scope = new URL(self.registration.scope);
const PAGE = new URL('index.html', scope).href;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SAVED)
      .then((cache) =>
        // The page is checked with the server (it names the current code files); the rest can come from the browser's
        // own cache, as the first visit has just downloaded them.
        cache.addAll(BUILD.files.map((f) => new Request(new URL(f, scope).href, f === 'index.html' ? { cache: 'no-cache' } : {}))),
      )
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      // Earlier versions' saved copies go. So do extra files, unless they're all this build has (no list).
      // Only this app's own copies (another app on the same origin keeps its caches).
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('kampong-') && ![SAVED, ...(BUILD.files.length ? [] : [EXTRA])].includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const isStatic = (url) =>
  url.origin === scope.origin && /\/(_expo\/static|assets|icons)\/|\.(ttf|otf|woff2?|png|jpe?g|gif|svg|webp|ico|css|js|webmanifest)$/.test(url.pathname);

/** The saved app page (for any address in the app: they're all the same page). */
async function savedPage() {
  return (await caches.match(PAGE, { cacheName: SAVED })) ?? (await caches.match('shell', { cacheName: EXTRA })) ?? Response.error();
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate' && url.origin === scope.origin) {
    event.respondWith(
      fetch(req)
        .then(async (res) => {
          // No list (a build that skipped web-pwa.mjs): keep the last page seen instead. GitHub Pages answers deep links
          // with its 404 page, which is the app too.
          if (!BUILD.files.length) {
            const html = await res.clone().text();
            if (html.includes('id="root"')) {
              const cache = await caches.open(EXTRA);
              await cache.put('shell', new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } }));
            }
          }
          return res;
        })
        .catch(savedPage),
    );
    return;
  }

  if (isStatic(url)) {
    event.respondWith(
      caches.match(req, { ignoreSearch: true }).then(async (hit) => {
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) (await caches.open(EXTRA)).put(req, res.clone());
        return res;
      }),
    );
  }
});
