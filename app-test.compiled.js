(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _storage = require('./src/storage');

// initialize session listener
(0, _storage.createSessionListener)();

window.setAndBroadcastSession = _storage.setAndBroadcastSession;

},{"./src/storage":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Sets key-value pair to sessionStorage and "broadcasts/triggers" event in
 * other open tabs to do the same
 *
 * @param {string} key
 * @param {mixed} value
 */
var setAndBroadcastSession = exports.setAndBroadcastSession = function setAndBroadcastSession(key, value) {
  // set in storage @ current tab
  sessionStorage.setItem(key, JSON.stringify(value)
  // broadcast to other open tabs
  );var broadcastMessage = {
    key: key,
    value: value
  };
  localStorage.setItem('broadcastSessionStorage', JSON.stringify(broadcastMessage));
  localStorage.removeItem('broadcastSessionStorage');
};

var removeAndBroadcastSession = exports.removeAndBroadcastSession = function removeAndBroadcastSession(key) {
  // remove from current tab
  sessionStorage.removeItem(key
  // broadcast to remove from other open tabs
  );localStorage.setItem('broadcastSessionStorageRemoval', key);
  localStorage.removeItem('broadcastSessionStorageRemoval');
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _listener = require('./listener');

var listeners = _interopRequireWildcard(_listener);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, actions, listeners);

},{"./actions":2,"./listener":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createSessionListener = exports.createSessionListener = function createSessionListener() {
  /**
   * Transfer sessionStorage key-values from one tab to another
   *
   * @param  {event} event
   * @return {void}
   */
  var sessionStorageTransfer = function sessionStorageTransfer(event) {
    console.log('event>>>', event);
    if (!event) {
      event = window.event;
    } // ie suq
    if (!event.newValue) return; // do nothing if no value to work with
    if (event.key === 'getSessionStorage') {
      // another tab asked for the sessionStorage -> send it
      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage)
      // the other tab should now have it, so we're done with it.
      );localStorage.removeItem('sessionStorage' // <- could do short timeout as well.
      );
    } else if (event.key === 'sessionStorage' && !sessionStorage.length) {
      // another tab sent data <- get it
      var data = JSON.parse(event.newValue);
      for (var key in data) {
        sessionStorage.setItem(key, data[key]);
      }
    } else if (event.key === 'broadcastSessionStorage') {
      // set a new session item from broadcast event
      var broadcastMessage = JSON.parse(event.newValue);
      sessionStorage.setItem(broadcastMessage.key, JSON.stringify(broadcastMessage.value));
    } else if (event.key === 'broadcastSessionStorageRemoval') {
      // remove a session item from broacast event
      sessionStorage.removeItem(event.newValue);
    }
  };

  /**
   * Listen for changes to localStorage
   */
  if (window.addEventListener) {
    window.addEventListener('storage', sessionStorageTransfer, false);
  } else {
    window.attachEvent('onstorage', sessionStorageTransfer);
  }

  /**
   * Ask other tabs for session storage (this is ONLY to trigger event)
   * Initializes on new tab with empty storage
   */
  if (!sessionStorage.length) {
    localStorage.setItem('getSessionStorage', 'init');
    localStorage.removeItem('getSessionStorage');
  }
};

},{}]},{},[1]);
