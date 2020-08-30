importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "img/amp_logo_white.svg",
    "revision": "ff1c832025faf6ebb36c3385ee1434c5"
  }
]);