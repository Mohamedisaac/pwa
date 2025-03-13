module.exports = {
    globDirectory: './', // The root directory to glob patterns against
    globPatterns: [
      '**/*.{html,css,js,db,json,jpg,png,svg,ico}', // Files to precache (all html, css, js, json, images)
    ],
    swDest: './sw.js', // Output service worker file to this path
    maximumFileSizeToCacheInBytes: 7355608,
    ignoreURLParametersMatching: [
      /^utm_/, // Ignore UTM parameters in URLs when caching
      /^fbclid$/ // Ignore Facebook click IDs
    ],
  };