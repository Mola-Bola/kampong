// Kampong web: open the app with no connection, from the first visit on.
// Installing this worker saves the whole app on the device: the page, the code, fonts and images. The list of files
// is written into the built copy of this file by scripts/web-pwa.mjs (BUILD below), with a version that changes
// whenever any file does, so a new version saves itself fresh and the old one is removed.
// Pages come from the network first, so a new version shows as soon as you're online; the saved copy is used offline.
// Built files never change once published, so they're served from the saved copy.
// Data (Supabase) is not touched: the app keeps its own offline copy of what you've seen.
const BUILD = {"version":"210becc91ca9","files":["_expo/static/css/native-tabs.module-a651c580566f288ddcaa0e602ea96277.css","_expo/static/js/web/entry-77c27670ab0bb959a7c70c7e2597058e.js","assets/_kampong/node_modules/@expo-google-fonts/fredoka/600SemiBold/Fredoka_600SemiBold.89a2d8224922009e6f9b96181093b634.ttf","assets/_kampong/node_modules/@expo-google-fonts/fredoka/700Bold/Fredoka_700Bold.eaa34632fd156f78e16a584d1648ffcc.ttf","assets/_kampong/node_modules/@expo-google-fonts/nunito/600SemiBold/Nunito_600SemiBold.b1364260246b29fd9393a1a071f3af61.ttf","assets/_kampong/node_modules/@expo-google-fonts/nunito/700Bold/Nunito_700Bold.c133c0b8cd169e7798d0cd239477cf32.ttf","assets/_kampong/node_modules/@expo-google-fonts/nunito/800ExtraBold/Nunito_800ExtraBold.2b1bb82750274fc2d1043bf3891cb531.ttf","assets/_kampong/node_modules/@expo-google-fonts/nunito/900Black/Nunito_900Black.3ffae19d12dc67269f5cdd8d7a0aaeaf.ttf","assets/_kampong/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.6e435534bd35da5fef04168860a9b8fa.ttf","assets/_kampong/node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png","assets/_kampong/node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png","assets/_kampong/node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png","assets/_kampong/node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png","assets/_kampong/node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png","assets/_kampong/node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png","assets/_kampong/node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png","assets/_kampong/node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png","assets/assets/ext/hatch.0486359ae3611bd547f3984d70dfc85b.png","assets/assets/ext/oleh.e4d5e5c138c3bbbabb7f536b0dc067be.png","assets/assets/illustrations/circle-quiet.546013375da77f8c5287793646f1ec42.webp","assets/assets/illustrations/seeds-empty.b24e708cbcff88bb40f8321ebb868921.webp","assets/assets/illustrations/waiting-invite.3f215aa82bd431e84481237bd0a5d58e.webp","assets/assets/village/fade.b5ffaf8155b84981600dddc4e34a6d3c.png","assets/assets/village/hatch-house.257814b8d6d0ded8de9b425141bd3e9e.webp","assets/assets/village/house-blue.9f6242c2cb79d7d2a13c4f2515bc930c.webp","assets/assets/village/hut-butter.b34b57c90aecec459627dd59954cdf54.webp","assets/assets/village/hut-lilac.cccdc9e0ca38da99a5bf8aa051fdeaf2.webp","assets/assets/village/hut-mint.646d915c822b0da189d1add5564ff397.webp","assets/assets/village/hut-peach.52201621453725b461ebd518e2e025bc.webp","assets/assets/village/hut-rose.b7e6095c025441c2da4262a70f66263f.webp","assets/assets/village/hut-sky.87970f5875f85795058721fe6a9d23de.webp","assets/assets/village/oleh-house.7e6ec401d954972ad850160adf9b11e0.webp","assets/assets/village/plans-house.4d292d3ee989bfe41ad59a5f644800fd.webp","assets/assets/village/plot-seed.5c5ecb3bee09503c9b15564edf3c279d.webp","assets/assets/village/plot.e1b33fa12dec4a878af1e2a68802e10a.webp","assets/assets/village/scene-day.0a86ede303891d0264376f4717220c7b.webp","assets/assets/village/scene-evening.d874f84f312b5f06856f1f490e2bc523.webp","favicon.ico","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","index.html","manifest.webmanifest"]}; // filled in by scripts/web-pwa.mjs
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
