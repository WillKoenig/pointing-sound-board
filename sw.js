/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "clips/consensus.m4a",
    "revision": "5fb6e4e8c52a505382f01a61b284388f"
  },
  {
    "url": "clips/doYouConcur.m4a",
    "revision": "b3509f32acad43054a2ae41397abd478"
  },
  {
    "url": "clips/explainYourself.m4a",
    "revision": "a6655f59fc7e30237f36b7079267e816"
  },
  {
    "url": "clips/iObject.m4a",
    "revision": "0a3112382ec40cfbf58eca69bf6bf9bd"
  },
  {
    "url": "clips/sell.m4a",
    "revision": "ad4ba062cc4bab961db52dad769136a8"
  },
  {
    "url": "clips/strenuouslyObject.m4a",
    "revision": "51420264658ef23f57b99b338daa3ce4"
  },
  {
    "url": "clips/talkAmongstYourselves.m4a",
    "revision": "580438e1c0f631c626038d65033ae595"
  },
  {
    "url": "favicon-16x16.38c99324.png",
    "revision": "8db019a41fb6ec3666ced8eb6fa02446"
  },
  {
    "url": "favicon-32x32.8c60fea1.png",
    "revision": "7199858429065ff03523809e42e8cd89"
  },
  {
    "url": "favicon.af9aa088.ico",
    "revision": "b101f60fc97f7140315571813729b8af"
  },
  {
    "url": "index.html",
    "revision": "18d6453d54b51f6f913be0a169dc93c9"
  },
  {
    "url": "logo_144.6e0c3353.png",
    "revision": "7f514112a1fb6fcf9a1413578286ffac"
  },
  {
    "url": "logo_512.065ab36f.png",
    "revision": "900fedc52fc140852b79d3874ee8b92d"
  },
  {
    "url": "main.a288a17c.css",
    "revision": "04ca267e424ef0e0936cb5191bfbdd90"
  },
  {
    "url": "main.ba19d703.js",
    "revision": "2d79c16ca6ac270964da41996310bf93"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
