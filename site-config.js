// GitHub Pages project path. Keep the leading and trailing slash.
window.MOTIONFORGE_SITE = Object.freeze({
  base_url: '/MotionForge-Website/'
});

// Apply the project path on Pages; retain relative paths for local previews
// and anonymous mirrors, which may mount the site under a different path.
if (window.location.hostname.endsWith('.github.io')) {
  const base = document.createElement('base');
  base.href = window.MOTIONFORGE_SITE.base_url;
  document.head.append(base);
}
