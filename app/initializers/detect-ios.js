/*
 * Detect iOS
 * Adds a class of `ios-7` to the body of the page if the device
 * if on iOS 7 or higher
 *
 * Code comes from http://cl.ly/YEzw and http://cl.ly/YExS
 *
 */

export function initialize(/* container, application */) {
  function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
      return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
  }

  var ver = iOSversion();

  if (typeof ver !== 'undefined') {
    if (ver[0] >= 7) {
      console.log('this is an iOS 7 or later browser');
      document.body.classList.add('ios-7');
    }
  }
}

export default {
  name: 'detect-ios',
  initialize: initialize
};
