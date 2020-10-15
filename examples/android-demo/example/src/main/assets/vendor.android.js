var hippyReactBase =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hippy/react/dist/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animated", function() { return Animated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationSet", function() { return AnimationSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRegistry", function() { return AppRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncStorage", function() { return AsyncStorage$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackAndroid", function() { return BackAndroid$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleModule", function() { return ConsoleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return Dimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Easing", function() { return Easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Focusable", function() { return Focusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hippy", function() { return Hippy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HippyEventEmitter", function() { return HippyEventEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HippyEventListener", function() { return HippyEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HippyRegister", function() { return HippyRegister$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBackground", function() { return ImageBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoaderModule", function() { return ImageLoaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return ListView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return Navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetInfo", function() { return NetInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkModule", function() { return NetworkModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelRatio", function() { return PixelRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RNfqb", function() { return RNfqb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RNfqbEventEmitter", function() { return RNfqbEventEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RNfqbEventListener", function() { return RNfqbEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RNfqbRegister", function() { return RNfqbRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshWrapper", function() { return RefreshWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return ScrollView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return stylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerModule", function() { return TimerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIManagerModule", function() { return UIManagerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPager", function() { return ViewPager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callNative", function() { return callNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callNativeWithCallbackId", function() { return callNativeWithCallbackId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callNativeWithPromise", function() { return callNativeWithPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorParse", function() { return colorParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNativeCallback", function() { return removeNativeCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-reconciler/index.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*!
 * @hippy/react v2.0.3
 * Build at: Thu Apr 23 2020 17:44:44 GMT+0800 (China Standard Time)
 *
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2017-2020 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/* eslint-disable no-underscore-dangle */

if (!global.__GLOBAL__) {
  global.__GLOBAL__ = {};
}

const {
  __GLOBAL__
} = global;
__GLOBAL__.nodeId = 0;
__GLOBAL__.animationId = 0;
__GLOBAL__.renderCount = 0;
const {
  asyncStorage: AsyncStorage,
  bridge: Bridge,
  device: Device,
  document: UIManager,
  register: HippyRegister,
  on: addEventListener,
  off: removeEventListener,
  emit: dispatchEvent
} = global.Hippy;
var HippyGlobal = /*#__PURE__*/Object.freeze({
  __proto__: null,
  addEventListener: addEventListener,
  removeEventListener: removeEventListener,
  dispatchEvent: dispatchEvent,
  AsyncStorage: AsyncStorage,
  Bridge: Bridge,
  Device: Device,
  HippyRegister: HippyRegister,
  UIManager: UIManager
});
/* eslint-disable no-underscore-dangle */

class HippyEventHub {
  constructor(eventName) {
    this.handlerContainer = {};
    this.nextIdForHandler = 0;
    this.eventName = eventName;
  }

  addEventHandler(handler, callContext) {
    if (!handler) {
      throw new TypeError('Invalid arguments');
    }

    const currId = this.nextIdForHandler;
    this.nextIdForHandler += 1;
    const eventHandlerWrapper = {
      id: currId,
      eventHandler: handler,
      context: callContext
    };
    const idAttrName = `eventHandler_${currId}`;
    this.handlerContainer[idAttrName] = eventHandlerWrapper;
    return currId;
  }

  removeEventHandler(handlerId) {
    if (typeof handlerId !== 'number') {
      throw new TypeError('Invalid arguments');
    }

    const idAttrName = `eventHandler_${handlerId}`;

    if (this.handlerContainer[idAttrName]) {
      delete this.handlerContainer[idAttrName];
    }
  }

  notifyEvent(eventParams) {
    Object.values(this.handlerContainer).forEach(wrapperInstance => {
      if (wrapperInstance && wrapperInstance.eventHandler) {
        if (wrapperInstance.context) {
          wrapperInstance.eventHandler.call(wrapperInstance.context, eventParams);
        } else {
          wrapperInstance.eventHandler(eventParams);
        }
      }
    });
  }

  getEventListeners() {
    return Object.values(this.handlerContainer).filter(x => x).map(wrapperInstance => wrapperInstance);
  }

  getHandlerSize() {
    return Object.keys(this.handlerContainer).length;
  }

}
/* eslint-disable no-constant-condition */
// Single root instance


let rootContainer;
let rootViewId;

function setRootContainer(rootId, root) {
  rootViewId = rootId;
  rootContainer = root;
}

function getRootContainer() {
  return rootContainer;
}

function getRootViewId() {
  if (!rootViewId) {
    throw new Error('getRootViewId must execute after setRootContainer');
  }

  return rootViewId;
}

function findNodeByCondition(condition) {
  if (!rootContainer) {
    return null;
  }

  const {
    current: root
  } = rootContainer;
  const queue = [root];

  while (queue.length) {
    const targetNode = queue.shift();

    if (!targetNode) {
      break;
    }

    if (condition(targetNode)) {
      return targetNode;
    }

    if (targetNode.child) {
      queue.push(targetNode.child);
    }

    if (targetNode.sibling) {
      queue.push(targetNode.sibling);
    }
  }

  return null;
}

function findNodeById(nodeId) {
  return findNodeByCondition(node => node.stateNode && node.stateNode.nodeId === nodeId);
}
/* eslint-disable import/prefer-default-export */


const IS_NUMBER_REG = new RegExp(/^\d+$/);
let silent = false;
/**
 * Trace running information
 */

function trace(...context) {
  // In production build or silent
  if (true) {
    return;
  }
  /* eslint-disable-next-line no-console */


  console.log(...context);
}
/**
 * Warninng information output
 */


function warn(...context) {
  // In production build
  if (true) {
    return;
  }
  /* eslint-disable-next-line no-console */


  console.warn(...context);
}
/**
 * Convert unicode string to normal string
 * @param {string} text - The unicode string input
 */


function unicodeToChar(text) {
  return text.replace(/\\u[\dA-F]{4}|\\x[\dA-F]{2}/gi, match => String.fromCharCode(parseInt(match.replace(/\\u|\\x/g, ''), 16)));
}
/**
 * Convert to string as possible
 */


const numberRegEx = new RegExp('^[+-]?\\d+(\\.\\d+)?$');
/**
 * Try to convert something to number
 *
 * @param {any} input - The input try to convert number
 */

function tryConvertNumber(input) {
  if (typeof input === 'number') {
    return input;
  }

  if (typeof input === 'string' && numberRegEx.test(input)) {
    try {
      return parseFloat(input);
    } catch (err) {
      return input;
    }
  }

  return input;
}
/**
 * Determine input is function.
 *
 * @param {any} input - the input will determine is function.
 * @returns {boolean}
 */


function isFunction(input) {
  return Object.prototype.toString.call(input) === '[object Function]';
}
/**
 * Determine a string is number.
 * @param {string} input - the input will determine is number.
 * @returns {boolean}
 */


function isNumber(input) {
  return IS_NUMBER_REG.test(input);
}
/**
 * Make trace be silent.
 */


function setSilent(silentArg) {
  silent = silentArg;
}

const eventHubs = new Map();
const componentName = ['%c[event]%c', 'color: green', 'color: auto'];

function registerNativeEventHub(eventName) {
  trace(...componentName, 'registerNativeEventHub', eventName);

  if (typeof eventName !== 'string') {
    throw new TypeError(`Invalid eventName for registerNativeEventHub: ${eventName}`);
  }

  let targetEventHub = eventHubs.get(eventName);

  if (!targetEventHub) {
    targetEventHub = new HippyEventHub(eventName);
    eventHubs.set(eventName, targetEventHub);
  }

  return targetEventHub;
}

function getHippyEventHub(eventName) {
  if (typeof eventName !== 'string') {
    throw new TypeError(`Invalid eventName for getHippyEventHub: ${eventName}`);
  }

  return eventHubs.get(eventName) || null;
}

function unregisterNativeEventHub(eventName) {
  if (typeof eventName !== 'string') {
    throw new TypeError(`Invalid eventName for unregisterNativeEventHub: ${eventName}`);
  }

  if (eventHubs.has(eventName)) {
    eventHubs.delete(eventName);
  }
}

function receiveNativeEvent(nativeEvent) {
  trace(...componentName, 'receiveNativeEvent', nativeEvent);

  if (!nativeEvent || !(nativeEvent instanceof Array) || nativeEvent.length < 2) {
    throw new TypeError(`Invalid params for receiveNativeEvent: ${JSON.stringify(nativeEvent)}`);
  }

  const [eventName, eventParams] = nativeEvent;

  if (typeof eventName !== 'string') {
    throw new TypeError('Invalid arguments');
  }

  const currEventHub = getHippyEventHub(eventName);

  if (!currEventHub) {
    warn('[event] currEventHub: target eventHub is not found', eventName, nativeEvent);
    return;
  }

  currEventHub.notifyEvent(eventParams);
}

function receiveNativeGesture(nativeEvent) {
  trace(...componentName, 'receiveNativeGesture', nativeEvent);

  if (!nativeEvent) {
    return;
  }

  const {
    id: targetNodeId
  } = nativeEvent;
  const targetNode = findNodeById(targetNodeId);

  if (!targetNode) {
    return;
  }

  let eventHandled = false;
  let nextNodeItem = targetNode;
  let {
    name: eventName
  } = nativeEvent;

  do {
    if (nextNodeItem.memoizedProps && !nextNodeItem.memoizedProps[eventName] && eventName === 'onClick' && nextNodeItem.memoizedProps.onPress) {
      // Compatible with React Native
      eventName = 'onPress';
    }

    if (nextNodeItem.memoizedProps && nextNodeItem.memoizedProps[eventName] && typeof nextNodeItem.memoizedProps[eventName] === 'function') {
      try {
        eventHandled = nextNodeItem.memoizedProps[eventName](nativeEvent);
      } catch (err) {
        console.reportUncaughtException(err); // eslint-disable-line
      }
    } // If callback have no return is meaning no need the event bubbling


    if (typeof eventHandled !== 'boolean') {
      eventHandled = true;
    }

    if (eventHandled === false) {
      nextNodeItem = nextNodeItem.return;

      while (nextNodeItem && nextNodeItem.tag !== 5) {
        nextNodeItem = nextNodeItem.return;
      }
    }
  } while (!eventHandled && nextNodeItem);
}

function receiveUIComponentEvent(nativeEvent) {
  trace(...componentName, 'receiveUIComponentEvent', nativeEvent);

  if (!nativeEvent || !Array.isArray(nativeEvent) || nativeEvent.length < 2) {
    return;
  }

  const [targetNodeId, eventName, eventParam] = nativeEvent;

  if (typeof targetNodeId !== 'number' || typeof eventName !== 'string') {
    return;
  }

  const targetNode = findNodeById(targetNodeId);

  if (!targetNode) {
    return;
  }

  if (targetNode.memoizedProps && targetNode.memoizedProps[eventName] && typeof targetNode.memoizedProps[eventName] === 'function') {
    targetNode.memoizedProps[eventName](eventParam);
  }
}

const EventDispatcher = {
  registerNativeEventHub,
  getHippyEventHub,
  unregisterNativeEventHub,
  receiveNativeEvent,
  receiveNativeGesture,
  receiveUIComponentEvent
};

if (global.__GLOBAL__) {
  global.__GLOBAL__.jsModuleList.EventDispatcher = EventDispatcher;
}

class EventEmitterRevoker {
  constructor(id, listener) {
    this.callback = id;
    this.bindListener = listener;
  }

  remove() {
    if (typeof this.callback !== 'number' || !this.bindListener) {
      return;
    }

    this.bindListener.removeCallback(this.callback);
    delete this.bindListener;
  }

}

class HippyEventListener {
  constructor(event) {
    this.eventName = event;
    this.listenerIds = [];
  }

  addCallback(handleFunc, callContext) {
    if (typeof handleFunc !== 'function') {
      throw new TypeError('Invalid arguments');
    }

    const eventHub = EventDispatcher.registerNativeEventHub(this.eventName);

    if (!eventHub) {
      throw new ReferenceError(`No listeners for ${this.eventName}`);
    }

    const id = eventHub.addEventHandler(handleFunc, callContext);

    if (typeof id !== 'number') {
      throw new Error('Fail to addEventHandler');
    }

    this.listenerIds.push(id);
    return id;
  }

  removeCallback(callbackId) {
    if (typeof callbackId !== 'number') {
      throw new TypeError('Invalid arguments');
    }

    const eventHub = EventDispatcher.getHippyEventHub(this.eventName);

    if (!eventHub) {
      throw new ReferenceError(`No listeners for ${this.eventName}`);
    }

    eventHub.removeEventHandler(callbackId);
    const size = this.listenerIds.length;

    for (let i = 0; i < size; i += 1) {
      if (callbackId === this.listenerIds[i]) {
        this.listenerIds.splice(i, 1);
        break;
      }
    }
  }

  unregister() {
    const size = this.listenerIds.length;
    const eventHub = EventDispatcher.getHippyEventHub(this.eventName);

    if (!eventHub) {
      throw new ReferenceError(`No listeners for ${this.eventName}`);
    }

    for (let i = 0; i < size; i += 1) {
      eventHub.removeEventHandler(this.listenerIds[i]);
    }

    this.listenerIds = [];

    if (eventHub.getHandlerSize() === 0) {
      EventDispatcher.unregisterNativeEventHub(this.eventName);
    }
  }

  getSize() {
    return this.listenerIds.length;
  }

}

function getNameForEvent(event) {
  if (typeof event !== 'string') {
    throw new TypeError('Invalid arguments');
  }

  return `eventEmitter_${event}`;
}

class HippyEventEmitter {
  constructor(sharedListeners) {
    if (sharedListeners && typeof sharedListeners === 'object') {
      this.hippyEventListeners = sharedListeners;
    } else {
      this.hippyEventListeners = {};
    }
  }

  sharedListeners() {
    return this.hippyEventListeners;
  }

  addListener(event, callback, context) {
    if (typeof event !== 'string' || typeof callback !== 'function') {
      throw new TypeError('Invalid arguments');
    }

    let registedListener = this.hippyEventListeners[getNameForEvent(event)];

    if (!registedListener) {
      registedListener = new HippyEventListener(event);
      this.hippyEventListeners[getNameForEvent(event)] = registedListener;
    }

    const listenerId = registedListener.addCallback(callback, context);

    if (typeof listenerId !== 'number') {
      throw new Error('Fail to addCallback');
    }

    return new EventEmitterRevoker(listenerId, registedListener);
  }

  removeAllListeners(event) {
    if (typeof event !== 'string') {
      throw new TypeError('Invalid arguments');
    }

    const registedListener = this.hippyEventListeners[getNameForEvent(event)];

    if (registedListener) {
      registedListener.unregister();
      delete this.hippyEventListeners[getNameForEvent(event)];
    }
  }
  /* eslint-disable-next-line class-methods-use-this */


  emit(event, param) {
    if (typeof event !== 'string') {
      return false;
    }

    const eventHub = EventDispatcher.getHippyEventHub(event);

    if (!eventHub) {
      return false;
    }

    eventHub.notifyEvent(param);
    return true;
  }

  listenerSize(event) {
    if (typeof event !== 'string') {
      throw new TypeError('Invalid arguments');
    }

    const registedListener = this.hippyEventListeners[getNameForEvent(event)];

    if (registedListener) {
      return registedListener.getSize();
    }

    return 0;
  }

}

HippyEventEmitter.emit = HippyEventEmitter.prototype.emit;

function call(...args) {
  return `\\(\\s*(${args.join(')\\s*,\\s*(')})\\s*\\)`;
}

const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = `${NUMBER}%`;
const matchers = {
  rgb: new RegExp(`rgb${call(NUMBER, NUMBER, NUMBER)}`),
  rgba: new RegExp(`rgba${call(NUMBER, NUMBER, NUMBER, NUMBER)}`),
  hsl: new RegExp(`hsl${call(NUMBER, PERCENTAGE, PERCENTAGE)}`),
  hsla: new RegExp(`hsla${call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)}`),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/
};
/* eslint-disable no-bitwise */

function parse255(str) {
  const int = parseInt(str, 10);

  if (int < 0) {
    return 0;
  }

  if (int > 255) {
    return 255;
  }

  return int;
}

function parse1(str) {
  const num = parseFloat(str);

  if (num < 0) {
    return 0;
  }

  if (num > 1) {
    return 255;
  }

  return Math.round(num * 255);
}

function hue2rgb(p, q, tx) {
  let t = tx;

  if (t < 0) {
    t += 1;
  }

  if (t > 1) {
    t -= 1;
  }

  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }

  if (t < 1 / 2) {
    return q;
  }

  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }

  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parsePercentage(str) {
  const int = parseFloat(str);

  if (int < 0) {
    return 0;
  }

  if (int > 100) {
    return 1;
  }

  return int / 100;
}

function baseColor(color) {
  let match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }

    return null;
  }

  match = matchers.hex6.exec(color);

  if (Array.isArray(match)) {
    return parseInt(`${match[1]}ff`, 16) >>> 0;
  }

  if (Object.hasOwnProperty.call(colors, color)) {
    return colors[color];
  }

  match = matchers.rgb.exec(color);

  if (Array.isArray(match)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 // g
    | parse255(match[3]) << 8 // b
    | 0x000000ff // a
    ) >>> 0;
  }

  match = matchers.rgba.exec(color);

  if (match) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 // g
    | parse255(match[3]) << 8 // b
    | parse1(match[4]) // a
    ) >>> 0;
  }

  match = matchers.hex3.exec(color);

  if (match) {
    return parseInt(`${match[1] + match[1] // r
    + match[2] + match[2] // g
    + match[3] + match[3] // b
    }ff`, // a
    16) >>> 0;
  }

  match = matchers.hex8.exec(color);

  if (match) {
    return parseInt(match[1], 16) >>> 0;
  }

  match = matchers.hex4.exec(color);

  if (match) {
    return parseInt(match[1] + match[1] // r
    + match[2] + match[2] // g
    + match[3] + match[3] // b
    + match[4] + match[4], // a
    16) >>> 0;
  }

  match = matchers.hsl.exec(color);

  if (match) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3])) | 0x000000ff // a
    ) >>> 0;
  }

  match = matchers.hsla.exec(color);

  if (match) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3])) | parse1(match[4]) // a
    ) >>> 0;
  }

  return null;
}
/**
 * The the string contents from clipboard
 */


function getString() {
  return Bridge.callNativeWithPromise('ClipboardModule', 'getString');
}
/**
 * Set the string content to clipboard
 *
 * @param {string} text - The string content that will set into clipboard.
 */


function setString(text) {
  Bridge.callNative('ClipboardModule', 'setString', text);
}

var clipboard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getString: getString,
  setString: setString
});
/**
 * Get cookies from url
 *
 * @param {string} url - Specific url for cookie
 */

function getCookies(url) {
  return Bridge.callNativeWithPromise('network', 'getCookie', url);
}
/**
 * Set cookie to url
 *
 * @param {string} url - Specific url for cookie.
 * @param {string} keyValue - Cookie key and value string, split with `:`.
 * @param {Date|string} [expires] - UTC Date string or Date object for cookie expire.
 */


function setCookie(url, keyValue, expires) {
  let expireStr = '';

  if (typeof expires === 'string') {
    expireStr = expires;
  }

  if (expires instanceof Date) {
    expireStr = expires.toUTCString();
  }

  Bridge.callNative('network', 'setCookie', url, keyValue, expireStr);
}

var cookieModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getCookies: getCookies,
  setCookie: setCookie
});
/**
 * Get the image size before rendering.
 *
 * @param {string} url - Get image url.
 */

function getSize(url) {
  return Bridge.callNativeWithPromise('ImageLoaderModule', 'getSize', url);
}
/**
 * Prefetch image, to make rendering in next more faster.
 *
 * @param {string} url - Prefetch image url.
 */


function prefetch(url) {
  Bridge.callNative('ImageLoaderModule', 'prefetch', url);
}

var imageLoaderModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getSize: getSize,
  prefetch: prefetch
});
/* eslint-disable no-use-before-define */

const DEVICE_CONNECTIVITY_EVENT = 'networkStatusDidChange';
const subScriptions = new Map();
let NetInfoEventEmitter;

class NetInfoRevoker {
  constructor(eventName, listener) {
    this.eventName = eventName;
    this.listener = listener;
  }

  remove() {
    if (!this.eventName || !this.listener) {
      return;
    }

    removeEventListener$1(this.eventName, this.listener);
    delete this.listener;
  }

}
/**
 * Add a network status event listener
 *
 * @param {string} eventName - Event name will listen for NetInfo module,
 *                             use `change` for listen network change.
 * @param {function} listener - Event status event callback
 * @returns {object} NetInfoRevoker - The event revoker for destroy the network info event listener.
 */


function addEventListener$1(eventName, listener) {
  NetInfoEventEmitter = new HippyEventEmitter();
  let event = eventName;

  if (event && event === 'change') {
    event = DEVICE_CONNECTIVITY_EVENT;
  }

  const count = NetInfoEventEmitter.listenerSize(event);

  if (count < 1) {
    Bridge.callNative('NetInfo', 'addListener', event);
  }

  const handler = NetInfoEventEmitter.addListener(event, data => {
    listener(data);
  }); // FIXME: Seems only accept one callback for each event, should support multiple callback.

  subScriptions.set(handler, handler);
  return new NetInfoRevoker(event, listener);
}
/**
 * Removenetwork status event event listener
 *
 * @param {string} eventName - Event name will listen for NetInfo module,
 *                             use `change` for listen network change.
 * @param {function} [handler] - The specific event listener will remove.
 */


function removeEventListener$1(eventName, listener) {
  if (listener instanceof NetInfoRevoker) {
    listener.remove();
    return;
  }

  let event = eventName;

  if (eventName && eventName === 'change') {
    event = DEVICE_CONNECTIVITY_EVENT;
  }

  const count = NetInfoEventEmitter.listenerSize(event);

  if (count <= 1) {
    Bridge.callNative('NetInfo', 'removeListener', event);
  }

  const handler = subScriptions.get(listener);

  if (!handler) {
    return;
  }

  handler.remove();
  subScriptions.delete(listener);
}
/**
 * Get the current network status
 */


function fetch() {
  return Bridge.callNativeWithPromise('NetInfo', 'getCurrentConnectivity').then(resp => resp.network_info);
}

var networkInfo = /*#__PURE__*/Object.freeze({
  __proto__: null,
  addEventListener: addEventListener$1,
  removeEventListener: removeEventListener$1,
  fetch: fetch
});
const {
  createNode,
  updateNode,
  deleteNode,
  flushBatch,
  startBatch,
  endBatch,
  sendRenderError
} = UIManager;
const getNodeById = findNodeById;
/**
 * Get the nodeId from FiberNode ref.
 *
 * @param {Fiber} ref - ref instance.
 */

function getElementFromFiberRef(ref) {
  // FIXME: should not use the private _reactInternalFiber
  let targetNode = ref._reactInternalFiber.child;

  while (targetNode && !targetNode.stateNode) {
    targetNode = targetNode.child;
  }

  if (!targetNode || !targetNode.stateNode) {
    return null;
  }

  return targetNode.stateNode;
}
/**
 * Get the nodeId number by ref
 * Most use in the module access components.
 *
 * @param {string | Fiber | Fiber} ref - ref instance, reference to the class is recommend
 */


function getNodeIdByRef(ref) {
  // typeof ref === 'string'
  if (typeof ref === 'string') {
    warn(`getNodeIdByRef('${ref}') use string ref will affect to performance, recommend use reference to the ref instead`);
    const targetElement = findNodeByCondition(node => {
      /* eslint-disable-next-line no-underscore-dangle */
      if (!node.return || !node.return.ref || !node.return.ref._stringRef) {
        return false;
      }
      /* eslint-disable-next-line no-underscore-dangle */


      return node.return.ref._stringRef === ref;
    });

    if (!targetElement || !targetElement.stateNode) {
      return 0;
    }

    return targetElement.stateNode.nodeId;
  } // typeof ref === 'Fiber'


  if (!ref.nodeId) {
    const targetElement = getElementFromFiberRef(ref);

    if (!targetElement) {
      return 0;
    }

    return targetElement.nodeId;
  } // typeof ref === 'Element'


  return ref.nodeId;
}
/**
 * Component access UI functions
 *
 * @param {ViewNode} ref - Element ref that have nodeId.
 * @param {string} funcName - function name.
 * @param {Array} option - fucntion options.
 * @param {function} callback - get result from callUIFunction.
 */


function callUIFunction(ref, funcName, ...options) {
  let {
    nativeName: componentName,
    nodeId
  } = ref;

  if (!nodeId || !componentName) {
    const targetElement = getElementFromFiberRef(ref);

    if (targetElement) {
      ({
        nodeId,
        nativeName: componentName
      } = targetElement);
    }
  }

  if (!componentName) {
    throw new Error('callUIFunction is calling a unnamed component');
  }

  if (!nodeId) {
    throw new Error('callUIFunction is calling a component have no nodeId');
  }

  let [paramList, callback] = options;

  if (isFunction(paramList)) {
    callback = paramList;
    paramList = [];
  }

  const rootViewId = getRootViewId();

  if (rootViewId === null) {
    return;
  }

  if (Device.platform.OS === 'ios') {
    if (isFunction(callback) && Array.isArray(paramList)) {
      paramList.push(callback);
    }

    Bridge.callNative('UIManagerModule', 'callUIFunction', [componentName, nodeId, funcName, paramList]);
  } else if (Device.platform.OS === 'android') {
    if (isFunction(callback)) {
      Bridge.callNative('UIManagerModule', 'callUIFunction', [nodeId, funcName, paramList], callback);
    } else {
      Bridge.callNative('UIManagerModule', 'callUIFunction', [nodeId, funcName, paramList]);
    }
  }
}
/**
 * Get the ref position and size in the visible window.
 * > For the position and size in the layout, use onLayout event.
 *
 * @param {Fiber | Element} ref - ref that need to measure.
 * @param {function} callBack
 */


function measureInWindow(ref, callback) {
  const nodeId = getNodeIdByRef(ref);
  return new Promise((resolve, reject) => {
    if (!nodeId) {
      if (callback && isFunction(callback)) {
        // Forward compatibility for old callback
        callback('this view is null');
      }

      return reject(new Error('measureInWindow cannot get nodeId'));
    }

    return Bridge.callNative('UIManagerModule', 'measureInWindow', nodeId, layout => {
      if (callback && isFunction(callback)) {
        callback(layout);
      }

      if (layout === 'this view is null') {
        return reject(new Error('Android cannot get the node'));
      }

      return resolve(layout);
    });
  });
}

var uiManagerModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createNode: createNode,
  updateNode: updateNode,
  deleteNode: deleteNode,
  flushBatch: flushBatch,
  startBatch: startBatch,
  endBatch: endBatch,
  sendRenderError: sendRenderError,
  getNodeById: getNodeById,
  getNodeIdByRef: getNodeIdByRef,
  getElementFromFiberRef: getElementFromFiberRef,
  callUIFunction: callUIFunction,
  measureInWindow: measureInWindow
});
/* eslint-disable @typescript-eslint/no-unused-vars */

const hippyEventEmitter = new HippyEventEmitter();
const backPressSubscriptions = new Set();
/**
 * Android hardware back button event listener.
 */

const realBackAndroid = {
  exitApp() {
    Bridge.callNative('DeviceEventModule', 'invokeDefaultBackPressHandler');
  },

  addListener(handler) {
    Bridge.callNative('DeviceEventModule', 'setListenBackPress', true);
    backPressSubscriptions.add(handler);
    return {
      remove() {
        realBackAndroid.removeListener(handler);
      }

    };
  },

  removeListener(handler) {
    backPressSubscriptions.delete(handler);

    if (backPressSubscriptions.size === 0) {
      Bridge.callNative('DeviceEventModule', 'setListenBackPress', false);
    }
  },

  initEventListener() {
    hippyEventEmitter.addListener('hardwareBackPress', () => {
      let invokeDefault = true;
      const subscriptions = [...backPressSubscriptions].reverse();
      subscriptions.every(subscription => {
        if (typeof subscription === 'function' && subscription()) {
          invokeDefault = false;
          return false;
        }

        return true;
      });

      if (invokeDefault) {
        realBackAndroid.exitApp();
      }
    });
  }

};
/**
 * Fake BackAndroid for iOS
 */

const fakeBackAndroid = {
  exitApp() {},

  addListener(handler) {
    return {
      remove() {}

    };
  },

  removeListener(handler) {},

  initEventListener() {}

};

const BackAndroid = (() => {
  if (true) {
    realBackAndroid.initEventListener();
    return realBackAndroid;
  }

  return fakeBackAndroid;
})();

const {
  addEventListener: addEventListener$2,
  removeEventListener: removeEventListener$2,
  dispatchEvent: dispatchEvent$1,
  AsyncStorage: AsyncStorage$1,
  Bridge: Bridge$1,
  Device: Device$1,
  HippyRegister: HippyRegister$1
} = HippyGlobal;
var Native = /*#__PURE__*/Object.freeze({
  __proto__: null,
  addEventListener: addEventListener$2,
  removeEventListener: removeEventListener$2,
  dispatchEvent: dispatchEvent$1,
  AsyncStorage: AsyncStorage$1,
  BackAndroid: BackAndroid,
  Bridge: Bridge$1,
  Clipboard: clipboard,
  Cookie: cookieModule,
  Device: Device$1,
  HippyRegister: HippyRegister$1,
  ImageLoader: imageLoaderModule,
  NetworkInfo: networkInfo,
  UIManager: uiManagerModule
});
/* eslint-disable no-bitwise */

/**
 * Parse the color value to integer that native understand.
 *
 * @param {string} color - The color value.
 * @param {object} options - Color options.
 * @param {android|ios} options.platform - Current executing platform.
 */

function colorParse(color, options = {}) {
  if (Number.isInteger(color)) {
    return color;
  }

  let int32Color = baseColor(color);

  if (!options.platform) {
    /* eslint-disable-next-line no-param-reassign */
    options.platform = "android" || false;
  }

  if (int32Color === null) {
    return 0;
  }

  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;

  if (options.platform === 'android') {
    int32Color |= 0;
  }

  return int32Color;
}
/**
 * Parse the color values array to integer array that native understand.
 *
 * @param {string[]} colorArray The color values array.
 * @param {object} options Color options.
 * @param {android|ios} options.platform Current executing platform.
 */


function colorArrayParse(colorArray, options) {
  if (!Array.isArray(colorArray)) {
    warn('Input color value is not a array', colorArray);
    return [0];
  }

  return colorArray.map(color => colorParse(color, options));
}
/* eslint-disable no-underscore-dangle */


const componentName$1 = ['%c[native]%c', 'color: red', 'color: auto'];
const NODE_OPERATION_TYPES = {
  createNode: Symbol('createNode'),
  updateNode: Symbol('updateNode'),
  deleteNode: Symbol('deleteNode')
};
let __batchIdle = true;
let __batchNodes = [];
/**
 * Convert an ordered node array into multiple fragments
 */

function chunkNodes(batchNodes) {
  const result = [];

  for (let i = 0; i < batchNodes.length; i += 1) {
    const chunk = batchNodes[i];
    const {
      type,
      nodes
    } = chunk;
    const _chunk = result[result.length - 1];

    if (!_chunk || _chunk.type !== type) {
      result.push({
        type,
        nodes
      });
    } else {
      _chunk.nodes = _chunk.nodes.concat(nodes);
    }
  }

  return result;
}

function startBatch$1() {
  if (__batchIdle) {
    startBatch();
  }
}

function endBatch$1(rootViewId) {
  if (!__batchIdle) {
    return;
  }

  __batchIdle = false;
  Promise.resolve().then(() => {
    const chunks = chunkNodes(__batchNodes);
    chunks.forEach(chunk => {
      switch (chunk.type) {
        case NODE_OPERATION_TYPES.createNode:
          trace(...componentName$1, 'createNode', chunk.nodes);
          createNode(rootViewId, chunk.nodes);
          break;

        case NODE_OPERATION_TYPES.updateNode:
          trace(...componentName$1, 'updateNode', chunk.nodes); // FIXME: iOS should be able to update mutiple nodes at once.

          if ( false || Device.platform.OS === 'ios') {
            chunk.nodes.forEach(node => updateNode(rootViewId, [node]));
          } else {
            updateNode(rootViewId, chunk.nodes);
          }

          break;

        case NODE_OPERATION_TYPES.deleteNode:
          trace(...componentName$1, 'deleteNode', chunk.nodes); // FIXME: iOS should be able to delete mutiple nodes at once.

          if ( false || Device.platform.OS === 'ios') {
            chunk.nodes.forEach(node => deleteNode(rootViewId, [node]));
          } else {
            deleteNode(rootViewId, chunk.nodes);
          }

          break;
        // pass
      }
    });
    endBatch();
    __batchNodes = [];
    __batchIdle = true;
  });
}
/**
 * Translate to native props from attributes and meta
 */


function getNativeProps(node) {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const _node$attributes = node.attributes,
        {
    children
  } = _node$attributes,
        otherProps = _objectWithoutProperties(_node$attributes, ["children"]);

  return otherProps;
}
/**
 * Render Element to native
 */


function renderToNative(rootViewId, targetNode) {
  if (!targetNode.nativeName) {
    warn('Component need to define the native name', targetNode);
    return null;
  }

  if (targetNode.meta.skipAddToDom) {
    return null;
  }

  if (!targetNode.meta.component) {
    throw new Error(`Specific tag is not supported yet: ${targetNode.tagName}`);
  } // Translate to native node


  return {
    id: targetNode.nodeId,
    pId: targetNode.parentNode && targetNode.parentNode.nodeId || rootViewId,
    index: targetNode.index,
    name: targetNode.nativeName,
    props: _objectSpread(_objectSpread({}, getNativeProps(targetNode)), {}, {
      style: targetNode.style
    })
  };
}
/**
 * Render Element with child to native
 */


function renderToNativeWithChildren(rootViewId, node) {
  const nativeLanguages = [];
  node.traverseChildren(targetNode => {
    const nativeNode = renderToNative(rootViewId, targetNode);

    if (nativeNode) {
      nativeLanguages.push(nativeNode);
    }
  });
  return nativeLanguages;
}

function isLayout(node) {
  const container = getRootContainer();

  if (!container) {
    return false;
  } // Determine node is a Document instance


  return node instanceof container.containerInfo.constructor;
}
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */


function insertChild(parentNode, childNode, atIndex = -1) {
  if (!parentNode) {
    return;
  }

  if (childNode.meta.skipAddToDom) {
    return;
  }

  const rootViewId = getRootViewId(); // Render the root node

  if (isLayout(parentNode) && !parentNode.isMounted) {
    // Start real native work.
    const translated = renderToNativeWithChildren(rootViewId, childNode);
    startBatch$1();

    __batchNodes.push({
      type: NODE_OPERATION_TYPES.createNode,
      nodes: translated
    });

    endBatch$1(rootViewId);
    parentNode.traverseChildren(node => {
      if (!node.isMounted) {
        node.isMounted = true;
      }
    }); // Render others child nodes.
  } else if (parentNode.isMounted && !childNode.isMounted) {
    const translated = renderToNativeWithChildren(rootViewId, childNode);
    startBatch$1();

    __batchNodes.push({
      type: NODE_OPERATION_TYPES.createNode,
      nodes: translated
    });

    endBatch$1(rootViewId);
    childNode.traverseChildren(node => {
      if (!node.isMounted) {
        node.isMounted = true;
      }
    });
  }
}

function removeChild(parentNode, childNode) {
  if (!childNode || childNode.meta.skipAddToDom) {
    return;
  }

  childNode.isMounted = false;
  childNode.traverseChildren(targetNode => {
    if (targetNode.isMounted) {
      targetNode.isMounted = false;
    }
  });
  const rootViewId = getRootViewId();
  const deleteNodeIds = [{
    id: childNode.nodeId,
    pId: childNode.parentNode ? childNode.parentNode.nodeId : rootViewId,
    index: childNode.index
  }];
  startBatch$1();

  __batchNodes.push({
    type: NODE_OPERATION_TYPES.deleteNode,
    nodes: deleteNodeIds
  });

  endBatch$1(rootViewId);
}

function updateChild(parentNode) {
  if (!parentNode.isMounted) {
    return;
  }

  const rootViewId = getRootViewId();
  const translated = renderToNative(rootViewId, parentNode);
  startBatch$1();

  if (translated) {
    __batchNodes.push({
      type: NODE_OPERATION_TYPES.updateNode,
      nodes: [translated]
    });
  }

  endBatch$1(rootViewId);
}

function updateWithChildren(parentNode) {
  if (!parentNode.isMounted) {
    return;
  }

  const rootViewId = getRootViewId();
  const translated = renderToNativeWithChildren(rootViewId, parentNode);
  startBatch$1();

  __batchNodes.push({
    type: NODE_OPERATION_TYPES.updateNode,
    nodes: translated
  });

  endBatch$1(rootViewId);
}
/* eslint-disable no-underscore-dangle */


let currentNodeId = 0;

function getNodeId() {
  currentNodeId += 1; // currentNodeId % 10 === 0 is rootView
  // It's a limitation of iOS SDK.

  if (currentNodeId % 10 === 0) {
    currentNodeId += 1;
  }

  return currentNodeId;
}

class ViewNode {
  constructor() {
    // Component meta information, such as native component will use.
    this.meta = {
      component: {}
    }; // Will change to be true after insert into Native dom.

    this._isMounted = false; // Index number in children, will update at traverseChildren method.

    this.index = 0; // Relation nodes.

    this.childNodes = [];
    this.parentNode = null;
    this.prevSibling = null;
    this.nextSibling = null; // Virtual DOM node id, will used in native to identify.

    this.nodeId = getNodeId();
  }
  /* istanbul ignore next */


  toString() {
    return this.constructor.name;
  }

  get firstChild() {
    return this.childNodes.length ? this.childNodes[0] : null;
  }

  get lastChild() {
    return this.childNodes.length ? this.childNodes[this.childNodes.length - 1] : null;
  }

  get isMounted() {
    return this._isMounted;
  }

  set isMounted(isMounted) {
    // TODO: Maybe need validation, maybe not.
    this._isMounted = isMounted;
  }

  insertBefore(childNode, referenceNode) {
    if (!childNode) {
      throw new Error('Can\'t insert child.');
    }

    if (!referenceNode) {
      return this.appendChild(childNode);
    }

    if (referenceNode.parentNode !== this) {
      throw new Error('Can\'t insert child, because the reference node has a different parent.');
    }

    if (childNode.parentNode && childNode.parentNode !== this) {
      throw new Error('Can\'t insert child, because it already has a different parent.');
    }

    const index = this.childNodes.indexOf(referenceNode);
    childNode.parentNode = this;
    childNode.nextSibling = referenceNode;
    childNode.prevSibling = this.childNodes[index - 1];
    referenceNode.prevSibling = childNode;
    this.childNodes.splice(index, 0, childNode);
    return insertChild(this, childNode, index);
  }

  moveChild(childNode, referenceNode) {
    if (!childNode) {
      throw new Error('Can\'t mvoe child.');
    }

    if (!referenceNode) {
      return this.appendChild(childNode);
    }

    if (referenceNode.parentNode !== this) {
      throw new Error('Can\'t move child, because the reference node has a different parent.');
    }

    if (childNode.parentNode && childNode.parentNode !== this) {
      throw new Error('Can\'t move child, because it already has a different parent.');
    }

    const oldIndex = this.childNodes.indexOf(childNode);
    const newIndex = this.childNodes.indexOf(referenceNode); // return if the moved index is the same as the previous one

    if (newIndex === oldIndex) {
      return childNode;
    } // set new siblings relations


    childNode.nextSibling = referenceNode;
    childNode.prevSibling = referenceNode.prevSibling;
    referenceNode.prevSibling = childNode;

    if (this.childNodes[newIndex - 1]) {
      this.childNodes[newIndex - 1].nextSibling = childNode;
    }

    if (this.childNodes[newIndex + 1]) {
      this.childNodes[newIndex + 1].prevSibling = childNode;
    }

    if (this.childNodes[oldIndex - 1]) {
      this.childNodes[oldIndex - 1].nextSibling = this.childNodes[oldIndex + 1];
    }

    if (this.childNodes[oldIndex + 1]) {
      this.childNodes[oldIndex + 1].prevSibling = this.childNodes[oldIndex - 1];
    } // remove old child node from native


    removeChild(this, childNode); // remove old child and insert new child, which is like moving child

    this.childNodes.splice(newIndex, 0, childNode);
    this.childNodes.splice(oldIndex + (newIndex < oldIndex ? 1 : 0), 1); // should filter empty nodes before finding the index of node

    const atIndex = this.childNodes.filter(ch => ch.index > -1).indexOf(childNode);
    return insertChild(this, childNode, atIndex);
  }

  appendChild(childNode) {
    if (!childNode) {
      throw new Error('Can\'t append child.');
    }

    if (childNode.parentNode && childNode.parentNode !== this) {
      throw new Error('Can\'t append child, because it already has a different parent.');
    }

    childNode.parentNode = this;

    if (this.lastChild) {
      childNode.prevSibling = this.lastChild;
      this.lastChild.nextSibling = childNode;
    }

    this.childNodes.push(childNode);
    insertChild(this, childNode, this.childNodes.length - 1);
  }

  removeChild(childNode) {
    if (!childNode) {
      throw new Error('Can\'t remove child.');
    }

    if (!childNode.parentNode) {
      throw new Error('Can\'t remove child, because it has no parent.');
    }

    if (childNode.parentNode !== this) {
      throw new Error('Can\'t remove child, because it has a different parent.');
    }

    if (childNode.meta.skipAddToDom) {
      return;
    }

    removeChild(this, childNode); // FIXME: parentNode should be null when removeChild, But it breaks add the node again.
    //        Issue position: https://github.com/vuejs/vue/tree/master/src/core/vdom/patch.js#L250
    // childNode.parentNode = null;

    if (childNode.prevSibling) {
      childNode.prevSibling.nextSibling = childNode.nextSibling;
      childNode.prevSibling = null;
    }

    if (childNode.nextSibling) {
      childNode.nextSibling.prevSibling = childNode.prevSibling;
      childNode.nextSibling = null;
    }

    this.childNodes = this.childNodes.filter(node => node !== childNode);
  }
  /**
   * Find a specific target with condition
   */


  findChild(condition) {
    const yes = condition(this);

    if (yes) {
      return this;
    }

    if (this.childNodes.length) {
      for (let i = 0; i < this.childNodes.length; i += 1) {
        const childNode = this.childNodes[i];
        const targetChild = this.findChild.call(childNode, condition);

        if (targetChild) {
          return targetChild;
        }
      }
    }

    return null;
  }
  /**
   * Traverse the children and execute callback
   */


  traverseChildren(callback) {
    // Find the index and apply callback
    let index;

    if (this.parentNode) {
      index = this.parentNode.childNodes.filter(node => !node.meta.skipAddToDom).indexOf(this);
    } else {
      index = 0;
    }

    this.index = index;
    callback(this); // Find the children

    if (this.childNodes.length) {
      this.childNodes.forEach(childNode => {
        this.traverseChildren.call(childNode, callback);
      });
    }
  }

}
/* eslint-disable import/prefer-default-export */


function repeatCountDict(repeatCount) {
  if (repeatCount === 'loop') {
    return -1;
  }

  return repeatCount;
}

const AnimationEventEmitter = new HippyEventEmitter();
/**
 * Better performance of Animation solution.
 *
 * It pushes the animation scheme to native at once.
 */

class Animation {
  constructor(config) {
    let startValue = 0;

    if (config.startValue && config.startValue.constructor && config.startValue.constructor.name === 'Animation') {
      startValue = {
        animationId: config.startValue.animationId
      };
    } else {
      ({
        startValue
      } = config);
    }

    this.mode = config.mode || 'timing';
    this.delay = config.delay || 0;
    this.startValue = startValue || 0;
    this.toValue = config.toValue || 0;
    this.valueType = config.valueType || undefined;
    this.duration = config.duration || 0;
    this.direction = config.direction || 'center';
    this.timingFunction = config.timingFunction || 'linear';
    this.repeatCount = repeatCountDict(config.repeatCount || 0);
    this.inputRange = config.inputRange || [];
    this.outputRange = config.outputRange || [];
    this.animationId = Bridge$1.callNativeWithCallbackId('AnimationModule', 'createAnimation', true, this.mode, Object.assign({
      delay: this.delay,
      startValue: this.startValue,
      toValue: this.toValue,
      duration: this.duration,
      direction: this.direction,
      timingFunction: this.timingFunction,
      repeatCount: this.repeatCount,
      inputRange: this.inputRange,
      outputRange: this.outputRange
    }, this.valueType ? {
      valueType: this.valueType
    } : {}));
    this.destroy = this.destroy.bind(this); // TODO: Deprecated compatible, will remove soon.

    this.onRNfqbAnimationStart = this.onAnimationStart.bind(this);
    this.onRNfqbAnimationEnd = this.onAnimationEnd.bind(this);
    this.onRNfqbAnimationCancel = this.onAnimationCancel.bind(this);
    this.onRNfqbAnimationRepeat = this.onAnimationRepeat.bind(this);
    this.onHippyAnimationStart = this.onAnimationStart.bind(this);
    this.onHippyAnimationEnd = this.onAnimationEnd.bind(this);
    this.onHippyAnimationCancel = this.onAnimationCancel.bind(this);
    this.onHippyAnimationRepeat = this.onAnimationRepeat.bind(this);
  }
  /**
   * Remove all of animation event listener
   */


  removeEventListener() {
    if (this.animationStartListener) {
      this.animationStartListener.remove();
    }

    if (this.animationEndListener) {
      this.animationEndListener.remove();
    }

    if (this.animationCancelListener) {
      this.animationCancelListener.remove();
    }

    if (this.animationRepeatListener) {
      this.animationRepeatListener.remove();
    }
  }
  /**
   * Start animation execution
   */


  start() {
    this.removeEventListener(); // Set as iOS default

    let animationEventName = 'onAnimation'; // If running in Android, change it.

    if (true) {
      animationEventName = 'onHippyAnimation';
    }

    if (typeof this.onAnimationStartCallback === 'function') {
      this.animationStartListener = AnimationEventEmitter.addListener(`${animationEventName}Start`, animationId => {
        if (animationId === this.animationId) {
          this.animationStartListener.remove();

          if (typeof this.onAnimationStartCallback === 'function') {
            this.onAnimationStartCallback();
          }
        }
      });
    }

    if (typeof this.onAnimationEndCallback === 'function') {
      this.animationEndListener = AnimationEventEmitter.addListener(`${animationEventName}End`, animationId => {
        if (animationId === this.animationId) {
          this.animationEndListener.remove();

          if (typeof this.onAnimationEndCallback === 'function') {
            this.onAnimationEndCallback();
          }
        }
      });
    }

    if (typeof this.onAnimationCancelCallback === 'function') {
      this.animationCancelListener = AnimationEventEmitter.addListener(`${animationEventName}Cancel`, animationId => {
        if (animationId === this.animationId) {
          this.animationCancelListener.remove();

          if (typeof this.onAnimationCancelCallback === 'function') {
            this.onAnimationCancelCallback();
          }
        }
      });
    }

    if (typeof this.onAnimationRepeatCallback === 'function') {
      this.animationRepeatListener = AnimationEventEmitter.addListener(`${animationEventName}Repeat`, animationId => {
        if (animationId === this.animationId) {
          if (typeof this.onAnimationRepeatCallback === 'function') {
            this.onAnimationRepeatCallback();
          }
        }
      });
    }

    Bridge$1.callNative('AnimationModule', 'startAnimation', this.animationId);
  }
  /**
   * Use destroy() to destroy animation.
   */


  destory() {
    warn('Animation.destory() method will be deprecated soon, please use Animation.destroy() as soon as possible');
    this.destroy();
  }
  /**
   * Destroy the animation
   */


  destroy() {
    this.removeEventListener();
    Bridge$1.callNative('AnimationModule', 'destroyAnimation', this.animationId);
  }
  /**
   * Pause the running animation
   */


  pause() {
    Bridge$1.callNative('AnimationModule', 'pauseAnimation', this.animationId);
  }
  /**
   * Resume execution of paused animation
   */


  resume() {
    Bridge$1.callNative('AnimationModule', 'resumeAnimation', this.animationId);
  }
  /**
   * Update to new animation scheme
   *
   * @param {Object} newConfig - new animation schema
   */


  updateAnimation(newConfig) {
    if (typeof newConfig !== 'object') {
      throw new TypeError('Invalid arguments');
    }

    if (typeof newConfig.mode === 'string' && newConfig.mode !== this.mode) {
      throw new TypeError('Update animation mode not supported');
    }

    Object.keys(newConfig).forEach(prop => {
      const value = newConfig[prop];

      if (prop === 'startValue') {
        let startValue = 0;

        if (newConfig.startValue instanceof Animation) {
          startValue = {
            animationId: newConfig.startValue.animationId
          };
        } else {
          ({
            startValue
          } = newConfig);
        }

        this.startValue = startValue || 0;
      } else if (prop === 'repeatCount') {
        this.repeatCount = repeatCountDict(newConfig.repeatCount || 0);
      } else {
        Object.defineProperty(this, prop, {
          value
        });
      }
    });
    Bridge$1.callNative('AnimationModule', 'updateAnimation', this.animationId, Object.assign({
      delay: this.delay,
      startValue: this.startValue,
      toValue: this.toValue,
      duration: this.duration,
      direction: this.direction,
      timingFunction: this.timingFunction,
      repeatCount: this.repeatCount,
      inputRange: this.inputRange,
      outputRange: this.outputRange
    }, this.valueType ? {
      valueType: this.valueType
    } : {}));
  }
  /**
   * Call when animation started.
   * @param {Function} cb - callback when animation started.
   */


  onAnimationStart(cb) {
    this.onAnimationStartCallback = cb;
  }
  /**
   * Call when animation is ended.
   * @param {Function} cb - callback when animation started.
   */


  onAnimationEnd(cb) {
    this.onAnimationEndCallback = cb;
  }
  /**
   * Call when animation is canceled.
   * @param {Function} cb - callback when animation started.
   */


  onAnimationCancel(cb) {
    this.onAnimationCancelCallback = cb;
  }
  /**
   * Call when animation is repeated.
   * @param {Function} cb - callback when animation started.
   */


  onAnimationRepeat(cb) {
    this.onAnimationRepeatCallback = cb;
  }

}

const AnimationEventEmitter$1 = new HippyEventEmitter();
/**
 * Better performance of Animation series solution.
 *
 * It pushes the animation scheme to native at once.
 */

class AnimationSet {
  constructor(config) {
    this.animationList = [];
    config.children.forEach(item => {
      this.animationList.push({
        animationId: item.animation.animationId,
        follow: item.follow || false
      });
    });
    this.animationId = Bridge$1.callNativeWithCallbackId('AnimationModule', 'createAnimationSet', true, {
      repeatCount: repeatCountDict(config.repeatCount || 0),
      children: this.animationList,
      virtual: config.virtual
    }); // TODO: Deprecated compatible, will remove soon.

    this.onRNfqbAnimationStart = this.onAnimationStart.bind(this);
    this.onRNfqbAnimationEnd = this.onAnimationEnd.bind(this);
    this.onRNfqbAnimationCancel = this.onAnimationCancel.bind(this);
    this.onRNfqbAnimationRepeat = this.onAnimationRepeat.bind(this);
    this.onHippyAnimationStart = this.onAnimationStart.bind(this);
    this.onHippyAnimationEnd = this.onAnimationEnd.bind(this);
    this.onHippyAnimationCancel = this.onAnimationCancel.bind(this);
    this.onHippyAnimationRepeat = this.onAnimationRepeat.bind(this);
  }
  /**
   * Remove all of animation event listener
   */


  removeEventListener() {
    if (this.animationStartListener) {
      this.animationStartListener.remove();
    }

    if (this.animationEndListener) {
      this.animationEndListener.remove();
    }

    if (this.animationCancelListener) {
      this.animationCancelListener.remove();
    }

    if (this.animationRepeatListener) {
      this.animationRepeatListener.remove();
    }
  }
  /**
   * Start animation execution
   */


  start() {
    this.removeEventListener(); // Set as iOS default

    let animationEventName = 'onAnimation'; // If running in Android, change it.

    if (true) {
      animationEventName = 'onHippyAnimation';
    }

    if (typeof this.onAnimationStartCallback === 'function') {
      this.animationStartListener = AnimationEventEmitter$1.addListener(`${animationEventName}Start`, animationId => {
        if (animationId === this.animationId) {
          this.animationStartListener.remove();

          if (typeof this.onAnimationStartCallback === 'function') {
            this.onAnimationStartCallback();
          }
        }
      });
    }

    if (typeof this.onAnimationEndCallback === 'function') {
      this.animationEndListener = AnimationEventEmitter$1.addListener(`${animationEventName}End`, animationId => {
        if (animationId === this.animationId) {
          this.animationEndListener.remove();

          if (typeof this.onAnimationEndCallback === 'function') {
            this.onAnimationEndCallback();
          }
        }
      });
    }

    if (typeof this.onAnimationCancelCallback === 'function') {
      this.animationCancelListener = AnimationEventEmitter$1.addListener(`${animationEventName}Cancel`, animationId => {
        if (animationId === this.animationId) {
          this.animationCancelListener.remove();

          if (typeof this.onAnimationCancelCallback === 'function') {
            this.onAnimationCancelCallback();
          }
        }
      });
    }

    if (typeof this.onAnimationRepeatCallback === 'function') {
      this.animationRepeatListener = AnimationEventEmitter$1.addListener(`${animationEventName}Repeat`, animationId => {
        if (animationId === this.animationId) {
          if (typeof this.onAnimationRepeatCallback === 'function') {
            this.onAnimationRepeatCallback();
          }
        }
      });
    }

    Bridge$1.callNative('AnimationModule', 'startAnimation', this.animationId);
  }
  /**
   * Use destroy() to destroy animation.
   */


  destory() {
    warn('AnimationSet.destory() method will be deprecated soon, please use Animation.destroy() as soon as possible');
    this.destroy();
  }
  /**
   * Destroy the animation
   */


  destroy() {
    this.removeEventListener();
    Bridge$1.callNative('AnimationModule', 'destroyAnimation', this.animationId);
  }
  /**
   * Pause the running animation
   */


  pause() {
    Bridge$1.callNative('AnimationModule', 'pauseAnimation', this.animationId);
  }
  /**
   * Resume execution of paused animation
   */


  resume() {
    Bridge$1.callNative('AnimationModule', 'resumeAnimation', this.animationId);
  }
  /**
   * Call when animation started.
   * @param {Function} cb - callback when animation started.
   */


  onAnimationStart(cb) {
    this.onAnimationStartCallback = cb;
  }
  /**
   * Call when animation is ended.
   * @param {Function} cb - callback when animation started.
   */


  onAnimationEnd(cb) {
    this.onAnimationEndCallback = cb;
  }
  /**
   * Call when animation is canceled.
   * @param {Function} cb - callback when animation started.
   */


  onAnimationCancel(cb) {
    this.onAnimationCancelCallback = cb;
  }
  /**
   * Call when animation is repeated.
   * @param {Function} cb - callback when animation started.
   */


  onAnimationRepeat(cb) {
    this.onAnimationRepeatCallback = cb;
  }

}
/* eslint-disable no-underscore-dangle */


class ElementNode extends ViewNode {
  constructor(tagName) {
    super();
    this.id = '';
    this.style = {};
    this.attributes = {}; // Tag name

    this.tagName = tagName;
  }

  get nativeName() {
    return this.meta.component.name;
  }

  toString() {
    return `${this.tagName}:(${this.nativeName})`;
  }

  hasAttribute(key) {
    return !!this.attributes[key];
  }

  getAttribute(key) {
    return this.attributes[key];
  }
  /* istanbul ignore next */


  setAttribute(key, value) {
    try {
      // detect expandable attrs for boolean values
      // See https://vuejs.org/v2/guide/components-props.html#Passing-a-Boolean
      if (typeof this.attributes[key] === 'boolean' && value === '') {
        value = true;
      }

      if (key === undefined) {
        updateChild(this);
        return;
      }

      switch (key) {
        case 'id':
          if (value === this.id) {
            return;
          }

          this.id = value; // update current node and child nodes

          updateWithChildren(this);
          return;
        // Convert placeholder to char for interface.

        case 'value':
        case 'defaultValue':
        case 'placeholder':
          this.attributes[key] = unicodeToChar(value);
          break;
        // Text must be a text not a number.

        case 'text':
          this.attributes[key] = value;
          break;
        // FIXME: UpdateNode numberOfRows will makes Image flicker on Android.
        //        So make it working on iOS only.

        case 'numberOfRows':
          this.attributes[key] = value;

          if (Device$1.platform.OS !== 'ios') {
            return;
          }

          break;
        // There's no onPress event handler in Native
        // Map to onClick event handler directly

        case 'onPress':
          this.attributes.onClick = true;
          break;

        case 'style':
          {
            if (typeof value !== 'object' || value === undefined || value === null) {
              return;
            } // Clean old styles


            this.style = {};
            let styleArray = value; // Convert style to array if it's a array like object
            // Forward compatibility workaround.

            if (!Array.isArray(styleArray) && Object.hasOwnProperty.call(styleArray, 0)) {
              const tempStyle = [];
              const tempObjStyle = {};
              Object.keys(styleArray).forEach(styleKey => {
                // Workaround for the array and object mixed style.
                if (isNumber(styleKey)) {
                  tempStyle.push(styleArray[styleKey]);
                } else {
                  tempObjStyle[styleKey] = styleArray[styleKey];
                }
              });
              styleArray = [...tempStyle, tempObjStyle];
            } // Convert style to array if style is a standalone object


            if (!Array.isArray(styleArray)) {
              styleArray = [styleArray];
            } // Merge the styles if style is array


            let mergedStyles = {};
            styleArray.forEach(style => {
              if (Array.isArray(style)) {
                style.forEach(subStyle => {
                  mergedStyles = _objectSpread(_objectSpread({}, mergedStyles), subStyle);
                });
              } else if (typeof style === 'object' && style) {
                // TODO: Merge transform
                mergedStyles = _objectSpread(_objectSpread({}, mergedStyles), style);
              }
            }); // Apply the styles

            Object.keys(mergedStyles).forEach(styleKey => {
              const styleValue = mergedStyles[styleKey];

              if (styleKey === 'transform') {
                const transforms = {};

                if (!Array.isArray(styleValue)) {
                  throw new TypeError('transform only support array args');
                } // Merge the transform styles


                styleValue.forEach(transformSet => {
                  Object.keys(transformSet).forEach(transform => {
                    const transformValue = transformSet[transform];

                    if (transformValue instanceof Animation || transformValue instanceof AnimationSet) {
                      transforms[transform] = {
                        animationId: transformValue.animationId
                      };
                    } else if (transformValue === null) {
                      if (transforms[transform]) {
                        delete transforms[transform];
                      }
                    } else if (transformValue !== undefined) {
                      transforms[transform] = transformValue;
                    }
                  });
                }); // Save the transform styles.

                const transformsKeys = Object.keys(transforms);

                if (transformsKeys.length) {
                  if (!Array.isArray(this.style.transform)) {
                    this.style.transform = [];
                  }

                  transformsKeys.forEach(transform => this.style.transform.push({
                    [transform]: transforms[transform]
                  }));
                }
              } else if (styleValue === null && this.style[styleKey] !== undefined) {
                delete this.style[styleKey]; // Convert to animationId if value is instanceOf Animation/AnimationSet
              } else if (styleValue instanceof Animation || styleValue instanceof AnimationSet) {
                this.style[styleKey] = {
                  animationId: styleValue.animationId
                }; // Translate color
              } else if (styleKey.toLowerCase().indexOf('colors') > -1) {
                this.style[styleKey] = colorArrayParse(styleValue);
              } else if (styleKey.toLowerCase().indexOf('color') > -1) {
                this.style[styleKey] = colorParse(styleValue);
              } else {
                this.style[styleKey] = styleValue;
              }
            });
            break;
          }

        default:
          if (typeof value === 'function') {
            this.attributes[key] = true;
          } else {
            this.attributes[key] = value;
          }

      } // Set useAnimation if animation exist in style


      let useAnimation = false;
      Object.keys(this.style).some(declare => {
        const style = this.style[declare];

        if (style && Array.isArray(style) && declare === 'transform') {
          for (let i = 0; i < style.length; i += 1) {
            const transform = style[i];
            /* eslint-disable-next-line no-restricted-syntax, guard-for-in */

            for (const transformKey in transform) {
              const transformValue = transform[transformKey];

              if (typeof transformValue === 'object' && transformValue !== null && Number.isInteger(transformValue.animationId)) {
                useAnimation = true;
                return transformValue;
              }
            }
          }
        }

        if (typeof style === 'object' && style !== null && Number.isInteger(style.animationId)) {
          useAnimation = true;
          return style;
        }

        return false;
      });

      if (useAnimation) {
        this.attributes.useAnimation = true;
      } else if (typeof this.attributes.useAnimation === 'boolean') {
        delete this.attributes.useAnimation;
      }

      updateChild(this);
    } catch (e) {// ignore
    }
  }

  removeAttribute(key) {
    delete this.attributes[key];
  }
  /* istanbul ignore next */


  setStyle(property, value) {
    if (value === null) {
      delete this.style[property];
      return;
    }

    let v = value;

    if (typeof v === 'string') {
      v = value.trim();

      if (property.toLowerCase().indexOf('colors') > -1) {
        v = colorArrayParse(v);
      } else if (property.toLowerCase().indexOf('color') > -1) {
        v = colorParse(v);
      } else {
        v = tryConvertNumber(v);
      }
    }

    if (v === undefined || v === null || this.style[property] === v) {
      return;
    }

    this.style[property] = v;
    updateChild(this);
  }

  setText(text) {
    if (typeof text !== 'string') {
      try {
        text = text.toString();
      } catch (err) {
        throw new Error('Only string type is acceptable for setText');
      }
    }

    text = text.trim();

    if (!text && !this.getAttribute('text')) {
      return null;
    }

    text = unicodeToChar(text);
    text = text.replace(/&nbsp;/g, ' ').replace(/\xc2/g, ' '); // FIXME: \xc2 is a template compiler error.
    // Hacking for textarea, use value props to instance text props

    if (this.tagName === 'textarea') {
      return this.setAttribute('value', text);
    }

    return this.setAttribute('text', text);
  }

}
/* eslint-disable class-methods-use-this */


class DocumentNode extends ViewNode {
  constructor() {
    super();
    this.documentElement = new ElementNode('document');
  }

  createElement(tagName) {
    return new ElementNode(tagName);
  }

  createElementNS(namespace, tagName) {
    return new ElementNode(`${namespace}:${tagName}`);
  }

}

DocumentNode.createElement = DocumentNode.prototype.createElement;
DocumentNode.createElementNS = DocumentNode.prototype.createElementNS; // do not edit .js files directly - edit src/index.jst

var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  } // true if both NaN, false otherwise


  return a !== a && b !== b;
};

function appendChild(parent, child) {
  parent.appendChild(child);
}

function appendChildToContainer(container, child) {
  container.appendChild(child);
}

function appendInitialChild(parent, child) {
  parent.appendChild(child);
}

function commitMount() {}

function commitTextUpdate() {}

function commitUpdate(instance, updatePayload) {
  Object.keys(updatePayload).forEach(attr => instance.setAttribute(attr, updatePayload[attr]));
}

function createContainerChildSet() {}

function createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress) {
  const element = rootContainerInstance.createElement(type);
  Object.keys(newProps).forEach(attr => {
    switch (attr) {
      case 'children':
        // Ignore children attribute
        break;

      case 'nativeName':
        element.meta.component.name = newProps.nativeName;
        break;

      default:
        {
          element.setAttribute(attr, newProps[attr]);
        }
    }
  });

  if ([5, 7].indexOf(workInProgress.tag) < 0) {
    element.meta.skipAddToDom = true;
  }

  return element;
}

function createTextInstance(newText, rootContainerInstance) {
  const element = rootContainerInstance.createElement('p');
  element.setAttribute('text', unicodeToChar(newText));
  element.meta = {
    component: {
      name: 'Text',
      skipAddToDom: true
    }
  };
  return element;
}

function finalizeInitialChildren() {
  return true;
}

function finalizeContainerChildren() {}

function getPublicInstance(instance) {
  return instance;
}

function insertBefore(parent, child, beforeChild) {
  if (parent.childNodes.indexOf(child) > 0) {
    // move it if the node has existed
    parent.moveChild(child, beforeChild);
  } else {
    parent.insertBefore(child, beforeChild);
  }
}

function prepareForCommit() {}

function prepareUpdate(instance, type, oldProps, newProps) {
  const updatePayload = {};
  Object.keys(newProps).forEach(key => {
    const oldPropValue = oldProps[key];
    const newPropValue = newProps[key];

    switch (key) {
      case 'children':
        {
          if (oldPropValue !== newPropValue && (typeof newPropValue === 'number' || typeof newPropValue === 'string')) {
            updatePayload[key] = newPropValue;
          }

          break;
        }

      default:
        {
          // FIXME: Cancel a event listener
          if (typeof oldPropValue === 'function' && typeof newPropValue === 'function') ;else if (!fastDeepEqual(oldPropValue, newPropValue)) {
            updatePayload[key] = newPropValue;
          }
        }
    }
  });

  if (!Object.keys(updatePayload).length) {
    return null;
  }

  return updatePayload;
}

function replaceContainerChildren() {}

function removeChild$1(parent, child) {
  parent.removeChild(child);
}

function removeChildFromContainer(parent, child) {
  parent.removeChild(child);
}

function resetAfterCommit() {}

function resetTextContent() {}

function getRootHostContext() {
  return {};
}

function getChildHostContext() {
  return {};
}

function shouldDeprioritizeSubtree() {
  return true;
}

function shouldSetTextContent(type, nextProps) {
  if (nextProps && nextProps.nativeName === 'Text' || ['p', 'span'].indexOf(type) !== -1) {
    const {
      children
    } = nextProps;
    return typeof children === 'string' || typeof children === 'number';
  }

  return false;
}

var hostConfigs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  appendChild: appendChild,
  appendChildToContainer: appendChildToContainer,
  appendInitialChild: appendInitialChild,
  commitMount: commitMount,
  commitTextUpdate: commitTextUpdate,
  commitUpdate: commitUpdate,
  createContainerChildSet: createContainerChildSet,
  createInstance: createInstance,
  createTextInstance: createTextInstance,
  finalizeContainerChildren: finalizeContainerChildren,
  finalizeInitialChildren: finalizeInitialChildren,
  getPublicInstance: getPublicInstance,
  insertBefore: insertBefore,
  prepareForCommit: prepareForCommit,
  prepareUpdate: prepareUpdate,
  replaceContainerChildren: replaceContainerChildren,
  removeChild: removeChild$1,
  removeChildFromContainer: removeChildFromContainer,
  resetAfterCommit: resetAfterCommit,
  resetTextContent: resetTextContent,
  getRootHostContext: getRootHostContext,
  getChildHostContext: getChildHostContext,
  shouldDeprioritizeSubtree: shouldDeprioritizeSubtree,
  shouldSetTextContent: shouldSetTextContent
});
const hippyReconciler = react_reconciler__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread(_objectSpread({}, hostConfigs), {}, {
  clearTimeout,
  setTimeout,
  isPrimaryRenderer: true,
  noTimeout: -1,
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: false,
  now: Date.now,
  scheduleDeferredCallback: () => {},
  cancelDeferredCallback: () => {}
}));
const {
  createContainer,
  updateContainer,
  getPublicRootInstance
} = hippyReconciler;
const componentName$2 = ['%c[Hippy-React "2.0.3"]%c', 'color: #61dafb', 'color: auto'];

class HippyReact {
  /**
   * Create new Hippy instance
   *
   * @param {Object} config - Hippy config.
   * @param {string} config.appName - The name of Hippy app.
   * @param {Component} config.entryPage - The Entry page of Hippy app.
   * @param {function} config.callback - The callback after rendering.
   */
  constructor(config) {
    if (!config.appName || !config.entryPage) {
      throw new TypeError('Invalid arguments');
    }

    this.config = config;
    this.regist = this.start; // Forward compatible alias

    this.render = this.render.bind(this); // Start Render

    const rootDocument = new DocumentNode();
    this.rootContainer = createContainer(rootDocument, false, false);
  } // Native methods


  static get Native() {
    warn('HippyReact.Native interface is not stable yet. DO NOT USE IT');
    return Native;
  }
  /**
   * Start hippy app execution.
   */


  start() {
    HippyRegister$1.regist(this.config.appName, this.render);
  }
  /**
   * Native rendering callback
   * @param {Object} superProps - The props passed by native start the app.
   */


  render(superProps) {
    const {
      appName,
      entryPage,
      silent = false,
      callback = () => {}
    } = this.config;
    const {
      __instanceId__: rootViewId
    } = superProps;
    trace(...componentName$2, 'Start', appName, 'with rootViewId', rootViewId, superProps); // Update nodeId for contaienr

    this.rootContainer.containerInfo.nodeId = rootViewId;

    if (silent) {
      setSilent(silent);
    } // Save the root container


    setRootContainer(rootViewId, this.rootContainer); // Render to screen.

    const rootElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(entryPage, superProps);
    updateContainer(rootElement, this.rootContainer, null, callback);
    return getPublicRootInstance(this.rootContainer);
  }

} // version


HippyReact.version = "2.0.3";
const AppRegistry = {
  registerComponent(appName, entryPage) {
    const hippy = new HippyReact({
      appName,
      entryPage
    });
    hippy.start();
  }

};
/* eslint-disable react/prefer-stateless-function */

/**
 * The most fundamental component for building a UI, `View` is a container that supports layout
 * with flexbox, style, some touch handling, and accessibility controls. `View` maps directly to
 * the native view equivalent on whatever platform React Native is running on, whether that is
 * a `UIView`, `<div>`, `android.view`, etc.
 *
 * View is designed to be nested inside other views and can have 0 to many children of any type.
 * @noInheritDoc
 */

class View extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  /**
   * @ignore
   */
  render() {
    const _this$props = this.props,
          {
      collapsable,
      style = {}
    } = _this$props,
          nativeProps = _objectWithoutProperties(_this$props, ["collapsable", "style"]);

    const nativeStyle = style;

    if (typeof collapsable === 'boolean') {
      nativeStyle.collapsable = collapsable;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
      nativeName: "View",
      style: nativeStyle
    }, nativeProps));
  }

}
/* eslint-disable no-param-reassign */

/**
 * A React component for displaying text.
 *
 * `Text` doesn't support nesting.
 * @noInheritDoc
 */


function Text(_ref) {
  let {
    style
  } = _ref,
      nativeProps = _objectWithoutProperties(_ref, ["style"]);

  const nativeStyle = style; // Fill default color
  // Workaround for Android meet empty front color not render issue.

  if (style) {
    if (Array.isArray(style)) {
      if (style.filter(x => typeof x === 'object' && x).findIndex(s => s.color || s.colors) === -1) {
        nativeStyle[0].color = '#000';
      }
    } else if (typeof style === 'object') {
      if (style.color === undefined && style.colors === undefined) {
        nativeStyle.color = '#000';
      }
    }
  }

  nativeProps.text = ''; // Important: Text must recevie text props.

  if (typeof nativeProps.children === 'string') {
    nativeProps.text = unicodeToChar(nativeProps.children);
  } else if (typeof nativeProps.children === 'number') {
    nativeProps.text = unicodeToChar(nativeProps.children.toString());
  } else if (Array.isArray(nativeProps.children)) {
    const text = nativeProps.children.filter(t => typeof t === 'string' || typeof t === 'number').join(''); // FIXME: if Text is nested, all child components of this component need to be wrapped by Text

    if (text) {
      nativeProps.text = unicodeToChar(text);
      nativeProps.children = nativeProps.text;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", Object.assign({
    nativeName: "Text",
    style: nativeStyle
  }, nativeProps));
}

function handleImgUrl(url) {
  if (url && !/^(http|https):\/\//.test(url) && url.indexOf('assets') > -1) {
    if (false) {}

    const addStr2 = 'hpfile://'; // do not change this, otherwise js-min went wrong

    return `${addStr2}./${url}`;
  }

  return url;
}
/**
 * A React component for displaying different types of images, including network images,
 * static resources, temporary local images, and images from local disk, such as the camera roll.
 * @noInheritDoc
 */


class Image extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static get resizeMode() {
    return {
      contain: 'contain',
      cover: 'cover',
      stretch: 'stretch',
      center: 'center',
      repeat: 'repeat'
    };
  }

  static getSize(url, success, failure) {
    if (typeof url !== 'string') {
      throw new TypeError('Image.getSize first argument must be a string url');
    }

    const size = getSize(url);

    if (typeof success === 'function') {
      size.then(result => success(result.width, result.height));
    }

    if (typeof failure === 'function') {
      size.catch(failure);
    } else {
      size.catch(err => warn(`Failed to get size for image: ${url}`, err));
    }

    return size;
  }
  /**
   * @ignore
   */


  render() {
    const _this$props2 = this.props,
          {
      children,
      style,
      imageStyle,
      imageRef,
      source,
      sources,
      src,
      srcs,
      tintColor,
      tintColors
    } = _this$props2,
          nativeProps = _objectWithoutProperties(_this$props2, ["children", "style", "imageStyle", "imageRef", "source", "sources", "src", "srcs", "tintColor", "tintColors"]);
    /**
     * Image source prop
     */
    // Define the image source url array.


    let imageUrls = [];

    if (typeof src === 'string') {
      imageUrls.push(src);
    }

    if (Array.isArray(srcs)) {
      imageUrls = [...imageUrls, ...srcs];
    }

    if (source) {
      if (typeof source === 'string') {
        imageUrls.push(source);
      } else if (typeof source === 'object' && source !== null) {
        const {
          uri
        } = source;

        if (uri) {
          imageUrls.push(uri);
        }
      }
    }

    if (sources) {
      if (Array.isArray(sources)) {
        sources.forEach(imageSrc => {
          if (typeof imageSrc === 'string') {
            imageUrls.push(imageSrc);
          } else if (typeof imageSrc === 'object' && imageSrc !== null && imageSrc.uri) {
            imageUrls.push(imageSrc.uri);
          }
        });
      }
    }

    if (imageUrls.length) {
      imageUrls = imageUrls.map(url => handleImgUrl(url));
    } // Set sources props by platform specification


    if (Device$1.platform.OS === 'ios') {
      if (imageUrls.length) {
        nativeProps.source = imageUrls.map(uri => ({
          uri
        }));
      }
    } else if (Device$1.platform.OS === 'android') {
      if (imageUrls.length === 1) {
        [nativeProps.src] = imageUrls;
      } else if (imageUrls.length > 1) {
        nativeProps.srcs = imageUrls;
      }
    }
    /**
     * defaultSource prop
     */


    if (typeof nativeProps.defaultSource === 'string') {
      if (nativeProps.defaultSource.indexOf('data:image/') !== 0) {
        warn('[Image] defaultSource prop must be a local base64 image');
      }

      nativeProps.defaultSource = handleImgUrl(nativeProps.defaultSource);
    }
    /**
     * tintColor(s)
     */


    const nativeStyle = _objectSpread({}, style);

    if (tintColor) {
      nativeStyle.tintColor = colorParse(tintColor);
    }

    if (Array.isArray(tintColors)) {
      nativeStyle.tintColors = colorArrayParse(tintColors);
    }

    nativeProps.style = nativeStyle;

    if (children) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(View, {
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", Object.assign({}, nativeProps, {
        nativeName: "Image",
        alt: "",
        ref: imageRef,
        style: [{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: style.width,
          height: style.height
        }, imageStyle]
      })), children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", Object.assign({}, nativeProps, {
      nativeName: "Image",
      alt: "",
      ref: imageRef
    }));
  }

}

Image.prefetch = prefetch;

class Animated {
  constructor() {
    this.Value = Animated.Value;
  }

  static Value(val) {
    return val;
  }

  static timing(value, config) {
    return new Animation({
      mode: 'timing',
      delay: 0,
      startValue: value,
      toValue: config.toValue,
      duration: config.duration,
      timingFunction: config.easing || 'linear'
    });
  }

}

Animated.View = View;
Animated.Text = Text;
Animated.Image = Image;
const Easing = {
  step0(n) {
    return n > 0 ? 1 : 0;
  },

  step1(n) {
    return n >= 1 ? 1 : 0;
  },

  linear() {
    return 'linear';
  },

  ease() {
    return 'ease';
  },

  quad(t) {
    return t ** 2;
  },

  cubic(t) {
    return t ** 3;
  },

  poly(n) {
    return t => t ** n;
  },

  sin(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  },

  circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  },

  exp(t) {
    return 2 ** (10 * (t - 1));
  },

  elastic() {
    return 'elastic';
  },

  back(s = 1.70158) {
    return t => t * t * ((s + 1) * t - s);
  },

  bounce(t_) {
    let t = t_;

    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }

    if (t < 2 / 2.75) {
      t -= 1.5 / 2.75;
      return 7.5625 * t * t + 0.75;
    }

    if (t < 2.5 / 2.75) {
      t -= 2.25 / 2.75;
      return 7.5625 * t * t + 0.9375;
    }

    t -= 2.625 / 2.75;
    return 7.5625 * t * t + 0.984375;
  },

  bezier() {
    return 'bezier';
  },

  in() {
    return 'ease-in';
  },

  out() {
    return 'ease-out';
  },

  inOut() {
    return 'ease-in-out';
  }

};

function ListViewItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", Object.assign({
    nativeName: "ListViewItem"
  }, props));
}
/**
 * Recyclable list for better performance, and lower memory usage.
 * @noInheritDoc
 */


class ListView extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  /**
   * @ignore
   */
  constructor(props) {
    super(props);
    this.instance = null;
    this.handleInitialListReady = this.handleInitialListReady.bind(this);
    this.state = {
      initialListReady: false
    };
  }
  /**
   * @ignore
   */


  componentDidMount() {
    const {
      getRowKey
    } = this.props;

    if (!getRowKey) {
      warn('ListView needs getRowKey to specific the key of item');
    }
  }
  /**
   * Scrolls to a given index of itme, either immediately, with a smooth animation.
   *
   * @param {number} xIndex - Scroll to horizon index X.
   * @param {number} yIndex - Scroll To veritical index Y.
   * @param {boolean} animated - With smooth animation.By default is true.
   */


  scrollToIndex(xIndex, yIndex, animated) {
    if (typeof xIndex !== 'number' || typeof yIndex !== 'number' || typeof animated !== 'boolean') {
      return;
    }

    callUIFunction(this.instance, 'scrollToIndex', [xIndex, yIndex, animated]);
  }
  /**
   * Scrolls to a given x, y offset, either immediately, with a smooth animation.
   *
   * @param {number} xOffset - Scroll to horizon offset X.
   * @param {number} yOffset - Scroll To veritical offset Y.
   * @param {boolean} animated - With smooth animation.By default is true.
   */


  scrollToContentOffset(xOffset, yOffset, animated) {
    if (typeof xOffset !== 'number' || typeof yOffset !== 'number' || typeof animated !== 'boolean') {
      return;
    }

    callUIFunction(this.instance, 'scrollToContentOffset', [xOffset, yOffset, animated]);
  }

  handleInitialListReady() {
    this.setState({
      initialListReady: true
    });
  }
  /**
   * @ignore
   */


  render() {
    let {
      numberOfRows
    } = this.props;

    const _this$props3 = this.props,
          {
      style,
      renderRow,
      wormholeEnabled,
      getWormholeData,
      getRowData,
      getRowType,
      getRowStyle,
      getRowKey,
      dataSource,
      initialListSize,
      rowShouldSticky,
      onRowLayout
    } = _this$props3,
          nativeProps = _objectWithoutProperties(_this$props3, ["style", "renderRow", "wormholeEnabled", "getWormholeData", "getRowData", "getRowType", "getRowStyle", "getRowKey", "dataSource", "initialListSize", "rowShouldSticky", "onRowLayout"]);

    if (typeof renderRow !== 'function') {
      throw new Error('renderRow props is necessary for ListView');
    }

    const {
      initialListReady
    } = this.state;
    const itemList = [];

    if (!numberOfRows && dataSource) {
      numberOfRows = dataSource.length;
    }

    if (!initialListReady) {
      numberOfRows = Math.min(numberOfRows, initialListSize || 10);
    }

    for (let index = 0; index < numberOfRows; index += 1) {
      const itemProps = {};
      let rowChildren;

      if (dataSource) {
        rowChildren = renderRow(dataSource[index], null, index);
      } else {
        rowChildren = renderRow(index);
      }

      if (typeof getRowKey === 'function') {
        itemProps.key = getRowKey(index);
      }

      if (typeof getRowStyle === 'function') {
        itemProps.style = getRowStyle(index);
      }

      if (typeof onRowLayout === 'function') {
        itemProps.onLayout = e => {
          onRowLayout(e, index);
        };
      }

      if (typeof getRowType === 'function') {
        let type = getRowType(index);

        if (type) {
          if (typeof type !== 'string') {
            type = type.toString();
          }

          itemProps.type = type;

          if (Device$1.platform.OS === 'android') {
            itemProps.itemViewType = type;
          }
        }
      }

      if (typeof rowShouldSticky === 'function') {
        itemProps.sticky = rowShouldSticky(index);
      }

      if (typeof wormholeEnabled === 'function') {
        let enabled = wormholeEnabled(index);

        if (enabled) {
          if (typeof getWormholeData === 'function') {
            itemProps.wormholeData = {
              data: getWormholeData(index),
              businessId: '1000' + index,
              type: 1,
              index
            };
          }
        }
      }

      if (rowChildren) {
        itemList.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListViewItem, Object.assign({}, itemProps), rowChildren));
      }
    }

    nativeProps.numberOfRows = itemList.length;
    nativeProps.initialListSize = initialListSize;
    nativeProps.style = _objectSpread({
      overflow: 'scroll'
    }, style);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", Object.assign({
      ref: ref => {
        this.instance = ref;
      },
      nativeName: "ListView",
      initialListReady: this.handleInitialListReady
    }, nativeProps), itemList);
  }

}
/**
* @ignore
*/


ListView.defaultProps = {
  numberOfRows: 0
};
/**
 * Simply to implement the drag down to refresh feature.
 * @noInheritDoc
 */

class RefreshWrapper extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.instance = null; // TODO: Upward compatible with the the old typo mistake.

    this.refreshComplected = this.refreshCompleted.bind(this);
  }

  getRefresh() {
    const {
      getRefresh
    } = this.props;

    if (typeof getRefresh === 'function') {
      return getRefresh() || null;
    }

    return null;
  }
  /**
   * Call native for start refresh.
   */


  startRefresh() {
    callUIFunction(this.instance, 'startRefresh', null);
  }
  /**
   * Call native that data is refreshed
   */


  refreshCompleted() {
    callUIFunction(this.instance, 'refreshComplected', null);
  }
  /**
   * @ignore
   */


  render() {
    const _this$props4 = this.props,
          {
      children
    } = _this$props4,
          nativeProps = _objectWithoutProperties(_this$props4, ["children"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
      nativeName: "RefreshWrapper",
      ref: ref => {
        this.instance = ref;
      }
    }, nativeProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      nativeName: "RefreshWrapperItemView",
      style: [{
        left: 0,
        right: 0,
        position: 'absolute'
      }]
    }, this.getRefresh()), children);
  }

}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  /**
   * Push into a new page/component.
   *
   * @param {Object} route - New router
   * @param {string} routeName - Router name
   * @param {React.Comopnent} component - Initial react component
   * @param {Object} initProps - Initial props for inital react component
   * @param {boolean} animated - Use animation effect to switch to new page
   */


  push(route) {
    this.top = {
      data: route,
      next: this.top
    };
    this.size += 1;
  }
  /**
   * Returns latest push router.
   */


  peek() {
    return this.top === null ? null : this.top.data;
  }
  /**
   * Return back to previous page.
   */


  pop() {
    if (this.top === null) {
      return null;
    }

    const out = this.top;
    this.top = this.top.next;

    if (this.size > 0) {
      this.size -= 1;
    }

    return out.data;
  }
  /**
   * Clear history stack
   */


  clear() {
    this.top = null;
    this.size = 0;
  }
  /**
   * Returns all of routes
   */


  displayAll() {
    const arr = [];

    if (this.top === null) {
      return arr;
    }

    let current = this.top;

    for (let i = 0, len = this.size; i < len; i += 1) {
      arr[i] = current.data;
      current = current.next;
    }

    return arr;
  }

}
/**
 * Simply router component for switch in multiple Hippy page.
 * @noInheritDoc
 */


class Navigator extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  /**
   * @ignore
   */
  constructor(props) {
    super(props);
    this.stack = new Stack();
    this.instance = null;
    this.routeList = {};
    const {
      initialRoute
    } = props;

    if (initialRoute && initialRoute.component) {
      const hippy = new HippyReact({
        appName: initialRoute.routeName,
        entryPage: initialRoute.component
      });
      hippy.regist();
      this.routeList[initialRoute.routeName] = true;
    }

    this.handleAndroidBack = this.handleAndroidBack.bind(this);
  }
  /**
   * @ignore
   */


  componentWillMount() {
    if (Device$1.platform.OS === 'android') {
      this.backListener = BackAndroid.addListener(this.handleAndroidBack);
    }
  }
  /**
   * @ignore
   */


  componentDidMount() {
    const {
      initialRoute
    } = this.props;
    this.stack.push({
      routeName: initialRoute.routeName || '',
      component: initialRoute.component || '',
      initProps: initialRoute.initProps || ''
    });
  }
  /**
   * @ignore
   */


  componentWillUnmount() {
    if (this.backListener) {
      this.backListener.remove();
    }
  }

  getCurrentPage() {
    return this.stack.peek();
  }

  handleAndroidBack() {
    if (this.stack.size > 1) {
      this.pop({
        animated: true
      });
    }
  }
  /**
   * Push into a new page/component.
   *
   * @param {Object} route - New router
   * @param {string} routeName - Router name
   * @param {React.Comopnent} component - Initial react component
   * @param {Object} initProps - Initial props for inital react component
   * @param {boolean} animated - Use animation effect to switch to new page
   */


  push(route) {
    if (route && route.component) {
      if (!this.routeList[route.routeName]) {
        const hippy = new HippyReact({
          appName: route.routeName,
          entryPage: route.component
        });
        hippy.regist();
        this.routeList[route.routeName] = true;
      }

      const newRoute = route;
      delete newRoute.component;
    }

    const routes = [route];
    this.stack.push(route);
    callUIFunction(this.instance, 'push', routes);
  }
  /**
   * Return back to previous page.
   */


  pop(option) {
    if (this.stack.size > 1) {
      const options = [option];
      this.stack.pop();
      callUIFunction(this.instance, 'pop', options);
    }
  }
  /**
   * Clear history stack
   */


  clear() {
    this.stack.clear();
  }
  /**
   * @ignore
   */


  render() {
    const _this$props5 = this.props,
          {
      initialRoute: {
        /* eslint-disable @typescript-eslint/no-unused-vars */
        component
      }
    } = _this$props5,
          otherInitialRoute = _objectWithoutProperties(_this$props5.initialRoute, ["component"]),
          nativeProps = _objectWithoutProperties(_this$props5, ["initialRoute"]);

    nativeProps.initialRoute = otherInitialRoute;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
      nativeName: "Navigator",
      ref: ref => {
        this.instance = ref;
      }
    }, nativeProps));
  }

}
/* eslint-disable no-underscore-dangle */


function ViewPagerItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
    nativeName: "ViewPagerItem"
  }, props, {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      collapsable: false
    }
  }));
}
/**
 * Container that allows to flip left and right between child views.
 * Each child view of the ViewPage will be treated as a separate page
 * and will be stretched to fill the ViewPage.
 * @noInheritDoc
 */


class ViewPager extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  /**
   * @ignore
   */
  constructor(props) {
    super(props);
    this.instance = null;
    this.setPage = this.setPage.bind(this);
    this.setPageWithoutAnimation = this.setPageWithoutAnimation.bind(this);
    this.onPageScrollStateChanged = this.onPageScrollStateChanged.bind(this);
  }

  onPageScrollStateChanged(params) {
    const {
      onPageScrollStateChanged
    } = this.props;

    if (onPageScrollStateChanged) {
      onPageScrollStateChanged(params.pageScrollState);
    }
  }

  setPage(selectedPage) {
    if (typeof selectedPage !== 'number') {
      return;
    }

    callUIFunction(this.instance, 'setPage', [selectedPage]);
  }

  setPageWithoutAnimation(selectedPage) {
    if (typeof selectedPage !== 'number') {
      return;
    }

    callUIFunction(this.instance, 'setPageWithoutAnimation', [selectedPage]);
  }
  /**
   * @ignore
   */


  render() {
    const _this$props6 = this.props,
          {
      children,
      onPageScrollStateChanged
    } = _this$props6,
          nativeProps = _objectWithoutProperties(_this$props6, ["children", "onPageScrollStateChanged"]);

    let mappedChildren = [];

    if (Array.isArray(children)) {
      mappedChildren = children.map(child => {
        const viewPageItemProps = {};

        if (typeof child.key === 'string') {
          viewPageItemProps.key = `viewPager_${child.key}`;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewPagerItem, Object.assign({}, viewPageItemProps), child);
      });
    } else {
      mappedChildren.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewPagerItem, null, children));
    }

    if (typeof onPageScrollStateChanged === 'function') {
      nativeProps.onPageScrollStateChanged = this.onPageScrollStateChanged;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
      nativeName: "ViewPager",
      ref: ref => {
        this.instance = ref;
      }
    }, nativeProps), mappedChildren);
  }

}
/* eslint-disable no-underscore-dangle */

/**
 * A foundational component for inputting text into the app via a keyboard. Props provide
 * configurability for several features, such as auto-correction, auto-capitalization,
 * placeholder text, and different keyboard types, such as a numeric keypad.
 * @noInheritDoc
 */


class TextInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  /**
   * @ignore
   */
  constructor(props) {
    super(props);
    this.instance = null;
    this._lastNativeText = '';
    this._onChangeText = this._onChangeText.bind(this);
    this._onKeyboardWillShow = this._onKeyboardWillShow.bind(this);
  }
  /**
   * @ignore
   */


  componentDidMount() {
    const {
      value: _lastNativeText,
      autoFocus
    } = this.props;
    this._lastNativeText = _lastNativeText;

    if (autoFocus) {
      this.focus();
    }
  }
  /**
   * @ignore
   */


  componentWillUnmount() {
    this.blur();
  }
  /**
   * Get the content of `TextInput`.
   *
   * @returns {Promise<string>}
   */


  getValue() {
    return new Promise(resolve => {
      callUIFunction(this.instance, 'getValue', res => resolve(res.text));
    });
  }
  /**
   * Set the content of `TextInput`.
   *
   * @param {string} value - New content of TextInput
   * @returns {string}
   */


  setValue(value) {
    callUIFunction(this.instance, 'setValue', [value]);
    return value;
  }
  /**
   * Make the `TextInput` focused.
   */


  focus() {
    callUIFunction(this.instance, 'focusTextInput', []);
  }
  /**
   * Make the `TextInput` blured.
   */


  blur() {
    callUIFunction(this.instance, 'blurTextInput', []);
  }
  /**
   * Show input method selection dialog.
   */


  showInputMethod() {
    callUIFunction(this.instance, 'showInputMethod', []);
  }
  /**
   * Hide the input method selection dialog.
   */


  hideInputMethod() {
    callUIFunction(this.instance, 'hideInputMethod', []);
  }
  /**
   * Clear the content of `TextInput`
   */


  clear() {
    callUIFunction(this.instance, 'clear', []);
  }

  _onChangeText(e) {
    const {
      onChangeText
    } = this.props;

    if (typeof onChangeText === 'function') {
      onChangeText(e.text);
    }

    if (!this.instance) {
      // calling `this.props.onChange` or `this.props.onChangeText`
      // may clean up the input itself. Exits here.
      return;
    }

    this._lastNativeText = e.text;
  }

  _onKeyboardWillShow(originEvt) {
    const {
      onKeyboardWillShow
    } = this.props;
    const evt = originEvt;

    if (Device$1.platform.OS === 'android') {
      evt.keyboardHeight /= Device$1.screen.scale;
    }

    if (typeof onKeyboardWillShow === 'function') {
      onKeyboardWillShow(evt);
    }
  }
  /**
   * @ignore
   */


  render() {
    const nativeProps = _objectSpread({}, this.props);

    ['underlineColorAndroid', 'placeholderTextColor', 'placeholderTextColors'].forEach(prop => {
      if (typeof this.props[prop] === 'string') {
        if (Array.isArray(nativeProps.style)) {
          nativeProps.style.push({
            [prop]: this.props[prop]
          });
        } else if (typeof nativeProps.style === 'object') {
          nativeProps.style[prop] = this.props[prop];
        } else {
          nativeProps.style = {
            [prop]: this.props[prop]
          };
        }

        delete nativeProps[prop];
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
      nativeName: "TextInput"
    }, nativeProps, {
      ref: ref => {
        this.instance = ref;
      },
      onChangeText: this._onChangeText,
      onKeyboardWillShow: this._onKeyboardWillShow
    }));
  }

}

const ratio = Device$1.pixelRatio;
/* eslint-disable-next-line import/no-mutable-exports */

let hairlineWidth = Math.round(0.4 * ratio) / ratio;

if (hairlineWidth === 0) {
  hairlineWidth = 1 / ratio;
}
/**
 * Create new Stylesheet
 * @param {object} styleObj - The style object
 */


function create(styleObj) {
  // TODO: validate the style key and value.
  // TODO: Convert the color and pixel unit at create.
  return styleObj;
}

var stylesheet = /*#__PURE__*/Object.freeze({
  __proto__: null,

  get hairlineWidth() {
    return hairlineWidth;
  },

  create: create
});
/* eslint-disable no-underscore-dangle */

const styles = create({
  baseVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    overflow: 'scroll'
  },
  baseHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'row',
    overflow: 'scroll'
  },
  contentContainerVertical: {
    collapse: false,
    flexDirection: 'column'
  },
  contentContainerHorizontal: {
    collapse: false,
    flexDirection: 'row'
  }
});
/**
 * Scrollable View without recycle feature.
 *
 * If you need to implement a long list, use `ListView`.
 * @noInheritDoc
 */

class ScrollView extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super(...arguments);
    this.instance = null;
  }
  /**
   * Scrolls to a given x, y offset, either immediately, with a smooth animation.
   *
   * @param {number} x - Scroll to horizon position X.
   * @param {number} y - Scroll To veritical position Y.
   * @param {boolean} animated - With smooth animation.By default is true.
   */


  scrollTo(x, y, animated = true) {
    let x_ = x;
    let y_ = y;
    let animated_ = animated;

    if (typeof x === 'number') {
      warn('`scrollTo(x, y, animated)` is deprecated, Use `scrollTo({x: 5, y: 5, animated: true})` instead.');
    } else if (typeof x === 'object' && x) {
      ({
        x: x_,
        y: y_,
        animated: animated_
      } = x);
    }

    x_ = x_ || 0;
    y_ = y_ || 0;
    animated_ = !!animated_;
    callUIFunction(this.instance, 'scrollTo', [x_, y_, animated_]);
  }
  /**
   * Scrolls to a given x, y offset, with specific duration of animation.
   *
   * @param {number} x - Scroll to horizon position X.
   * @param {number} y - Scroll To veritical position Y.
   * @param {number} duration - Duration of animation execution time, with ms unit.
   *                            By default is 1000ms.
   */


  scrollToWithDuration(x = 0, y = 0, duration = 1000) {
    callUIFunction(this.instance, 'scrollToWithOptions', [{
      x,
      y,
      duration
    }]);
  }
  /**
   * @ignore
   */


  render() {
    const {
      horizontal,
      contentContainerStyle,
      children,
      style
    } = this.props;
    const contentContainerStyle_ = [horizontal ? styles.contentContainerHorizontal : styles.contentContainerVertical, contentContainerStyle];
    const newStyle = horizontal ? Object.assign({}, style, styles.baseHorizontal) : Object.assign({}, style, styles.baseVertical);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
      nativeName: "ScrollView",
      ref: ref => {
        this.instance = ref;
      }
    }, this.props, {
      style: newStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(View, {
      style: contentContainerStyle_
    }, children));
  }

}
/* eslint-disable no-underscore-dangle */


const styles$1 = create({
  modal: {
    position: 'absolute'
  },
  container: {
    position: 'absolute',
    left: 0,
    top: 0
  }
});
/**
 * The Modal component is a basic way to present content above an enclosing view.
 * @noInheritDoc
 */

class Modal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  /**
   * @ignore
   */
  constructor(props) {
    super(props);
    this.eventSubscription = null;
  }
  /**
   * @ignore
   */


  componentDidMount() {
    if (Device$1.platform.OS === 'ios') {
      this.eventSubscription = new HippyEventListener('modalDismissed');
      this.eventSubscription.addCallback(params => {
        const {
          primaryKey,
          onDismiss
        } = this.props;

        if (params.primaryKey === primaryKey && typeof onDismiss === 'function') {
          onDismiss();
        }
      });
    }
  }
  /**
   * @ignore
   */


  componentWillUnmount() {
    if (Device$1.platform.OS === 'ios') {
      if (this.eventSubscription) {
        this.eventSubscription.unregister();
      }
    }
  }
  /**
   * @ignore
   */


  render() {
    const {
      children,
      visible,
      transparent,
      animated
    } = this.props;
    let {
      animationType
    } = this.props;

    if (visible === false) {
      return null;
    }

    const containerStyles = {
      backgroundColor: transparent ? 'transparent' : 'white'
    };

    if (!animationType) {
      // manually setting default prop here to keep support for the deprecated 'animated' prop
      animationType = 'none';

      if (animated) {
        animationType = 'slide';
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
      nativeName: "Modal",
      animationType: animationType,
      transparent: transparent,
      style: styles$1.modal
    }, this.props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(View, {
      style: [styles$1.container, containerStyles]
    }, children));
  }

}
/**
* @ignore
*/


Modal.defaultProps = {
  visible: true
};
/**
 * @noInheritDoc
 */

class Focusable extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  /**
   * @ignore
   */
  constructor(props) {
    super(props);
    const {
      requestFocus
    } = this.props;
    this.state = {
      isFocus: !!requestFocus
    };
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(e) {
    const {
      onFocus: userOnFocus
    } = this.props;

    if (typeof userOnFocus === 'function') {
      userOnFocus(e);
    }

    const {
      isFocus
    } = this.state;

    if (isFocus !== e.focus) {
      this.setState({
        isFocus: e.focus
      });
    }
  }
  /**
   * @ignore
   */


  render() {
    const {
      requestFocus,
      children,
      nextFocusDownId,
      nextFocusUpId,
      nextFocusLeftId,
      nextFocusRightId,
      style,
      noFocusStyle,
      focusStyle,
      onClick
    } = this.props;
    const {
      isFocus
    } = this.state;
    const child = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);
    let type;

    if (child && child.child && child.child.memoizedProps && child.child.memoizedProps.nativeName) {
      type = child.child.memoizedProps.nativeName;
    } else if (child && child.type && child.type.name) {
      type = child.type.name;
    }

    const nextFocusDown = nextFocusDownId && getNodeIdByRef(nextFocusDownId);
    const nextFocusUp = nextFocusUpId && getNodeIdByRef(nextFocusUpId);
    const nextFocusLeft = nextFocusLeftId && getNodeIdByRef(nextFocusLeftId);
    const nextFocusRight = nextFocusRightId && getNodeIdByRef(nextFocusRightId);
    let nativeStyle = style;

    if (type !== 'Text') {
      const childStyle = child.memoizedProps.style;
      nativeStyle = _objectSpread(_objectSpread({}, nativeStyle), childStyle);
    }

    Object.assign(nativeStyle, isFocus ? focusStyle : noFocusStyle);

    if (type === 'Text') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(View, {
        focusable: true,
        nextFocusDownId: nextFocusDown,
        nextFocusUpId: nextFocusUp,
        nextFocusLeftId: nextFocusLeft,
        nextFocusRightId: nextFocusRight,
        requestFocus: requestFocus,
        style: nativeStyle,
        onClick: onClick,
        onFocus: this.handleFocus
      }, child);
    }

    const {
      children: childProps
    } = child.memoizedProps;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      nextFocusDownId,
      nextFocusUpId,
      nextFocusLeftId,
      nextFocusRightId,
      requestFocus,
      onClick,
      focusable: true,
      children: childProps,
      style: nativeStyle,
      onFocus: this.handleFocus
    });
  }

}
/**
 * System built-in WebView
 *
 * For iOS it uses WKWebView, for Android it uses Webkit built-in.
 */


function WebView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", Object.assign({
    title: "hippy",
    nativeName: "WebView"
  }, props));
}

const {
  AsyncStorage: AsyncStorage$2,
  BackAndroid: BackAndroid$1,
  Bridge: Bridge$2,
  Clipboard,
  Cookie: NetworkModule,
  Device: Device$2,
  HippyRegister: HippyRegister$2,
  ImageLoader: ImageLoaderModule,
  NetworkInfo: NetInfo,
  UIManager: UIManagerModule
} = Native;
const {
  callNative,
  callNativeWithPromise,
  callNativeWithCallbackId,
  removeNativeCallback
} = Bridge$2;
const TimerModule = null;
const ConsoleModule = console;
const Platform = Device$2.platform;
const Hippy = HippyReact;
const RNfqb = HippyReact;
const ImageBackground = Image; // Forward compatibilities

const RNfqbRegister = HippyRegister$2;
const RNfqbEventEmitter = HippyEventEmitter;
const RNfqbEventListener = HippyEventListener;
const Dimensions = {
  get(name) {
    return Device$2[name];
  }

};
const PixelRatio = {
  get() {
    return Device$2.screen.scale;
  }

};
/* harmony default export */ __webpack_exports__["default"] = (HippyReact);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tencent/hippy-cli-plugin-webpack/configs/hippy-react-qb/base.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tencent_hippy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
/* harmony import */ var _tencent_hippy_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@tencent/hippy-rpc/index.js");
/* harmony import */ var _tencent_hippy_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@tencent/hippy-stream/index.js");
/* harmony import */ var _tencent_hippy_stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tencent_hippy_stream__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./node_modules/@tencent/hippy-react/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hippy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@hippy/react/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animated", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Animated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Animation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationSet", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["AnimationSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppRegistry", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["AppRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncStorage", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["AsyncStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackAndroid", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["BackAndroid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Clipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleModule", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["ConsoleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Dimensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easing", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Easing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Focusable", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Focusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hippy", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Hippy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HippyEventEmitter", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["HippyEventEmitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HippyEventListener", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["HippyEventListener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HippyRegister", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["HippyRegister"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageBackground", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["ImageBackground"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageLoaderModule", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["ImageLoaderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["ListView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetInfo", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["NetInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkModule", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["NetworkModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PixelRatio", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["PixelRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Platform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RNfqb", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["RNfqb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RNfqbEventEmitter", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["RNfqbEventEmitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RNfqbEventListener", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["RNfqbEventListener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RNfqbRegister", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["RNfqbRegister"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshWrapper", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["RefreshWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["TextInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerModule", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["TimerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIManagerModule", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["UIManagerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewPager", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["ViewPager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callNative", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["callNative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callNativeWithCallbackId", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["callNativeWithCallbackId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callNativeWithPromise", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["callNativeWithPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorParse", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["colorParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNativeCallback", function() { return _hippy_react__WEBPACK_IMPORTED_MODULE_0__["removeNativeCallback"]; });


/* harmony default export */ __webpack_exports__["default"] = (_hippy_react__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* eslint-disable-next-line no-duplicate-imports */



/***/ }),

/***/ "./node_modules/@tencent/hippy-rpc/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Communicator", function() { return Communicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return ErrorCodes; });
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tencent_hippy_stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@tencent/hippy-stream/index.js");
/* harmony import */ var _tencent_hippy_stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tencent_hippy_stream__WEBPACK_IMPORTED_MODULE_2__);
/* hippy-rpc 2.2.4 */



var ErrorCodes = {
  SUCCESS: 0,
  CLIENT: {
    DECODE_ERROR: -11000,
    REQUEST_TIMEOUT: -13001
  }
};
/* eslint-disable no-underscore-dangle */

const {
  callNativeWithPromise
} = global.Hippy.bridge;
const kOptions = Symbol('kOptions');
const kInvoke = Symbol('kInvoke');
const kName = Symbol('kName');
const kDefaultOptions = {
  timeout: 30 * 1000
};

if (!global.__HIPPYNATIVEGLOBAL__.Platform) {
  global.__HIPPYNATIVEGLOBAL__.Platform = {};
}

const MODULE_NAME = global.__HIPPYNATIVEGLOBAL__.Platform.PackageName === 'mqq' ? 'TKDWupModule' : 'QBWupModule';

class ObjectProxy {
  constructor(name, options) {
    this[kName] = name;
    this[kOptions] = Object.assign(kDefaultOptions, options);
  }

  set timeout(iTimeout) {
    this[kOptions].timeout = iTimeout;
  }

  get timeout() {
    return this[kOptions].timeout;
  }

  set version(iVersion) {
    assert__WEBPACK_IMPORTED_MODULE_0___default.a.fail('unchangeable');
  }

  get version() {
    return _tencent_hippy_stream__WEBPACK_IMPORTED_MODULE_2__["UniAttribute"].WUP_SIMPLE;
  }

  taf_invoke() {
    assert__WEBPACK_IMPORTED_MODULE_0___default.a.fail('notsupport');
  }

  wup_invoke(funcName, wupAttribute, extProperty, funcInfo) {
    let header = '';
    let context = null;
    let options = null;

    if (typeof extProperty === 'object' && extProperty !== null) {
      if (Object.prototype.hasOwnProperty.call(extProperty, 'header') && typeof extProperty.header === 'string') {
        ({
          header
        } = extProperty);
      }

      if (typeof extProperty.context === 'object') {
        ({
          context
        } = extProperty);
      }

      if (typeof extProperty.options === 'object') {
        ({
          options
        } = extProperty);
      }
    }

    assert__WEBPACK_IMPORTED_MODULE_0___default()(funcInfo.arguments.length > 0 && funcInfo.arguments.length <= 2, 'arguments signature(<struct>, out <struct>) mismatch');
    let reqName = '';
    let reqClassName = '';
    let rspName = ''; // eslint-disable-next-line no-restricted-syntax

    for (const argument of funcInfo.arguments) {
      switch (argument.direction) {
        case 'in':
          {
            reqName = argument.name;
            reqClassName = argument.class;
            break;
          }

        case 'out':
          {
            rspName = argument.name;
            break;
          }

        default:
          {
            assert__WEBPACK_IMPORTED_MODULE_0___default.a.fail('proxy file version mismatch');
          }
      }
    }

    assert__WEBPACK_IMPORTED_MODULE_0___default()(reqName !== '' && reqClassName !== '', 'arguments signature(<struct>, out <struct>) mismatch');
    const reqMessage = {
      serviceName: this[kName],
      funcName,
      reqName,
      reqClassName,
      rspName,
      header
    };

    if (context !== null) {
      reqMessage.headers = context;
    }

    if (options !== null) {
      reqMessage.options = options;
    }

    const reqPayload = wupAttribute._data.get(reqName);

    assert__WEBPACK_IMPORTED_MODULE_0___default()(reqPayload !== undefined, `${reqName} not found in data`);
    reqMessage.base64data = reqPayload.toNodeBuffer().toString('base64');
    return this[kInvoke](reqMessage);
  }

  [kInvoke](reqMessage) {
    const startTime = Date.now();
    return new Promise((resolve, reject) => {
      let timer = setTimeout(() => {
        timer = null;
        reject({
          code: ErrorCodes.CLIENT.REQUEST_TIMEOUT,
          cause: 'request timeout'
        });
      }, this[kOptions].timeout);
      callNativeWithPromise(MODULE_NAME, 'send', reqMessage).then(result => {
        if (timer === null) {
          return;
        }

        clearTimeout(timer);
        timer = null;

        if (result.code === ErrorCodes.SUCCESS) {
          const wup = new _tencent_hippy_stream__WEBPACK_IMPORTED_MODULE_2__["UniAttribute"]();
          wup.wupVersion = _tencent_hippy_stream__WEBPACK_IMPORTED_MODULE_2__["UniAttribute"].WUP_SIMPLE;

          if (reqMessage.rspName !== '') {
            try {
              wup._data.set(reqMessage.rspName, new _tencent_hippy_stream__WEBPACK_IMPORTED_MODULE_2__["BinBuffer"](buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(result.body, 'base64')));
            } catch (err) {
              reject({
                code: ErrorCodes.CLIENT.DECODE_ERROR,
                cause: `${err}`
              });
              return;
            }
          }

          resolve({
            wup,
            context: result.headers
          });
        } else {
          reject({
            code: result.code,
            cause: 'result code != 0'
          });
        }
      }, err => {
        if (timer === null) {
          return;
        }

        clearTimeout(timer);
        timer = null;
        reject(err);
      });
    }).then(({
      wup,
      context
    }) => ({
      request: {
        message: reqMessage,
        costtime: Date.now() - startTime
      },
      response: {
        wup,
        context
      }
    }), err => {
      throw {
        request: {
          costtime: Date.now() - startTime,
          message: reqMessage
        },
        error: {
          code: err.code,
          message: err.cause
        }
      };
    });
  }

}
/* eslint-disable no-underscore-dangle */


const kCreateObjectProxy = Symbol('kCreateObjectProxy');
const kProperty = Symbol('kProperty');

class Communicator {
  static New() {
    return new Communicator();
  }

  constructor() {
    this[kProperty] = {};
  }

  setProperty(key, value) {
    this[kProperty][key] = value;
  }

  getProperty(key, value) {
    return this[kProperty][key] || value;
  }

  stringToProxy(Handler, name) {
    assert__WEBPACK_IMPORTED_MODULE_0___default()(Handler, 'please specify the arguments[0] for ProxyHandle');
    assert__WEBPACK_IMPORTED_MODULE_0___default()(typeof name === 'string' && name !== '', 'please specify the arguments[1] for ServiceName');
    const proxy = new Handler();
    proxy._name = name;
    proxy._worker = this[kCreateObjectProxy](name);
    return proxy;
  }

  [kCreateObjectProxy](name) {
    const options = {};
    const timeout = this.getProperty('timeout');

    if (timeout > 0) {
      options.timeout = timeout;
    }

    return new ObjectProxy(name, options);
  }

}

const client = Communicator.New();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tencent/hippy-stream/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/@tencent/taf-stream/libjce.js");

/***/ }),

/***/ "./node_modules/@tencent/taf-stream/libjce.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * KevinTian@tencent.com
 *
 * NodeJs\u7248\u672cJCE\u7f16\u89e3\u7801
 */
var assert = __webpack_require__("./node_modules/assert/assert.js");

var util = __webpack_require__("./node_modules/util/util.js");

var Big = __webpack_require__("./node_modules/big.js/big.js");

var Taf = module.exports = {};
var BIT32 = 4294967296;
var BIT31 = BIT32 / 2;
/**
 * \u5f02\u5e38\u7c7b
 */

Taf.JceException = function ($code, $message) {
  this.code = $code;
  this.message = $message;
};

util.inherits(Taf.JceException, Error);

Taf.JceEncodeException = function ($message) {
  this.code = -2;
  this.message = $message;
};

util.inherits(Taf.JceEncodeException, Taf.JceException);

Taf.JceDecodeException = function ($message) {
  this.code = -1;
  this.message = $message;
};

util.inherits(Taf.JceDecodeException, Taf.JceException);

Taf.JceDecodeMismatch = function ($message) {
  this.code = -1;
  this.message = $message;
};

util.inherits(Taf.JceDecodeMismatch, Taf.JceDecodeException);

Taf.JceDecodeRequireNotExist = function ($message) {
  this.code = -1;
  this.message = $message;
};

util.inherits(Taf.JceDecodeRequireNotExist, Taf.JceDecodeException);

Taf.JceDecodeInvalidValue = function ($message) {
  this.code = -1;
  this.message = $message;
};

util.inherits(Taf.JceDecodeInvalidValue, Taf.JceDecodeException);

Taf.WupNotFoundKey = function ($message) {
  this.code = -1;
  this.message = $message;
};

util.inherits(Taf.WupNotFoundKey, Taf.JceException);
/**
 * JCE\u7f16\u89e3\u7801\u5e95\u5c42\u8f85\u52a9\u7c7b
 */

Taf.DataHelp = {
  EN_INT8: 0,
  EN_INT16: 1,
  EN_INT32: 2,
  EN_INT64: 3,
  EN_FLOAT: 4,
  EN_DOUBLE: 5,
  EN_STRING1: 6,
  EN_STRING4: 7,
  EN_MAP: 8,
  EN_LIST: 9,
  EN_STRUCTBEGIN: 10,
  EN_STRUCTEND: 11,
  EN_ZERO: 12,
  EN_SIMPLELIST: 13
};
Taf.Boolean = {
  _write: function (os, tag, val) {
    return os.writeBoolean(tag, val);
  },
  _read: function (is, tag, def) {
    return is.readBoolean(tag, true, def);
  },
  _classname: "bool"
};
Taf.Int8 = {
  _write: function (os, tag, val) {
    return os.writeInt8(tag, val);
  },
  _read: function (is, tag, def) {
    return is.readInt8(tag, true, def);
  },
  _classname: "char"
};
Taf.Int16 = {
  _write: function (os, tag, val) {
    return os.writeInt16(tag, val);
  },
  _read: function (is, tag, def) {
    return is.readInt16(tag, true, def);
  },
  _classname: "short"
};
Taf.Int32 = {
  _write: function (os, tag, val) {
    return os.writeInt32(tag, val);
  },
  _read: function (is, tag, def) {
    return is.readInt32(tag, true, def);
  },
  _classname: "int32"
};
Taf.Int64 = {
  _write: function (os, tag, val, bString) {
    return os.writeInt64(tag, val, bString);
  },
  _read: function (is, tag, def, bString) {
    return is.readInt64(tag, true, def, bString);
  },
  _classname: "int64"
};
Taf.UInt8 = {
  _write: function (os, tag, val) {
    return os.writeInt16(tag, val);
  },
  _read: function (is, tag, def) {
    return is.readInt16(tag, true, def);
  },
  _classname: "short"
};
Taf.UInt16 = {
  _write: function (os, tag, val) {
    return os.writeInt32(tag, val);
  },
  _read: function (is, tag, def) {
    return is.readInt32(tag, true, def);
  },
  _classname: "int32"
};
Taf.UInt32 = {
  _write: function (os, tag, val) {
    return os.writeInt64(tag, val);
  },
  _read: function (is, tag, def) {
    return is.readInt64(tag, true, def);
  },
  _classname: "int64"
};
Taf.Float = {
  _write: function (os, tag, val) {
    return os.writeFloat(tag, val);
  },
  _read: function (is, tag, def) {
    return is.readFloat(tag, true, def);
  },
  _classname: "float"
};
Taf.Double = {
  _write: function (os, tag, val) {
    return os.writeDouble(tag, val);
  },
  _read: function (is, tag, def) {
    return is.readDouble(tag, true, def);
  },
  _classname: "double"
};
Taf.String = {
  _write: function (os, tag, val, bRaw) {
    return os.writeString(tag, val, bRaw);
  },
  _read: function (is, tag, def, bRaw) {
    return is.readString(tag, true, def, bRaw);
  },
  _classname: "string"
};
Taf.Enum = {
  _write: function (os, tag, val) {
    return os.writeInt32(tag, val);
  },
  _read: function (is, tag, def) {
    return is.readInt32(tag, true, def);
  },
  _classname: "int32"
};
/**
 * TAF-List\u5b9e\u73b0\u7c7b
 */

var HeroList = function (proto, bValue) {
  this._proto = proto;
  this._bValue = bValue || 0;
  this.value = new Array();
  this._classname = "List<" + proto._classname + ">";
};

HeroList.prototype._write = function (os, tag, val, bRaw, bString) {
  return os.writeList(tag, val, bRaw, bString);
};

HeroList.prototype._read = function (is, tag, def, bRaw, bString) {
  return is.readList(tag, true, def, bRaw, bString);
};

HeroList.prototype.new = function () {
  return new HeroList(this._proto);
};

HeroList.prototype.at = function (index) {
  return this.value[index];
};

HeroList.prototype.push = function (value) {
  this.value.push(value);
};

HeroList.prototype.forEach = function (callback) {
  for (var i = 0; i < this.value.length; i++) {
    if (callback.call(null, this.value[i], i, this.value) == false) break;
  }
};

HeroList.prototype.toObject = function () {
  var tmp = [];

  for (var i = 0, len = this.value.length; i < len; i++) {
    tmp.push(!this.value[i].toObject ? this.value[i] : this.value[i].toObject());
  }

  return tmp;
};

HeroList.prototype.readFromObject = function (json) {
  var vsimple = !this._proto.create && !this._proto._vproto && !this._proto._proto && !this._proto.new;

  for (var i = 0, len = json.length; i < len; i++) {
    if (vsimple) {
      this.push(json[i]);
    } else {
      var temp = this._proto.new();

      temp.readFromObject(json[i]);
      this.push(temp);
    }
  }

  return this;
};

HeroList.prototype.__defineGetter__("length", function () {
  return this.value.length;
});

Taf.List = function (proto, bValue) {
  return new HeroList(proto, bValue);
};
/**
 * TAF-Map\u5b9e\u73b0\u7c7b
 */


var MultiMap = function (kproto, vproto, bKey, bValue) {
  this._kproto = kproto;
  this._vproto = vproto;
  this._bKey = bKey || 0;
  this._bValue = bValue || 0;
  this.keys = new Object();
  this.value = new Object();
  this._classname = "map<" + kproto._classname + "," + vproto._classname + ">";
};

MultiMap.prototype._write = function (os, tag, val, bRaw) {
  return os.writeMap(tag, val, bRaw);
};

MultiMap.prototype._read = function (is, tag, def, bRaw) {
  return is.readMap(tag, true, def, bRaw);
};

MultiMap.prototype.put = function (key, value) {
  this.insert(key, value);
};

MultiMap.prototype.set = function (key, value) {
  this.insert(key, value);
};

MultiMap.prototype.remove = function (key) {
  delete this.keys[key._genKey()];
  delete this.value[key._genKey()];
};

MultiMap.prototype.size = function () {
  return Object.keys(this.keys || {}).length;
};

MultiMap.prototype.has = function (key) {
  return this.keys.hasOwnProperty(key._genKey());
};

MultiMap.prototype.insert = function (key, value) {
  var keys = Object.keys(this.keys || {});

  for (var i = 0; i < keys.length; i++) {
    var anItem = keys[i];

    if (key._equal(this.keys[anItem])) {
      this.value[anItem] = value;
      return;
    }
  }

  this.keys[key._genKey()] = key;
  this.value[key._genKey()] = value;
};

MultiMap.prototype.get = function (key) {
  var keys = Object.keys(this.keys || {});

  for (var i = 0; i < keys.length; i++) {
    var anItem = keys[i];

    if (key._equal(this.keys[anItem])) {
      return this.value[anItem];
    }
  }

  return undefined;
};

MultiMap.prototype.clear = function () {
  delete this.keys;
  delete this.value;
  this.keys = new Object();
  this.value = new Object();
};

MultiMap.prototype.forEach = function (callback) {
  var keys = Object.keys(this.value || {});

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (callback.call(null, this.keys[key], this.value[key]) == false) break;
  }
};

MultiMap.prototype.toObject = function () {
  assert(false, "multimap has no toObject function");
};

MultiMap.prototype.readFromObject = function () {
  assert(false, "multimap has no toObject readFromObject");
};

var HeroMap = function (kproto, vproto, bKey, bValue) {
  this._kproto = kproto;
  this._vproto = vproto;
  this._bKey = bKey || 0;
  this._bValue = bValue || 0;
  this.value = new Object();
  this._classname = "map<" + kproto._classname + "," + vproto._classname + ">";
};

HeroMap.prototype._write = function (os, tag, val) {
  return os.writeMap(tag, val);
};

HeroMap.prototype._read = function (is, tag, def) {
  return is.readMap(tag, true, def);
};

HeroMap.prototype.new = function () {
  return new HeroMap(this._kproto, this._vproto);
};

HeroMap.prototype.put = function (key, value) {
  this.insert(key, value);
};

HeroMap.prototype.set = function (key, value) {
  this.insert(key, value);
};

HeroMap.prototype.remove = function (key) {
  delete this.value[key];
};

HeroMap.prototype.size = function () {
  return Object.keys(this.value || {}).length;
};

HeroMap.prototype.has = function (key) {
  return this.value.hasOwnProperty(key);
};

HeroMap.prototype.insert = function (key, value) {
  this.value[key] = value;
};

HeroMap.prototype.get = function (key) {
  return this.value[key];
};

HeroMap.prototype.clear = function () {
  delete this.value;
  this.value = new Object();
};

HeroMap.prototype.forEach = function (callback, bKey) {
  var keys = Object.keys(this.value || {});

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    switch (this._kproto) {
      case Taf.Int8:
      case Taf.Int16:
      case Taf.Int32:
      case Taf.UInt8:
      case Taf.UInt16:
      case Taf.UInt32:
      case Taf.Float:
      case Taf.Double:
        key = Number(key);
        break;

      case Taf.Int64:
        if (!bKey) {
          key = Number(key);
        }

        break;
    }

    if (callback.call(null, key, this.value[key]) == false) break;
  }
};

HeroMap.prototype.toObject = function () {
  var tmp = {};
  var keys = Object.keys(this.value || {});

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    tmp[key] = !this.value[key].toObject ? this.value[key] : this.value[key].toObject();
  }

  return tmp;
};

HeroMap.prototype.readFromObject = function (json) {
  var vsimple = !this._vproto.create && !this._vproto._vproto && !this._vproto._proto;
  var keys = Object.keys(json || {});

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (vsimple) {
      this.insert(key, json[key]);
    } else {
      var temp = this._vproto.new();

      temp.readFromObject(json[key]);
      this.insert(key, temp);
    }
  }
};

Taf.Map = function (kproto, vproto, bKey, bValue) {
  if (kproto.prototype && kproto.prototype._equal) {
    return new MultiMap(kproto, vproto, bKey, bValue);
  }

  return new HeroMap(kproto, vproto, bKey, bValue);
};
/**
 * \u9002\u7528\u4e8eNodeJS\u652f\u6301\u7684Buffer\u7684\u5b9e\u73b0\u7c7b
 */


var createNodeBuffer = function () {
  if ('allocUnsafe' in Buffer) {
    return function (data) {
      return Buffer.allocUnsafe(data);
    };
  } else {
    return function (data) {
      return new Buffer(data);
    };
  }
}();

Taf.BinBuffer = function (buffer) {
  if (!buffer) {
    buffer = createNodeBuffer(0);
  }

  this._buffer = buffer != undefined && buffer instanceof Buffer ? buffer : null;
  this._length = buffer != undefined && buffer instanceof Buffer ? buffer.length : 0;
  this._capacity = this._length;
  this._position = 0;
};

Taf.BinBuffer._classname = "list<char>";

Taf.BinBuffer.prototype.__defineGetter__("length", function () {
  return this._length;
});

Taf.BinBuffer.prototype.__defineGetter__("capacity", function () {
  return this._capacity;
});

Taf.BinBuffer.prototype.__defineGetter__("position", function () {
  return this._position;
});

Taf.BinBuffer.prototype.__defineSetter__("position", function (position) {
  this._position = position;
});

Taf.BinBuffer._write = function (os, tag, val) {
  return os.writeBytes(tag, val);
};

Taf.BinBuffer._read = function (os, tag, def) {
  return os.readBytes(tag, true, def);
};

Taf.BinBuffer.new = function () {
  return new Taf.BinBuffer();
};

Taf.BinBuffer.from = function (data) {
  var binBuffer = new Taf.BinBuffer();
  binBuffer.writeString(data);
  return binBuffer;
};

Taf.BinBuffer.prototype.reset = function () {
  this._length = 0;
  this._position = 0;
};

Taf.BinBuffer.prototype._allocate = function (byteLength) {
  if (this._capacity > this._position + byteLength) {
    return;
  }

  this._capacity = Math.max(512, (this._position + byteLength) * 2);
  var temp = createNodeBuffer(this._capacity);

  if (this._buffer != null) {
    this._buffer.copy(temp, 0, 0, this._position);

    this._buffer = undefined;
  }

  this._buffer = temp;
};

Taf.BinBuffer.prototype.replace = function (srcBuffer, offset, byteLength) {
  srcBuffer.copy(this._buffer, 0, offset, offset + byteLength);
};

Taf.BinBuffer.prototype.writeInt8 = function (value) {
  value = +value;

  this._allocate(1);

  this._buffer.writeInt8(value, this._position);

  this._position += 1;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeUInt8 = function (value) {
  value = +value;

  this._allocate(1);

  this._buffer.writeUInt8(value, this._position);

  this._position += 1;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeInt16 = function (value) {
  value = +value;

  this._allocate(2);

  this._buffer.writeInt16BE(value, this._position);

  this._position += 2;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeUInt16 = function (value) {
  value = +value;

  this._allocate(2);

  this._buffer.writeUInt16BE(value, this._position);

  this._position += 2;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeInt32 = function (value) {
  value = +value;

  this._allocate(4);

  this._buffer.writeInt32BE(value, this._position);

  this._position += 4;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeUInt32 = function (value) {
  value = +value;

  this._allocate(4);

  this._buffer.writeUInt32BE(value, this._position);

  this._position += 4;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeInt64 = function (value, bString) {
  var H4, L4;

  if (bString === true || bString === 1) {
    //\u5b57\u7b26\u4e32int64\u5199\u5165\uff0c\u652f\u6301int64\u7cbe\u5ea6
    var val = new Big(value);

    if (val.s === 1) {
      H4 = +val.div(BIT32).round(0, 0).toString();
      L4 = +val.mod(BIT32).toString();
    } else {
      H4 = val.div(BIT32).round(0, 3);
      L4 = +val.minus(new Big(H4).times(BIT32)).toString();
      H4 = +H4.plus(BIT32).toString();
    }
  } else {
    //Number\u5199\u5165\uff0c\u652f\u6301\u52302^53-1\u7684\u7cbe\u5ea6
    var val = +value;

    if (val > 0) {
      H4 = Math.floor(val / BIT32);
      L4 = val - H4 * BIT32;
    } else {
      H4 = Math.floor(val / BIT32);
      L4 = val - H4 * BIT32;
      H4 += BIT32;
    }
  }

  this._allocate(8);

  this._buffer.writeUInt32BE(H4, this._position);

  this._buffer.writeUInt32BE(L4, this._position + 4);

  this._position += 8;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeFloat = function (value) {
  this._allocate(4);

  this._buffer.writeFloatBE(value, this._position);

  this._position += 4;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeDouble = function (value) {
  this._allocate(8);

  this._buffer.writeDoubleBE(value, this._position);

  this._position += 8;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeString = function (value, ByteLength, bRaw) {
  if (bRaw === true || bRaw === 1) {
    this._allocate(ByteLength);

    value.copy(this._buffer, this._position);
    this._position += ByteLength;
    this._length = this._position;
    return;
  }

  var byteLength = ByteLength || Buffer.byteLength(value);

  this._allocate(byteLength);

  this._buffer.write(value, this._position, byteLength, "utf8");

  this._position += byteLength;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeBinBuffer = function (srcBinBuffer) {
  if (srcBinBuffer._length == 0 || srcBinBuffer._buffer == null) return;

  this._allocate(srcBinBuffer.length);

  srcBinBuffer._buffer.copy(this._buffer, this._position, 0, srcBinBuffer._length);

  this._position += srcBinBuffer._length;
  this._length = this._position;
};

Taf.BinBuffer.prototype.writeNodeBuffer = function (srcBuffer, offset, byteLength) {
  offset = offset == undefined ? 0 : offset;
  byteLength = byteLength == undefined ? srcBuffer.length : byteLength;

  this._allocate(byteLength);

  srcBuffer.copy(this._buffer, this._position, offset, offset + byteLength);
  this._length += byteLength;
  this._position += byteLength;
};

Taf.BinBuffer.prototype.readInt8 = function () {
  return this._buffer.readInt8(this._position++);
};

Taf.BinBuffer.prototype.readInt16 = function () {
  this._position += 2;
  return this._buffer.readInt16BE(this._position - 2);
};

Taf.BinBuffer.prototype.readInt32 = function () {
  this._position += 4;
  return this._buffer.readInt32BE(this._position - 4);
};

Taf.BinBuffer.prototype.readUInt8 = function () {
  this._position += 1;
  return this._buffer.readUInt8(this._position - 1);
};

Taf.BinBuffer.prototype.readUInt16 = function () {
  this._position += 2;
  return this._buffer.readUInt16BE(this._position - 2);
};

Taf.BinBuffer.prototype.readUInt32 = function () {
  this._position += 4;
  return this._buffer.readUInt32BE(this._position - 4);
};

Taf.BinBuffer.prototype.readInt64 = function (bString) {
  var H4 = this._buffer.readUInt32BE(this._position);

  var L4 = this._buffer.readUInt32BE(this._position + 4);

  this._position += 8; //\u5b57\u7b26\u4e32\u683c\u5f0f\u8bfb\u51fa\uff0c\u652f\u6301int64\u7cbe\u5ea6

  if (bString === true || bString === 1) {
    if (H4 < BIT31) {
      return new Big(H4).times(BIT32).plus(L4).toString();
    } else {
      H4 = BIT32 - 1 - H4;
      return '-' + new Big(H4).times(BIT32).plus(BIT32 - L4).toString();
    }
  } //Number\u8bfb\u51fa\uff0c\u652f\u6301\u5230 2^53 - 1 \u7684\u7cbe\u5ea6


  if (H4 < BIT31) {
    return H4 * BIT32 + L4;
  } else {
    return -(BIT32 - L4 + BIT32 * (BIT32 - 1 - H4));
  }
};

Taf.BinBuffer.prototype.readFloat = function () {
  this._position += 4;
  return this._buffer.readFloatBE(this._position - 4);
};

Taf.BinBuffer.prototype.readDouble = function () {
  this._position += 8;
  return this._buffer.readDoubleBE(this._position - 8);
};

Taf.BinBuffer.prototype.readString = function (byteLength, bRaw) {
  var temp = createNodeBuffer(byteLength);
  var ret;

  if (bRaw === true || bRaw === 1) {
    this._buffer.copy(temp, 0, this._position, this._position + byteLength);

    this._position += byteLength;
    return temp;
  }

  this._buffer.copy(temp, 0, this._position, this._position + byteLength);

  this._position += byteLength;

  if (temp.length == 1) {
    if (temp[0] & 0x80) {
      ret = temp.toString("binary", 0, temp.length);
    } else {
      ret = temp.toString("utf8", 0, temp.length);
    }
  } else {
    ret = temp.toString("utf8", 0, temp.length);
  }

  return ret;
};

Taf.BinBuffer.prototype.readBinBuffer = function (byteLength, bReuse) {
  if (bReuse === true) {
    var temp = new Taf.BinBuffer();
    temp._buffer = this._buffer.slice(this._position, this._position + byteLength);
    temp._length = byteLength;
    temp._capacity = byteLength;
    temp._position = 0;
    return temp;
  }

  var temp = new Taf.BinBuffer();
  temp.writeNodeBuffer(this._buffer, this._position, byteLength);
  this._position += byteLength;
  return temp;
};

Taf.BinBuffer.prototype.toNodeBuffer = function () {
  var temp = createNodeBuffer(this._length);

  this._buffer.copy(temp, 0, 0, this._length);

  return temp;
};

Taf.BinBuffer.prototype.toNodeBufferUnSafe = function () {
  return this._buffer.slice(0, this._length);
};

Taf.BinBuffer.prototype.toObject = function () {
  return this.toNodeBuffer();
};

Taf.BinBuffer.prototype.readFromObject = Taf.BinBuffer.prototype.writeNodeBuffer;

Taf.BinBuffer.prototype.print = function () {
  var str = "";

  for (var i = 0; i < this._length; i++) {
    str += (this._buffer[i] > 15 ? "" : "0") + this._buffer[i].toString(16) + ((i + 1) % 16 == 0 ? "\n" : " ");
  }

  console.log(str.toUpperCase());
};
/**
 * TAF-JCE\u8f93\u51fa\u7f16\u89e3\u7801\u5305\u88f9\u7c7b
 */


Taf.JceOutputStream = function () {
  this._binBuffer = new Taf.BinBuffer();
};

Taf.JceOutputStream.prototype._writeTo = function (tag, type) {
  if (tag < 15) {
    this._binBuffer.writeUInt8(tag << 4 & 0xF0 | type);
  } else {
    this._binBuffer.writeUInt16((0xF0 | type) << 8 | tag);
  }
};

Taf.JceOutputStream.prototype.setHeaderLength = function (value) {
  var position = this._binBuffer._position === 0 ? 4 : this._binBuffer._position;
  var length = this._binBuffer._position === 0 ? 4 : this._binBuffer._length;
  this._binBuffer._position = 0;

  this._binBuffer.writeInt32(value);

  this._binBuffer._position = position;
  this._binBuffer._length = length;
};

Taf.JceOutputStream.prototype.writeBoolean = function (tag, value) {
  this.writeInt8(tag, value == true ? 1 : 0);
};

Taf.JceOutputStream.prototype.writeInt8 = function (tag, value) {
  value = +value;

  if (value == 0) {
    this._writeTo(tag, Taf.DataHelp.EN_ZERO);
  } else {
    this._writeTo(tag, Taf.DataHelp.EN_INT8);

    this._binBuffer.writeInt8(value);
  }
};

Taf.JceOutputStream.prototype.writeInt16 = function (tag, value) {
  value = +value;

  if (value >= -128 && value <= 127) {
    this.writeInt8(tag, value);
  } else {
    this._writeTo(tag, Taf.DataHelp.EN_INT16);

    this._binBuffer.writeInt16(value);
  }
};

Taf.JceOutputStream.prototype.writeInt32 = function (tag, value) {
  value = +value;

  if (value >= -32768 && value <= 32767) {
    this.writeInt16(tag, value);
  } else {
    this._writeTo(tag, Taf.DataHelp.EN_INT32);

    this._binBuffer.writeInt32(value);
  }
};

Taf.JceOutputStream.prototype.writeInt64 = function (tag, value, bString) {
  var val = +value;

  if (val >= -2147483648 && val <= 2147483647) {
    this.writeInt32(tag, val);
    return;
  }

  this._writeTo(tag, Taf.DataHelp.EN_INT64);

  this._binBuffer.writeInt64(value, bString);
};

Taf.JceOutputStream.prototype.writeUInt8 = function (tag, value) {
  this.writeInt16(tag, value);
};

Taf.JceOutputStream.prototype.writeUInt16 = function (tag, value) {
  this.writeInt32(tag, value);
};

Taf.JceOutputStream.prototype.writeUInt32 = function (tag, value) {
  this.writeInt64(tag, value);
};

Taf.JceOutputStream.prototype.writeFloat = function (tag, value) {
  if (value == 0) {
    this._writeTo(tag, Taf.DataHelp.EN_ZERO);
  } else {
    this._writeTo(tag, Taf.DataHelp.EN_FLOAT);

    this._binBuffer.writeFloat(value);
  }
};

Taf.JceOutputStream.prototype.writeDouble = function (tag, value) {
  if (value == 0) {
    this._writeTo(tag, Taf.DataHelp.EN_ZERO);
  } else {
    this._writeTo(tag, Taf.DataHelp.EN_DOUBLE);

    this._binBuffer.writeDouble(value);
  }
};

Taf.JceOutputStream.prototype.writeStruct = function (tag, value) {
  if (value._writeTo == undefined) {
    throw Error("not defined writeTo Function");
  }

  this._writeTo(tag, Taf.DataHelp.EN_STRUCTBEGIN);

  value._writeTo(this);

  this._writeTo(0, Taf.DataHelp.EN_STRUCTEND);
};

Taf.JceOutputStream.prototype.writeString = function (tag, value, bRaw) {
  if (bRaw != undefined && bRaw == true) {
    var byteLength = value.length;

    if (byteLength > 255) {
      this._writeTo(tag, Taf.DataHelp.EN_STRING4);

      this._binBuffer.writeUInt32(byteLength);
    } else {
      this._writeTo(tag, Taf.DataHelp.EN_STRING1);

      this._binBuffer.writeUInt8(byteLength);
    }

    this._binBuffer.writeString(value, byteLength, bRaw);

    return;
  }

  var byteLength = Buffer.byteLength(value, "utf8");

  if (byteLength > 255) {
    this._writeTo(tag, Taf.DataHelp.EN_STRING4);

    this._binBuffer.writeUInt32(byteLength);
  } else {
    this._writeTo(tag, Taf.DataHelp.EN_STRING1);

    this._binBuffer.writeUInt8(byteLength);
  }

  this._binBuffer.writeString(value, byteLength);
};

Taf.JceOutputStream.prototype.writeBytes = function (tag, value) {
  this._writeTo(tag, Taf.DataHelp.EN_SIMPLELIST);

  this._writeTo(0, Taf.DataHelp.EN_INT8);

  this.writeInt32(0, value.length);

  this._binBuffer.writeBinBuffer(value);
};

var writeListDeprecateWarnning = util.deprecate(function () {}, "bRaw in writeList is deprecated, use List(TafStream.String, bRaw) instead");

Taf.JceOutputStream.prototype.writeList = function (tag, value, bRaw) {
  this._writeTo(tag, Taf.DataHelp.EN_LIST);

  this.writeInt32(0, value.length); //3.0.21\u7248\u672c\u4e4b\u524d\u901a\u8fc7writeList(xxx, true)\u6765\u8868\u793a\u5b57\u7b26\u4e32\u8f6cbuffer\uff0clong\u8f6cstring\u8868\u793a
  //3.0.21\u7248\u672c\u4e4b\u540e\u901a\u8fc7\u6784\u9020 List<T, bValue>\u6765\u8868\u793a\u662f\u5426\u8f6c\u6362\uff0c\u8fd9\u91cc\u4ee5\u540e\u8981\u5e9f\u5f03\u6389

  if (bRaw === true) {
    writeListDeprecateWarnning();
  }

  var bValue = value._bValue || bRaw;

  for (var i = 0, len = value.value.length; i < len; i++) {
    value._proto._write(this, 0, value.value[i], bValue);
  }
};

Taf.JceOutputStream.prototype.writeMap = function (tag, value) {
  this._writeTo(tag, Taf.DataHelp.EN_MAP);

  this.writeInt32(0, value.size());
  var self = this;
  var bKey = value._bKey,
      bValue = value._bValue;

  if (value._kproto == Taf.String) {
    bKey = false;
  }

  value.forEach(function (key, val) {
    value._kproto._write(self, 0, key, bKey);

    value._vproto._write(self, 1, val, bValue);
  }, bKey);
};

Taf.JceOutputStream.prototype.getBinBuffer = function () {
  return this._binBuffer;
};
/**
 * TAF-JCE\u8f93\u5165\u7f16\u89e3\u7801\u5305\u88f9\u7c7b
 */


Taf.JceInputStream = function (binBuffer) {
  this._binBuffer = binBuffer;
  this._binBuffer._position = 0;
};

Taf.JceInputStream.prototype.setBinBuffer = function (binBuffer) {
  this._binBuffer = binBuffer;
  this._binBuffer._position = 0;
};

Taf.JceInputStream.prototype._readFrom = function () {
  var temp = this._binBuffer.readUInt8();

  var tag = (temp & 0xF0) >> 4;
  var type = temp & 0x0F;
  if (tag >= 15) tag = this._binBuffer.readUInt8();
  return {
    tag: tag,
    type: type
  };
};

Taf.JceInputStream.prototype._peekFrom = function () {
  var pos = this._binBuffer._position;

  var head = this._readFrom();

  this._binBuffer.position = pos;
  return {
    tag: head.tag,
    type: head.type,
    size: head.tag >= 15 ? 2 : 1
  };
};

Taf.JceInputStream.prototype._skipField = function (type) {
  switch (type) {
    case Taf.DataHelp.EN_INT8:
      this._binBuffer._position += 1;
      break;

    case Taf.DataHelp.EN_INT16:
      this._binBuffer._position += 2;
      break;

    case Taf.DataHelp.EN_INT32:
      this._binBuffer._position += 4;
      break;

    case Taf.DataHelp.EN_INT64:
      this._binBuffer._position += 8;
      break;

    case Taf.DataHelp.EN_FLOAT:
      this._binBuffer._position += 4;
      break;

    case Taf.DataHelp.EN_DOUBLE:
      this._binBuffer._position += 8;
      break;

    case Taf.DataHelp.EN_STRING1:
      {
        var Length = this._binBuffer.readUInt8();

        this._binBuffer._position += Length;
        break;
      }

    case Taf.DataHelp.EN_STRING4:
      {
        var Length = this._binBuffer.readUInt32();

        this._binBuffer._position += Length;
        break;
      }

    case Taf.DataHelp.EN_STRUCTBEGIN:
      this._skipToStructEnd();

      break;

    case Taf.DataHelp.EN_STRUCTEND:
    case Taf.DataHelp.EN_ZERO:
      break;

    case Taf.DataHelp.EN_MAP:
      {
        var size = this.readInt32(0, true);

        for (var i = 0; i < size * 2; ++i) {
          var head = this._readFrom();

          this._skipField(head.type);
        }

        break;
      }

    case Taf.DataHelp.EN_SIMPLELIST:
      {
        var head = this._readFrom();

        if (head.type != Taf.DataHelp.EN_INT8) {
          throw new Taf.JceDecodeInvalidValue("skipField with invalid type, type value: " + type + "," + head.type);
        }

        var Length = this.readInt32(0, true);
        this._binBuffer._position += Length;
        break;
      }

    case Taf.DataHelp.EN_LIST:
      {
        var size = this.readInt32(0, true);

        for (var i = 0; i < size; ++i) {
          var head = this._readFrom();

          this._skipField(head.type);
        }

        break;
      }

    default:
      throw new Taf.JceDecodeInvalidValue("skipField with invalid type, type value: " + type);
  }
};

Taf.JceInputStream.prototype._skipToStructEnd = function () {
  for (;;) {
    var head = this._readFrom();

    this._skipField(head.type);

    if (head.type == Taf.DataHelp.EN_STRUCTEND) {
      return;
    }
  }
};

Taf.JceInputStream.prototype._skipToTag = function (tag, require) {
  while (this._binBuffer._position < this._binBuffer._length) {
    var head = this._peekFrom(); //\u8bb0\u5f55tag\u7684\u4f4d\u7f6e\uff0cstruct\u968f\u8bfb\u968f\u89e3\u7801


    if (this._tagPosMap) {
      this._tagPosMap[head.tag] = this._binBuffer._position;
      this._tagPosMap._current = this._binBuffer._position;
    }

    if (tag <= head.tag || head.type == Taf.DataHelp.EN_STRUCTEND) {
      if (head.type === Taf.DataHelp.EN_STRUCTEND ? false : tag === head.tag) {
        return true;
      }

      break;
    }

    this._binBuffer._position += head.size;

    this._skipField(head.type);
  }

  if (require) throw new Taf.JceDecodeRequireNotExist("require field not exist, tag:" + tag);
  return false;
};

Taf.JceInputStream.prototype.readBoolean = function (tag, require, DEFAULT_VALUE) {
  return this.readInt8(tag, require, DEFAULT_VALUE) == 1 ? true : false;
};

Taf.JceInputStream.prototype.readInt8 = function (tag, require, DEFAULT_VALUE) {
  if (this._skipToTag(tag, require) == false) {
    return DEFAULT_VALUE;
  }

  var head = this._readFrom();

  switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
      return 0;

    case Taf.DataHelp.EN_INT8:
      return this._binBuffer.readInt8();
  }

  throw new Taf.JceDecodeMismatch("read int8 type mismatch, tag:" + tag + ", get type:" + head.type);
};

Taf.JceInputStream.prototype.readInt16 = function (tag, require, DEFAULT_VALUE) {
  if (this._skipToTag(tag, require) == false) {
    return DEFAULT_VALUE;
  }

  var head = this._readFrom();

  switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
      return 0;

    case Taf.DataHelp.EN_INT8:
      return this._binBuffer.readInt8();

    case Taf.DataHelp.EN_INT16:
      return this._binBuffer.readInt16();
  }

  throw new Taf.JceDecodeMismatch("read int8 type mismatch, tag:" + tag + ", get type:" + head.type);
};

Taf.JceInputStream.prototype.readInt32 = function (tag, requrire, DEFAULT_VALUE) {
  if (this._skipToTag(tag, requrire) == false) {
    return DEFAULT_VALUE;
  }

  var head = this._readFrom();

  switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
      return 0;

    case Taf.DataHelp.EN_INT8:
      return this._binBuffer.readInt8();

    case Taf.DataHelp.EN_INT16:
      return this._binBuffer.readInt16();

    case Taf.DataHelp.EN_INT32:
      return this._binBuffer.readInt32();
  }

  throw new Taf.JceDecodeMismatch("read int8 type mismatch, tag:" + tag + ", get type:" + head.type);
};

Taf.JceInputStream.prototype.readInt64 = function (tag, require, DEFAULT_VALUE, bString) {
  if (this._skipToTag(tag, require) == false) {
    return DEFAULT_VALUE;
  }

  var head = this._readFrom();

  switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
      return 0;

    case Taf.DataHelp.EN_INT8:
      return this._binBuffer.readInt8();

    case Taf.DataHelp.EN_INT16:
      return this._binBuffer.readInt16();

    case Taf.DataHelp.EN_INT32:
      return this._binBuffer.readInt32();

    case Taf.DataHelp.EN_INT64:
      return this._binBuffer.readInt64(bString);
  }

  throw new Taf.JceDecodeMismatch("read int64 type mismatch, tag:" + tag + ", get type:" + head.type);
};

Taf.JceInputStream.prototype.readFloat = function (tag, require, DEFAULT_VALUE) {
  if (this._skipToTag(tag, require) == false) {
    return DEFAULT_VALUE;
  }

  var head = this._readFrom();

  switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
      return 0;

    case Taf.DataHelp.EN_FLOAT:
      return this._binBuffer.readFloat();
  }

  throw new Taf.JceDecodeMismatch("read float type mismatch, tag:" + tag + ", get type:" + head.type);
};

Taf.JceInputStream.prototype.readDouble = function (tag, require, DEFAULT_VALUE) {
  if (this._skipToTag(tag, require) == false) {
    return DEFAULT_VALUE;
  }

  var head = this._readFrom();

  switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
      return 0;

    case Taf.DataHelp.EN_DOUBLE:
      return this._binBuffer.readDouble();
  }

  throw new Taf.JceDecodeMismatch("read double type mismatch, tag:" + tag + ", get type:" + head.type);
};

Taf.JceInputStream.prototype.readUInt8 = function (tag, require, DEFAULT_VALUE) {
  return this.readInt16(tag, require, DEFAULT_VALUE);
};

Taf.JceInputStream.prototype.readUInt16 = function (tag, require, DEFAULT_VALUE) {
  return this.readInt32(tag, require, DEFAULT_VALUE);
};

Taf.JceInputStream.prototype.readUInt32 = function (tag, require, DEFAULT_VALUE) {
  return this.readInt64(tag, require, DEFAULT_VALUE);
};

Taf.JceInputStream.prototype.readString = function (tag, require, DEFAULT_VALUE, bRaw) {
  if (this._skipToTag(tag, require) == false) {
    return DEFAULT_VALUE;
  }

  var head = this._readFrom();

  if (head.type == Taf.DataHelp.EN_STRING1) {
    return this._binBuffer.readString(this._binBuffer.readUInt8(), bRaw);
  }

  if (head.type == Taf.DataHelp.EN_STRING4) {
    return this._binBuffer.readString(this._binBuffer.readUInt32(), bRaw);
  }

  throw new Taf.JceDecodeMismatch("read 'string' type mismatch, tag: " + tag + ", get type: " + head.type + ".");
};

Taf.JceInputStream.prototype.readStruct = function (tag, require, TYPE_T) {
  if (this._skipToTag(tag, require) == false) {
    return new TYPE_T();
  }

  var head = this._readFrom();

  if (head.type != Taf.DataHelp.EN_STRUCTBEGIN) {
    throw new Taf.JceDecodeMismatch("read struct type mismatch, tag: " + tag + ", get type:" + head.type);
  }

  var temp = TYPE_T._readFrom(this);

  this._skipToStructEnd();

  return temp;
};

Taf.JceInputStream.prototype.readBytes = function (tag, require, TYPE_T, bRaw) {
  if (this._skipToTag(tag, require) == false) {
    return new TYPE_T();
  }

  var head = this._readFrom();

  if (head.type == Taf.DataHelp.EN_SIMPLELIST) {
    var temp = this._readFrom();

    if (temp.type != Taf.DataHelp.EN_INT8) {
      throw new Taf.JceDecodeMismatch("type mismatch, tag:" + tag + ",type:" + head.type + "," + temp.type);
    }

    var size = this.readInt32(0, true);

    if (size < 0) {
      throw new Taf.JceDecodeInvalidValue("invalid size, tag:" + tag + ",type:" + head.type + "," + temp.type);
    }

    var bytes = this._binBuffer.readBinBuffer(size, bRaw);

    bytes.position = 0;
    return bytes;
  }

  throw new Taf.JceDecodeMismatch("type mismatch, tag:" + tag + ",type:" + head.type);
};

var readListDeprecateWarnning = util.deprecate(function () {}, "bRaw in readList is deprecated, use List(TafStream.String, bRaw) instead");

Taf.JceInputStream.prototype.readList = function (tag, require, TYPE_T, bRaw) {
  if (this._skipToTag(tag, require) == false) {
    return TYPE_T;
  }

  var head = this._readFrom();

  if (head.type != Taf.DataHelp.EN_LIST) {
    throw new Taf.JceDecodeMismatch("read 'vector' type mismatch, tag: " + tag + ", get type: " + head.type);
  }

  var size = this.readInt32(0, true);

  if (size < 0) {
    throw new Taf.JceDecodeInvalidValue("invalid size, tag: " + tag + ", type: " + head.type + ", size: " + size);
  } //3.0.21\u7248\u672c\u4e4b\u524d\u901a\u8fc7readList(xxx, true)\u6765\u8868\u793a\u5b57\u7b26\u4e32\u8f6cbuffer\uff0clong\u8f6cstring\u8868\u793a
  //3.0.21\u7248\u672c\u4e4b\u540e\u901a\u8fc7\u6784\u9020 List<T, bValue>\u6765\u8868\u793a\u662f\u5426\u8f6c\u6362\uff0c\u8fd9\u91cc\u4ee5\u540e\u8981\u5e9f\u5f03\u6389


  if (bRaw === true) {
    readListDeprecateWarnning();
  }

  var bValue = TYPE_T._bValue || bRaw;
  var TEMP = new Taf.List(TYPE_T._proto);

  for (var i = 0; i < size; ++i) {
    TEMP.value.push(TEMP._proto._read(this, 0, TEMP._proto, bValue));
  }

  return TEMP;
};

Taf.JceInputStream.prototype.readMap = function (tag, require, TYPE_T) {
  if (this._skipToTag(tag, require) == false) {
    return TYPE_T;
  }

  var head = this._readFrom();

  if (head.type != Taf.DataHelp.EN_MAP) {
    throw new Taf.JceDecodeMismatch("read 'map' type mismatch, tag: " + tag + ", get type: " + head.type);
  }

  var size = this.readInt32(0, true);

  if (size < 0) {
    throw new Taf.JceDecodeMismatch("invalid map, tag: " + tag + ", size: " + size);
  }

  var bKey = TYPE_T._bKey,
      bValue = TYPE_T._bValue;

  if (TYPE_T._kproto == Taf.String) {
    bKey = false;
  }

  var TEMP = new Taf.Map(TYPE_T._kproto, TYPE_T._vproto, bKey, bValue);

  for (var i = 0; i < size; i++) {
    var key = TEMP._kproto._read(this, 0, TEMP._kproto, bKey);

    var val = TEMP._vproto._read(this, 1, TEMP._vproto, bValue);

    TEMP.insert(key, val);
  }

  return TEMP;
};
/**
 * WUP\u5305\u88f9\u7c7b
 */


Taf.UniAttribute = function () {
  this._data = new Taf.Map(Taf.String, Taf.BinBuffer);
  this._mmap = new Taf.Map(Taf.String, Taf.Map(Taf.String, Taf.BinBuffer));
  this._buff = new Taf.JceOutputStream();
  this._temp = new Taf.JceInputStream(new Taf.BinBuffer());
  this._iver = Taf.UniAttribute.WUP_SIMPLE;

  this.__defineGetter__("wupVersion", function () {
    return this._iver;
  });

  this.__defineSetter__("wupVersion", function (value) {
    this._iver = value;
  });
};

Taf.UniAttribute.WUP_COMPLEX = 2;
Taf.UniAttribute.WUP_SIMPLE = 3;

Taf.UniAttribute.prototype._getkey = function (name, DEFAULT_VALUE, TYPE_T, FUNC, bValue) {
  if (this._iver == Taf.UniAttribute.WUP_SIMPLE) {
    var binBuffer = this._data.get(name);

    if (binBuffer == undefined && DEFAULT_VALUE == undefined) {
      throw new Taf.WupNotFoundKey("UniAttribute not found key:" + name);
    }

    if (binBuffer == undefined && DEFAULT_VALUE != undefined) {
      return DEFAULT_VALUE;
    }
  } else {
    var item = this._mmap.get(name);

    if (item == undefined && DEFAULT_VALUE == undefined) {
      throw new Taf.WupNotFoundKey("UniAttribute not found key:" + name);
    }

    if (item == undefined && DEFAULT_VALUE != undefined) {
      return DEFAULT_VALUE;
    }

    var binBuffer = item.get(TYPE_T._classname);

    if (binBuffer == undefined) {
      throw new Taf.WupNotFoundKey("UniAttribute type match fail,key:" + name + ",type:" + TYPE_T._classname);
    }
  }

  this._temp.setBinBuffer(binBuffer);

  return FUNC.call(this._temp, 0, true, TYPE_T, bValue);
};

Taf.UniAttribute.prototype._setkey = function (name, value, TYPE_T, FUNC, bValue) {
  this._buff._binBuffer.reset();

  FUNC.call(this._buff, 0, value, bValue);

  if (this._iver == Taf.UniAttribute.WUP_SIMPLE) {
    this._data.set(name, new Taf.BinBuffer(this._buff.getBinBuffer().toNodeBuffer()));
  } else {
    var temp = new Taf.Map(Taf.String, Taf.BinBuffer);
    temp.set(TYPE_T._classname, new Taf.BinBuffer(this._buff.getBinBuffer().toNodeBuffer()));

    this._mmap.set(name, temp);
  }
};

Taf.UniAttribute.prototype.decode = function (binBuffer) {
  var is = new Taf.JceInputStream(binBuffer);

  if (this._iver == Taf.UniAttribute.WUP_SIMPLE) {
    this._data.clear();

    this._data = is.readMap(0, true, Taf.Map(Taf.String, Taf.BinBuffer));
  } else {
    this._mmap.clear();

    this._mmap = is.readMap(0, true, Taf.Map(Taf.String, Taf.Map(Taf.String, Taf.BinBuffer)));
  }
};

Taf.UniAttribute.prototype.encode = function () {
  var os = new Taf.JceOutputStream();
  os.writeMap(0, this._iver == Taf.UniAttribute.WUP_SIMPLE ? this._data : this._mmap);
  return os.getBinBuffer();
};

Taf.UniAttribute.prototype.writeBoolean = function (name, value) {
  this._setkey(name, value, Taf.Boolean, this._buff.writeBoolean);
};

Taf.UniAttribute.prototype.writeInt8 = function (name, value) {
  this._setkey(name, value, Taf.Int8, this._buff.writeInt8);
};

Taf.UniAttribute.prototype.writeUInt8 = function (name, value) {
  this._setkey(name, value, Taf.UInt8, this._buff.writeUInt8);
};

Taf.UniAttribute.prototype.writeInt16 = function (name, value) {
  this._setkey(name, value, Taf.Int16, this._buff.writeInt16);
};

Taf.UniAttribute.prototype.writeUInt16 = function (name, value) {
  this._setkey(name, value, Taf.UInt16, this._buff.writeUInt16);
};

Taf.UniAttribute.prototype.writeInt32 = function (name, value) {
  this._setkey(name, value, Taf.Int32, this._buff.writeInt32);
};

Taf.UniAttribute.prototype.writeUInt32 = function (name, value) {
  this._setkey(name, value, Taf.UInt32, this._buff.writeUInt32);
};

Taf.UniAttribute.prototype.writeInt64 = function (name, value, bValue) {
  this._setkey(name, value, Taf.Int64, this._buff.writeInt64, bValue);
};

Taf.UniAttribute.prototype.writeFloat = function (name, value) {
  this._setkey(name, value, Taf.Float, this._buff.writeFloat);
};

Taf.UniAttribute.prototype.writeDouble = function (name, value) {
  this._setkey(name, value, Taf.Double, this._buff.writeDouble);
};

Taf.UniAttribute.prototype.writeBytes = function (name, value) {
  this._setkey(name, value, Taf.BinBuffer, this._buff.writeBytes);
};

Taf.UniAttribute.prototype.writeString = function (name, value, bValue) {
  this._setkey(name, value, Taf.String, this._buff.writeString, bValue);
};

Taf.UniAttribute.prototype.writeStruct = function (name, value) {
  this._setkey(name, value, value, this._buff.writeStruct);
};

Taf.UniAttribute.prototype.writeList = function (name, value) {
  this._setkey(name, value, value, this._buff.writeList);
};

Taf.UniAttribute.prototype.writeMap = function (name, value) {
  this._setkey(name, value, value, this._buff.writeMap);
};

Taf.UniAttribute.prototype.readBoolean = function (name, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, Taf.Boolean, this._temp.readBoolean);
};

Taf.UniAttribute.prototype.readInt8 = function (name, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, Taf.Int8, this._temp.readInt8);
};

Taf.UniAttribute.prototype.readUInt8 = function (name, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, Taf.UInt8, this._temp.readUInt8);
};

Taf.UniAttribute.prototype.readInt16 = function (name, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, Taf.Int16, this._temp.readInt16);
};

Taf.UniAttribute.prototype.readUInt16 = function (name, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, Taf.UInt16, this._temp.readUInt16);
};

Taf.UniAttribute.prototype.readInt32 = function (name, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, Taf.Int32, this._temp.readInt32);
};

Taf.UniAttribute.prototype.readUInt32 = function (name, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, Taf.UInt32, this._temp.readUInt32);
};

Taf.UniAttribute.prototype.readInt64 = function (name, DEFAULT_VALUE, bValue) {
  return this._getkey(name, DEFAULT_VALUE, Taf.Int64, this._temp.readInt64, bValue);
};

Taf.UniAttribute.prototype.readFloat = function (name, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, Taf.Float, this._temp.readFloat);
};

Taf.UniAttribute.prototype.readDouble = function (name, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, Taf.Double, this._temp.readDouble);
};

Taf.UniAttribute.prototype.readBytes = function (name, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, Taf.BinBuffer, this._temp.readBytes);
};

Taf.UniAttribute.prototype.readString = function (name, DEFAULT_VALUE, bValue) {
  return this._getkey(name, DEFAULT_VALUE, Taf.String, this._temp.readString, bValue);
};

Taf.UniAttribute.prototype.readStruct = function (name, TYPE_T, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, TYPE_T, this._temp.readStruct);
};

Taf.UniAttribute.prototype.readList = function (name, TYPE_T, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, TYPE_T, this._temp.readList);
};

Taf.UniAttribute.prototype.readMap = function (name, TYPE_T, DEFAULT_VALUE) {
  return this._getkey(name, DEFAULT_VALUE, TYPE_T, this._temp.readMap);
};

Taf.Wup = function () {
  this._iVersion = 0;
  this._cPacketType = 0;
  this._iMessageType = 0;
  this._iRequestId = 0;
  this._sServantName = '';
  this._sFuncName = '';
  this._binBuffer = new Taf.BinBuffer();
  this._iTimeout = 0;
  this._context = new Taf.Map(Taf.String, Taf.String);
  this._status = new Taf.Map(Taf.String, Taf.String);
  this._attribute = new Taf.UniAttribute();

  this.__defineGetter__("servantName", function () {
    return this._sServantName;
  });

  this.__defineSetter__("servantName", function (value) {
    this._sServantName = value;
  });

  this.__defineGetter__("funcName", function () {
    return this._sFuncName;
  });

  this.__defineSetter__("funcName", function (value) {
    this._sFuncName = value;
  });

  this.__defineGetter__("requestId", function () {
    return this._iRequestId;
  });

  this.__defineSetter__("requestId", function (value) {
    this._iRequestId = value;
  });

  this.__defineGetter__("wupVersion", function () {
    return this._attribute.wupVersion;
  });

  this.__defineSetter__("wupVersion", function (value) {
    this._attribute.wupVersion = value;
  });
};

Taf.Wup.WUP_COMPLEX = Taf.UniAttribute.WUP_COMPLEX; //\u590d\u6742WUP\u534f\u8bae

Taf.Wup.WUP_SIMPLE = Taf.UniAttribute.WUP_SIMPLE; //\u7cbe\u7b80WUP\u534f\u8bae

Taf.Wup.prototype._writeTo = function () {
  var os = new Taf.JceOutputStream();

  os._binBuffer.writeInt32(0);

  os.writeInt16(1, this._attribute.wupVersion);
  os.writeInt8(2, this._cPacketType);
  os.writeInt32(3, this._iMessageType);
  os.writeInt32(4, this._iRequestId);
  os.writeString(5, this._sServantName);
  os.writeString(6, this._sFuncName);
  os.writeBytes(7, this._binBuffer);
  os.writeInt32(8, this._iTimeout);
  os.writeMap(9, this._context);
  os.writeMap(10, this._status);
  var pos = os._binBuffer._position;
  var len = os._binBuffer._length;
  os._binBuffer._position = 0;

  os._binBuffer.writeInt32(os._binBuffer._length);

  os._binBuffer._length = len;
  os._binBuffer._position = pos;
  return os.getBinBuffer();
};

Taf.Wup.prototype._readFrom = function (is) {
  this._iVersion = is.readInt16(1, true);
  this._cPacketType = is.readInt8(2, true);
  this._iMessageType = is.readInt32(3, true);
  this._iRequestId = is.readInt32(4, true);
  this._sServantName = is.readString(5, true);
  this._sFuncName = is.readString(6, true);
  this._binBuffer = is.readBytes(7, true);
  this._iTimeout = is.readInt32(8, true);
  this._context = is.readMap(9, false, Taf.Map(Taf.String, Taf.String));
  this._status = is.readMap(10, false, Taf.Map(Taf.String, Taf.String));
  this._attribute.wupVersion = this._iVersion;
};

Taf.Wup.prototype.encode = function () {
  this._binBuffer = this._attribute.encode();
  return this._writeTo();
};

Taf.Wup.prototype.decode = function (binBuffer) {
  var is = new Taf.JceInputStream(binBuffer);

  var len = is._binBuffer.readInt32();

  if (len < 4) {
    throw Error("packet length too short");
  }

  this._readFrom(is);

  this._attribute.decode(this._binBuffer);
};

Taf.Wup.prototype.getTafResultCode = function () {
  var code = this._status.get("STATUS_RESULT_CODE");

  return code === undefined ? 0 : parseInt(code);
};

Taf.Wup.prototype.getTafResultDesc = function () {
  var desc = this._status.get("STATUS_RESULT_DESC");

  return desc === undefined ? "" : desc;
};

Taf.Wup.prototype.writeBoolean = function (name, value) {
  this._attribute.writeBoolean(name, value);
};

Taf.Wup.prototype.writeInt8 = function (name, value) {
  this._attribute.writeInt8(name, value);
};

Taf.Wup.prototype.writeUInt8 = function (name, value) {
  this._attribute.writeUInt8(name, value);
};

Taf.Wup.prototype.writeInt16 = function (name, value) {
  this._attribute.writeInt16(name, value);
};

Taf.Wup.prototype.writeUInt16 = function (name, value) {
  this._attribute.writeUInt16(name, value);
};

Taf.Wup.prototype.writeInt32 = function (name, value) {
  this._attribute.writeInt32(name, value);
};

Taf.Wup.prototype.writeUInt32 = function (name, value) {
  this._attribute.writeUInt32(name, value);
};

Taf.Wup.prototype.writeInt64 = function (name, value, bValue) {
  this._attribute.writeInt64(name, value, bValue);
};

Taf.Wup.prototype.writeFloat = function (name, value) {
  this._attribute.writeFloat(name, value);
};

Taf.Wup.prototype.writeDouble = function (name, value) {
  this._attribute.writeDouble(name, value);
};

Taf.Wup.prototype.writeBytes = function (name, value) {
  this._attribute.writeBytes(name, value);
};

Taf.Wup.prototype.writeString = function (name, value, bValue) {
  this._attribute.writeString(name, value, bValue);
};

Taf.Wup.prototype.writeStruct = function (name, value) {
  this._attribute.writeStruct(name, value);
};

Taf.Wup.prototype.writeList = function (name, value) {
  this._attribute.writeList(name, value);
};

Taf.Wup.prototype.writeMap = function (name, value) {
  this._attribute.writeMap(name, value);
};

Taf.Wup.prototype.readBoolean = function (name, DEFAULT_VALUE) {
  return this._attribute.readBoolean(name, DEFAULT_VALUE);
};

Taf.Wup.prototype.readInt8 = function (name, DEFAULT_VALUE) {
  return this._attribute.readInt8(name, DEFAULT_VALUE);
};

Taf.Wup.prototype.readUInt8 = function (name, DEFAULT_VALUE) {
  return this._attribute.readUInt8(name, DEFAULT_VALUE);
};

Taf.Wup.prototype.readInt16 = function (name, DEFAULT_VALUE) {
  return this._attribute.readInt16(name, DEFAULT_VALUE);
};

Taf.Wup.prototype.readUInt16 = function (name, DEFAULT_VALUE) {
  return this._attribute.readUInt16(name, DEFAULT_VALUE);
};

Taf.Wup.prototype.readInt32 = function (name, DEFAULT_VALUE) {
  return this._attribute.readInt32(name, DEFAULT_VALUE);
};

Taf.Wup.prototype.readUInt32 = function (name, DEFAULT_VALUE) {
  return this._attribute.readUInt32(name, DEFAULT_VALUE);
};

Taf.Wup.prototype.readInt64 = function (name, DEFAULT_VALUE, bValue) {
  return this._attribute.readInt64(name, DEFAULT_VALUE, bValue);
};

Taf.Wup.prototype.readFloat = function (name, DEFAULT_VALUE) {
  return this._attribute.readFloat(name, DEFAULT_VALUE);
};

Taf.Wup.prototype.readDouble = function (name, DEFAULT_VALUE) {
  return this._attribute.readDouble(name, DEFAULT_VALUE);
};

Taf.Wup.prototype.readBytes = function (name, DEFAULT_VALUE) {
  return this._attribute.readBytes(name, DEFAULT_VALUE);
};

Taf.Wup.prototype.readString = function (name, DEFAULT_VALUE, bValue) {
  return this._attribute.readString(name, DEFAULT_VALUE, bValue);
};

Taf.Wup.prototype.readStruct = function (name, TYPE_T, DEFAULT_VALUE) {
  return this._attribute.readStruct(name, TYPE_T, DEFAULT_VALUE);
};

Taf.Wup.prototype.readList = function (name, TYPE_T, DEFAULT_VALUE) {
  return this._attribute.readList(name, TYPE_T, DEFAULT_VALUE);
};

Taf.Wup.prototype.readMap = function (name, TYPE_T, DEFAULT_VALUE) {
  return this._attribute.readMap(name, TYPE_T, DEFAULT_VALUE);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/assert/assert.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__("./node_modules/object-assign/index.js"); // compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */


function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }

  if (y < x) {
    return 1;
  }

  return 0;
}

function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }

  return !!(b != null && b._isBuffer);
} // based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var util = __webpack_require__("./node_modules/util/util.js");

var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;

var functionsHaveNames = function () {
  return function foo() {}.name === 'foo';
}();

function pToString(obj) {
  return Object.prototype.toString.call(obj);
}

function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }

  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }

  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }

  if (!arrbuf) {
    return false;
  }

  if (arrbuf instanceof DataView) {
    return true;
  }

  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }

  return false;
} // 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.


var assert = module.exports = ok; // 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/; // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js

function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }

  if (functionsHaveNames) {
    return func.name;
  }

  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;

  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }

  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();

    if (err.stack) {
      var out = err.stack; // try to strip useless frames

      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);

      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
}; // assert.AssertionError instanceof Error


util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }

  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' + name + ']';
}

function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
} // At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.
// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.


function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
} // EXTENSION! allows for well behaved errors defined elsewhere.


assert.fail = fail; // 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}

assert.ok = ok; // 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
}; // 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);


assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
}; // 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);


assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0; // 7.2. If the expected value is a Date object, the actual value is
    // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime(); // 7.3 If the expected value is a RegExp object, the actual value is
    // equivalent if it is also a RegExp object with the same source and
    // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase; // 7.4. Other pairs that do not both pass typeof value == 'object',
    // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') && (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected; // If both values are instances of typed arrays, wrap their underlying
    // ArrayBuffers in a Buffer each to increase performance
    // This optimization requires the arrays to have the same type as checked by
    // Object.prototype.toString (aka pToString). Never perform binary
    // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
    // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0; // 7.5 For all other Object pairs, including Array objects, equivalence is
    // determined by having the same number of owned properties (as verified
    // with Object.prototype.hasOwnProperty.call), the same set of keys
    // (although not necessarily the same order), equivalent values for every
    // corresponding key, and an identical 'prototype' property. Note: this
    // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {
      actual: [],
      expected: []
    };
    var actualIndex = memos.actual.indexOf(actual);

    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);
    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined) return false; // if one is a primitive, the other must be same

  if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;

  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }

  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i; // having the same number of owned properties (keys incorporates
  // hasOwnProperty)

  if (ka.length !== kb.length) return false; //the same set of keys (although not necessarily the same order),

  ka.sort();
  kb.sort(); //~~~cheap key test

  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i]) return false;
  } //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test


  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
  }

  return true;
} // 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);


assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;

function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
} // 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);


assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
}; // 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);


assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {// Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;

  try {
    block();
  } catch (e) {
    error = e;
  }

  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);
  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
    throw actual;
  }
} // 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);


assert.throws = function (block,
/*optional*/
error,
/*optional*/
message) {
  _throws(true, block, error, message);
}; // EXTENSION! This is annoying to write outside this module.


assert.doesNotThrow = function (block,
/*optional*/
error,
/*optional*/
message) {
  _throws(false, block, error, message);
};

assert.ifError = function (err) {
  if (err) throw err;
}; // Expose a strict only variant of assert


function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}

assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }

  return keys;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "./node_modules/big.js/big.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  big.js v5.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
 *  https://github.com/MikeMcl/big.js/LICENCE
 */
;

(function (GLOBAL) {
  'use strict';

  var Big,

  /************************************** EDITABLE DEFAULTS *****************************************/
  // The default values below must be integers within the stated ranges.

  /*
   * The maximum number of decimal places (DP) of the results of operations involving division:
   * div and sqrt, and pow with negative exponents.
   */
  DP = 20,
      // 0 to MAX_DP

  /*
   * The rounding mode (RM) used when rounding to the above decimal places.
   *
   *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
   *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
   *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
   *  3  Away from zero.                                  (ROUND_UP)
   */
  RM = 1,
      // 0, 1, 2 or 3
  // The maximum value of DP and Big.DP.
  MAX_DP = 1E6,
      // 0 to 1000000
  // The maximum magnitude of the exponent argument to the pow method.
  MAX_POWER = 1E6,
      // 1 to 1000000

  /*
   * The negative exponent (NE) at and beneath which toString returns exponential notation.
   * (JavaScript numbers: -7)
   * -1000000 is the minimum recommended exponent value of a Big.
   */
  NE = -7,
      // 0 to -1000000

  /*
   * The positive exponent (PE) at and above which toString returns exponential notation.
   * (JavaScript numbers: 21)
   * 1000000 is the maximum recommended exponent value of a Big.
   * (This limit is not enforced or checked.)
   */
  PE = 21,
      // 0 to 1000000

  /**************************************************************************************************/
  // Error messages.
  NAME = '[big.js] ',
      INVALID = NAME + 'Invalid ',
      INVALID_DP = INVALID + 'decimal places',
      INVALID_RM = INVALID + 'rounding mode',
      DIV_BY_ZERO = NAME + 'Division by zero',
      // The shared prototype object.
  P = {},
      UNDEFINED = void 0,
      NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  /*
   * Create and return a Big constructor.
   *
   */

  function _Big_() {
    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */
    function Big(n) {
      var x = this; // Enable constructor usage without new.

      if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n); // Duplicate.

      if (n instanceof Big) {
        x.s = n.s;
        x.e = n.e;
        x.c = n.c.slice();
      } else {
        parse(x, n);
      }
      /*
       * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
       * points to Object.
       */


      x.constructor = Big;
    }

    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.version = '5.2.2';
    return Big;
  }
  /*
   * Parse the number or string value passed to a Big constructor.
   *
   * x {Big} A Big number instance.
   * n {number|string} A numeric value.
   */


  function parse(x, n) {
    var e, i, nl; // Minus zero?

    if (n === 0 && 1 / n < 0) n = '-0';else if (!NUMERIC.test(n += '')) throw Error(INVALID + 'number'); // Determine sign.

    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1; // Decimal point?

    if ((e = n.indexOf('.')) > -1) n = n.replace('.', ''); // Exponential form?

    if ((i = n.search(/e/i)) > 0) {
      // Determine exponent.
      if (e < 0) e = i;
      e += +n.slice(i + 1);
      n = n.substring(0, i);
    } else if (e < 0) {
      // Integer.
      e = n.length;
    }

    nl = n.length; // Determine leading zeros.

    for (i = 0; i < nl && n.charAt(i) == '0';) ++i;

    if (i == nl) {
      // Zero.
      x.c = [x.e = 0];
    } else {
      // Determine trailing zeros.
      for (; nl > 0 && n.charAt(--nl) == '0';);

      x.e = e - i - 1;
      x.c = []; // Convert string to array of digits without leading/trailing zeros.

      for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }

    return x;
  }
  /*
   * Round Big x to a maximum of dp decimal places using rounding mode rm.
   * Called by stringify, P.div, P.round and P.sqrt.
   *
   * x {Big} The Big to round.
   * dp {number} Integer, 0 to MAX_DP inclusive.
   * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
   * [more] {boolean} Whether the result of division was truncated.
   */


  function round(x, dp, rm, more) {
    var xc = x.c,
        i = x.e + dp + 1;

    if (i < xc.length) {
      if (rm === 1) {
        // xc[i] is the digit after the digit that may be rounded up.
        more = xc[i] >= 5;
      } else if (rm === 2) {
        more = xc[i] > 5 || xc[i] == 5 && (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
      } else if (rm === 3) {
        more = more || !!xc[0];
      } else {
        more = false;
        if (rm !== 0) throw Error(INVALID_RM);
      }

      if (i < 1) {
        xc.length = 1;

        if (more) {
          // 1, 0.1, 0.01, 0.001, 0.0001 etc.
          x.e = -dp;
          xc[0] = 1;
        } else {
          // Zero.
          xc[0] = x.e = 0;
        }
      } else {
        // Remove any digits after the required decimal places.
        xc.length = i--; // Round up?

        if (more) {
          // Rounding up may mean the previous digit has to be rounded up.
          for (; ++xc[i] > 9;) {
            xc[i] = 0;

            if (!i--) {
              ++x.e;
              xc.unshift(1);
            }
          }
        } // Remove trailing zeros.


        for (i = xc.length; !xc[--i];) xc.pop();
      }
    } else if (rm < 0 || rm > 3 || rm !== ~~rm) {
      throw Error(INVALID_RM);
    }

    return x;
  }
  /*
   * Return a string representing the value of Big x in normal or exponential notation.
   * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
   *
   * x {Big}
   * id? {number} Caller id.
   *         1 toExponential
   *         2 toFixed
   *         3 toPrecision
   *         4 valueOf
   * n? {number|undefined} Caller's argument.
   * k? {number|undefined}
   */


  function stringify(x, id, n, k) {
    var e,
        s,
        Big = x.constructor,
        z = !x.c[0];

    if (n !== UNDEFINED) {
      if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
        throw Error(id == 3 ? INVALID + 'precision' : INVALID_DP);
      }

      x = new Big(x); // The index of the digit that may be rounded up.

      n = k - x.e; // Round?

      if (x.c.length > ++k) round(x, n, Big.RM); // toFixed: recalculate k as x.e may have changed if value rounded up.

      if (id == 2) k = x.e + n + 1; // Append zeros?

      for (; x.c.length < k;) x.c.push(0);
    }

    e = x.e;
    s = x.c.join('');
    n = s.length; // Exponential notation?

    if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big.NE || e >= Big.PE)) {
      s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e; // Normal notation.
    } else if (e < 0) {
      for (; ++e;) s = '0' + s;

      s = '0.' + s;
    } else if (e > 0) {
      if (++e > n) for (e -= n; e--;) s += '0';else if (e < n) s = s.slice(0, e) + '.' + s.slice(e);
    } else if (n > 1) {
      s = s.charAt(0) + '.' + s.slice(1);
    }

    return x.s < 0 && (!z || id == 4) ? '-' + s : s;
  } // Prototype/instance methods

  /*
   * Return a new Big whose value is the absolute value of this Big.
   */


  P.abs = function () {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
  };
  /*
   * Return 1 if the value of this Big is greater than the value of Big y,
   *       -1 if the value of this Big is less than the value of Big y, or
   *        0 if they have the same value.
  */


  P.cmp = function (y) {
    var isneg,
        x = this,
        xc = x.c,
        yc = (y = new x.constructor(y)).c,
        i = x.s,
        j = y.s,
        k = x.e,
        l = y.e; // Either zero?

    if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i; // Signs differ?

    if (i != j) return i;
    isneg = i < 0; // Compare exponents.

    if (k != l) return k > l ^ isneg ? 1 : -1;
    j = (k = xc.length) < (l = yc.length) ? k : l; // Compare digit by digit.

    for (i = -1; ++i < j;) {
      if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    } // Compare lengths.


    return k == l ? 0 : k > l ^ isneg ? 1 : -1;
  };
  /*
   * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
   * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */


  P.div = function (y) {
    var x = this,
        Big = x.constructor,
        a = x.c,
        // dividend
    b = (y = new Big(y)).c,
        // divisor
    k = x.s == y.s ? 1 : -1,
        dp = Big.DP;
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP); // Divisor is zero?

    if (!b[0]) throw Error(DIV_BY_ZERO); // Dividend is 0? Return +-0.

    if (!a[0]) return new Big(k * 0);
    var bl,
        bt,
        n,
        cmp,
        ri,
        bz = b.slice(),
        ai = bl = b.length,
        al = a.length,
        r = a.slice(0, bl),
        // remainder
    rl = r.length,
        q = y,
        // quotient
    qc = q.c = [],
        qi = 0,
        d = dp + (q.e = x.e - y.e) + 1; // number of digits of the result

    q.s = k;
    k = d < 0 ? 0 : d; // Create version of divisor with leading zero.

    bz.unshift(0); // Add zeros to make remainder as long as divisor.

    for (; rl++ < bl;) r.push(0);

    do {
      // n is how many times the divisor goes into current remainder.
      for (n = 0; n < 10; n++) {
        // Compare divisor and remainder.
        if (bl != (rl = r.length)) {
          cmp = bl > rl ? 1 : -1;
        } else {
          for (ri = -1, cmp = 0; ++ri < bl;) {
            if (b[ri] != r[ri]) {
              cmp = b[ri] > r[ri] ? 1 : -1;
              break;
            }
          }
        } // If divisor < remainder, subtract divisor from remainder.


        if (cmp < 0) {
          // Remainder can't be more than 1 digit longer than divisor.
          // Equalise lengths using divisor with extra leading zero?
          for (bt = rl == bl ? b : bz; rl;) {
            if (r[--rl] < bt[rl]) {
              ri = rl;

              for (; ri && !r[--ri];) r[ri] = 9;

              --r[ri];
              r[rl] += 10;
            }

            r[rl] -= bt[rl];
          }

          for (; !r[0];) r.shift();
        } else {
          break;
        }
      } // Add the digit n to the result array.


      qc[qi++] = cmp ? n : ++n; // Update the remainder.

      if (r[0] && cmp) r[rl] = a[ai] || 0;else r = [a[ai]];
    } while ((ai++ < al || r[0] !== UNDEFINED) && k--); // Leading zero? Do not remove if result is simply zero (qi == 1).


    if (!qc[0] && qi != 1) {
      // There can't be more than one zero.
      qc.shift();
      q.e--;
    } // Round?


    if (qi > d) round(q, dp, Big.RM, r[0] !== UNDEFINED);
    return q;
  };
  /*
   * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
   */


  P.eq = function (y) {
    return !this.cmp(y);
  };
  /*
   * Return true if the value of this Big is greater than the value of Big y, otherwise return
   * false.
   */


  P.gt = function (y) {
    return this.cmp(y) > 0;
  };
  /*
   * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
   * return false.
   */


  P.gte = function (y) {
    return this.cmp(y) > -1;
  };
  /*
   * Return true if the value of this Big is less than the value of Big y, otherwise return false.
   */


  P.lt = function (y) {
    return this.cmp(y) < 0;
  };
  /*
   * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
   * return false.
   */


  P.lte = function (y) {
    return this.cmp(y) < 1;
  };
  /*
   * Return a new Big whose value is the value of this Big minus the value of Big y.
   */


  P.minus = P.sub = function (y) {
    var i,
        j,
        t,
        xlty,
        x = this,
        Big = x.constructor,
        a = x.s,
        b = (y = new Big(y)).s; // Signs differ?

    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }

    var xc = x.c.slice(),
        xe = x.e,
        yc = y.c,
        ye = y.e; // Either zero?

    if (!xc[0] || !yc[0]) {
      // y is non-zero? x is non-zero? Or both are zero.
      return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
    } // Determine which is the bigger number. Prepend zeros to equalise exponents.


    if (a = xe - ye) {
      if (xlty = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }

      t.reverse();

      for (b = a; b--;) t.push(0);

      t.reverse();
    } else {
      // Exponents equal. Check digit by digit.
      j = ((xlty = xc.length < yc.length) ? xc : yc).length;

      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xlty = xc[b] < yc[b];
          break;
        }
      }
    } // x < y? Point xc to the array of the bigger number.


    if (xlty) {
      t = xc;
      xc = yc;
      yc = t;
      y.s = -y.s;
    }
    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */


    if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0; // Subtract yc from xc.

    for (b = i; j > a;) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i];) xc[i] = 9;

        --xc[i];
        xc[j] += 10;
      }

      xc[j] -= yc[j];
    } // Remove trailing zeros.


    for (; xc[--b] === 0;) xc.pop(); // Remove leading zeros and adjust exponent accordingly.


    for (; xc[0] === 0;) {
      xc.shift();
      --ye;
    }

    if (!xc[0]) {
      // n - n = +0
      y.s = 1; // Result must be zero.

      xc = [ye = 0];
    }

    y.c = xc;
    y.e = ye;
    return y;
  };
  /*
   * Return a new Big whose value is the value of this Big modulo the value of Big y.
   */


  P.mod = function (y) {
    var ygtx,
        x = this,
        Big = x.constructor,
        a = x.s,
        b = (y = new Big(y)).s;
    if (!y.c[0]) throw Error(DIV_BY_ZERO);
    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;
    if (ygtx) return new Big(x);
    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;
    return this.minus(x.times(y));
  };
  /*
   * Return a new Big whose value is the value of this Big plus the value of Big y.
   */


  P.plus = P.add = function (y) {
    var t,
        x = this,
        Big = x.constructor,
        a = x.s,
        b = (y = new Big(y)).s; // Signs differ?

    if (a != b) {
      y.s = -b;
      return x.minus(y);
    }

    var xe = x.e,
        xc = x.c,
        ye = y.e,
        yc = y.c; // Either zero? y is non-zero? x is non-zero? Or both are zero.

    if (!xc[0] || !yc[0]) return yc[0] ? y : new Big(xc[0] ? x : a * 0);
    xc = xc.slice(); // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.

    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }

      t.reverse();

      for (; a--;) t.push(0);

      t.reverse();
    } // Point xc to the longer array.


    if (xc.length - yc.length < 0) {
      t = yc;
      yc = xc;
      xc = t;
    }

    a = yc.length; // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.

    for (b = 0; a; xc[a] %= 10) b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0; // No need to check for zero, as +x + +y != 0 && -x + -y != 0


    if (b) {
      xc.unshift(b);
      ++ye;
    } // Remove trailing zeros.


    for (a = xc.length; xc[--a] === 0;) xc.pop();

    y.c = xc;
    y.e = ye;
    return y;
  };
  /*
   * Return a Big whose value is the value of this Big raised to the power n.
   * If n is negative, round to a maximum of Big.DP decimal places using rounding
   * mode Big.RM.
   *
   * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
   */


  P.pow = function (n) {
    var x = this,
        one = new x.constructor(1),
        y = one,
        isneg = n < 0;
    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) throw Error(INVALID + 'exponent');
    if (isneg) n = -n;

    for (;;) {
      if (n & 1) y = y.times(x);
      n >>= 1;
      if (!n) break;
      x = x.times(x);
    }

    return isneg ? one.div(y) : y;
  };
  /*
   * Return a new Big whose value is the value of this Big rounded using rounding mode rm
   * to a maximum of dp decimal places, or, if dp is negative, to an integer which is a
   * multiple of 10**-dp.
   * If dp is not specified, round to 0 decimal places.
   * If rm is not specified, use Big.RM.
   *
   * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
   * rm? 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
   */


  P.round = function (dp, rm) {
    var Big = this.constructor;
    if (dp === UNDEFINED) dp = 0;else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) throw Error(INVALID_DP);
    return round(new Big(this), dp, rm === UNDEFINED ? Big.RM : rm);
  };
  /*
   * Return a new Big whose value is the square root of the value of this Big, rounded, if
   * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */


  P.sqrt = function () {
    var r,
        c,
        t,
        x = this,
        Big = x.constructor,
        s = x.s,
        e = x.e,
        half = new Big(0.5); // Zero?

    if (!x.c[0]) return new Big(x); // Negative?

    if (s < 0) throw Error(NAME + 'No square root'); // Estimate.

    s = Math.sqrt(x + ''); // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.

    if (s === 0 || s === 1 / 0) {
      c = x.c.join('');
      if (!(c.length + e & 1)) c += '0';
      s = Math.sqrt(c);
      e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
      r = new Big((s == 1 / 0 ? '1e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    } else {
      r = new Big(s);
    }

    e = r.e + (Big.DP += 4); // Newton-Raphson iteration.

    do {
      t = r;
      r = half.times(t.plus(x.div(t)));
    } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));

    return round(r, Big.DP -= 4, Big.RM);
  };
  /*
   * Return a new Big whose value is the value of this Big times the value of Big y.
   */


  P.times = P.mul = function (y) {
    var c,
        x = this,
        Big = x.constructor,
        xc = x.c,
        yc = (y = new Big(y)).c,
        a = xc.length,
        b = yc.length,
        i = x.e,
        j = y.e; // Determine sign of result.

    y.s = x.s == y.s ? 1 : -1; // Return signed 0 if either 0.

    if (!xc[0] || !yc[0]) return new Big(y.s * 0); // Initialise exponent of result as x.e + y.e.

    y.e = i + j; // If array xc has fewer digits than yc, swap xc and yc, and lengths.

    if (a < b) {
      c = xc;
      xc = yc;
      yc = c;
      j = a;
      a = b;
      b = j;
    } // Initialise coefficient array of result with zeros.


    for (c = new Array(j = a + b); j--;) c[j] = 0; // Multiply.
    // i is initially xc.length.


    for (i = b; i--;) {
      b = 0; // a is yc.length.

      for (j = a + i; j > i;) {
        // Current sum of products at this digit position, plus carry.
        b = c[j] + yc[i] * xc[j - i - 1] + b;
        c[j--] = b % 10; // carry

        b = b / 10 | 0;
      }

      c[j] = (c[j] + b) % 10;
    } // Increment result exponent if there is a final carry, otherwise remove leading zero.


    if (b) ++y.e;else c.shift(); // Remove trailing zeros.

    for (i = c.length; !c[--i];) c.pop();

    y.c = c;
    return y;
  };
  /*
   * Return a string representing the value of this Big in exponential notation to dp fixed decimal
   * places and rounded using Big.RM.
   *
   * dp? {number} Integer, 0 to MAX_DP inclusive.
   */


  P.toExponential = function (dp) {
    return stringify(this, 1, dp, dp);
  };
  /*
   * Return a string representing the value of this Big in normal notation to dp fixed decimal
   * places and rounded using Big.RM.
   *
   * dp? {number} Integer, 0 to MAX_DP inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   */


  P.toFixed = function (dp) {
    return stringify(this, 2, dp, this.e + dp);
  };
  /*
   * Return a string representing the value of this Big rounded to sd significant digits using
   * Big.RM. Use exponential notation if sd is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * sd {number} Integer, 1 to MAX_DP inclusive.
   */


  P.toPrecision = function (sd) {
    return stringify(this, 3, sd, sd - 1);
  };
  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Omit the sign for negative zero.
   */


  P.toString = function () {
    return stringify(this);
  };
  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Include the sign for negative zero.
   */


  P.valueOf = P.toJSON = function () {
    return stringify(this, 4);
  }; // Export


  Big = _Big_();
  Big['default'] = Big.Big = Big; //AMD.

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Big;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Node and other CommonJS-like environments that support module.exports.
  } else {}
})(this);

/***/ }),

/***/ "./node_modules/buffer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__("./node_modules/base64-js/index.js");

var ieee754 = __webpack_require__("./node_modules/ieee754/index.js");

var isArray = __webpack_require__("./node_modules/isarray/index.js");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function () {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

/***/ }),

/***/ "./node_modules/isarray/index.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler.production.min.js":
/***/ (function(module, exports, __webpack_require__) {

/** @license React v0.21.0
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
  'use strict';

  var aa = __webpack_require__("./node_modules/object-assign/index.js"),
      ba = __webpack_require__("./node_modules/react/index.js"),
      n = __webpack_require__("./node_modules/scheduler/index.js");

  function p(b) {
    for (var a = b.message, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++) c += "&args[]=" + encodeURIComponent(arguments[d]);

    b.message = "Minified React error #" + a + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";
    return b;
  }

  var q = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  q.hasOwnProperty("ReactCurrentDispatcher") || (q.ReactCurrentDispatcher = {
    current: null
  });
  q.hasOwnProperty("ReactCurrentBatchConfig") || (q.ReactCurrentBatchConfig = {
    suspense: null
  });
  var v = "function" === typeof Symbol && Symbol.for,
      ca = v ? Symbol.for("react.element") : 60103,
      da = v ? Symbol.for("react.portal") : 60106,
      ea = v ? Symbol.for("react.fragment") : 60107,
      fa = v ? Symbol.for("react.strict_mode") : 60108,
      ha = v ? Symbol.for("react.profiler") : 60114,
      ia = v ? Symbol.for("react.provider") : 60109,
      ja = v ? Symbol.for("react.context") : 60110,
      ka = v ? Symbol.for("react.concurrent_mode") : 60111,
      la = v ? Symbol.for("react.forward_ref") : 60112,
      ma = v ? Symbol.for("react.suspense") : 60113,
      na = v ? Symbol.for("react.suspense_list") : 60120,
      oa = v ? Symbol.for("react.memo") : 60115,
      pa = v ? Symbol.for("react.lazy") : 60116;
  v && Symbol.for("react.fundamental");
  v && Symbol.for("react.responder");
  var qa = "function" === typeof Symbol && Symbol.iterator;

  function ra(b) {
    if (null === b || "object" !== typeof b) return null;
    b = qa && b[qa] || b["@@iterator"];
    return "function" === typeof b ? b : null;
  }

  function sa(b) {
    if (null == b) return null;
    if ("function" === typeof b) return b.displayName || b.name || null;
    if ("string" === typeof b) return b;

    switch (b) {
      case ea:
        return "Fragment";

      case da:
        return "Portal";

      case ha:
        return "Profiler";

      case fa:
        return "StrictMode";

      case ma:
        return "Suspense";

      case na:
        return "SuspenseList";
    }

    if ("object" === typeof b) switch (b.$$typeof) {
      case ja:
        return "Context.Consumer";

      case ia:
        return "Context.Provider";

      case la:
        var a = b.render;
        a = a.displayName || a.name || "";
        return b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");

      case oa:
        return sa(b.type);

      case pa:
        if (b = 1 === b._status ? b._result : null) return sa(b);
    }
    return null;
  }

  function ta(b) {
    var a = b;
    if (b.alternate) for (; a.return;) a = a.return;else {
      if (0 !== (a.effectTag & 2)) return 1;

      for (; a.return;) if (a = a.return, 0 !== (a.effectTag & 2)) return 1;
    }
    return 3 === a.tag ? 2 : 3;
  }

  function ua(b) {
    if (2 !== ta(b)) throw p(Error(188));
  }

  function wa(b) {
    var a = b.alternate;

    if (!a) {
      a = ta(b);
      if (3 === a) throw p(Error(188));
      return 1 === a ? null : b;
    }

    for (var c = b, d = a;;) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;

      if (null === f) {
        d = e.return;

        if (null !== d) {
          c = d;
          continue;
        }

        break;
      }

      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return ua(e), b;
          if (f === d) return ua(e), a;
          f = f.sibling;
        }

        throw p(Error(188));
      }

      if (c.return !== d.return) c = e, d = f;else {
        for (var g = !1, h = e.child; h;) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }

          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }

          h = h.sibling;
        }

        if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }

            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }

            h = h.sibling;
          }

          if (!g) throw p(Error(189));
        }
      }
      if (c.alternate !== d) throw p(Error(190));
    }

    if (3 !== c.tag) throw p(Error(188));
    return c.stateNode.current === c ? b : a;
  }

  function xa(b) {
    b = wa(b);
    if (!b) return null;

    for (var a = b;;) {
      if (5 === a.tag || 6 === a.tag) return a;
      if (a.child) a.child.return = a, a = a.child;else {
        if (a === b) break;

        for (; !a.sibling;) {
          if (!a.return || a.return === b) return null;
          a = a.return;
        }

        a.sibling.return = a.return;
        a = a.sibling;
      }
    }

    return null;
  }

  function ya(b) {
    b = wa(b);
    if (!b) return null;

    for (var a = b;;) {
      if (5 === a.tag || 6 === a.tag || 20 === a.tag) return a;
      if (a.child && 4 !== a.tag) a.child.return = a, a = a.child;else {
        if (a === b) break;

        for (; !a.sibling;) {
          if (!a.return || a.return === b) return null;
          a = a.return;
        }

        a.sibling.return = a.return;
        a = a.sibling;
      }
    }

    return null;
  }

  var za = $$$hostConfig.getPublicInstance,
      Aa = $$$hostConfig.getRootHostContext,
      Ba = $$$hostConfig.getChildHostContext,
      Ca = $$$hostConfig.prepareForCommit,
      Da = $$$hostConfig.resetAfterCommit,
      Ea = $$$hostConfig.createInstance,
      Fa = $$$hostConfig.appendInitialChild,
      Ga = $$$hostConfig.finalizeInitialChildren,
      Ha = $$$hostConfig.prepareUpdate,
      Ia = $$$hostConfig.shouldSetTextContent,
      Ja = $$$hostConfig.shouldDeprioritizeSubtree,
      Ka = $$$hostConfig.createTextInstance,
      La = $$$hostConfig.setTimeout,
      Ma = $$$hostConfig.clearTimeout,
      Na = $$$hostConfig.noTimeout,
      Oa = $$$hostConfig.isPrimaryRenderer,
      A = $$$hostConfig.supportsMutation,
      Pa = $$$hostConfig.supportsPersistence,
      Qa = $$$hostConfig.supportsHydration,
      Ra = $$$hostConfig.appendChild,
      Sa = $$$hostConfig.appendChildToContainer,
      Ta = $$$hostConfig.commitTextUpdate,
      Ua = $$$hostConfig.commitMount,
      Va = $$$hostConfig.commitUpdate,
      Wa = $$$hostConfig.insertBefore,
      Xa = $$$hostConfig.insertInContainerBefore,
      Ya = $$$hostConfig.removeChild,
      Za = $$$hostConfig.removeChildFromContainer,
      $a = $$$hostConfig.resetTextContent,
      ab = $$$hostConfig.hideInstance,
      bb = $$$hostConfig.hideTextInstance,
      cb = $$$hostConfig.unhideInstance,
      db = $$$hostConfig.unhideTextInstance,
      eb = $$$hostConfig.cloneInstance,
      fb = $$$hostConfig.createContainerChildSet,
      gb = $$$hostConfig.appendChildToContainerChildSet,
      hb = $$$hostConfig.finalizeContainerChildren,
      jb = $$$hostConfig.replaceContainerChildren,
      kb = $$$hostConfig.cloneHiddenInstance,
      lb = $$$hostConfig.cloneHiddenTextInstance,
      mb = $$$hostConfig.canHydrateInstance,
      nb = $$$hostConfig.canHydrateTextInstance,
      ob = $$$hostConfig.getNextHydratableSibling,
      pb = $$$hostConfig.getFirstHydratableChild,
      qb = $$$hostConfig.hydrateInstance,
      rb = $$$hostConfig.hydrateTextInstance,
      sb = /^(.*)[\\\/]/;

  function tb(b) {
    var a = "";

    do {
      a: switch (b.tag) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 10:
        case 9:
          var c = "";
          break a;

        default:
          var d = b._debugOwner,
              e = b._debugSource,
              f = sa(b.type);
          c = null;
          d && (c = sa(d.type));
          d = f;
          f = "";
          e ? f = " (at " + e.fileName.replace(sb, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
          c = "\n    in " + (d || "Unknown") + f;
      }

      a += c;
      b = b.return;
    } while (b);

    return a;
  }

  new Set();
  var ub = [],
      vb = -1;

  function B(b) {
    0 > vb || (b.current = ub[vb], ub[vb] = null, vb--);
  }

  function C(b, a) {
    vb++;
    ub[vb] = b.current;
    b.current = a;
  }

  var wb = {},
      D = {
    current: wb
  },
      E = {
    current: !1
  },
      xb = wb;

  function yb(b, a) {
    var c = b.type.contextTypes;
    if (!c) return wb;
    var d = b.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === a) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
        f;

    for (f in c) e[f] = a[f];

    d && (b = b.stateNode, b.__reactInternalMemoizedUnmaskedChildContext = a, b.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }

  function F(b) {
    b = b.childContextTypes;
    return null !== b && void 0 !== b;
  }

  function zb(b) {
    B(E, b);
    B(D, b);
  }

  function Ab(b) {
    B(E, b);
    B(D, b);
  }

  function Bb(b, a, c) {
    if (D.current !== wb) throw p(Error(168));
    C(D, a, b);
    C(E, c, b);
  }

  function Cb(b, a, c) {
    var d = b.stateNode;
    b = a.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();

    for (var e in d) if (!(e in b)) throw p(Error(108), sa(a) || "Unknown", e);

    return aa({}, c, d);
  }

  function Db(b) {
    var a = b.stateNode;
    a = a && a.__reactInternalMemoizedMergedChildContext || wb;
    xb = D.current;
    C(D, a, b);
    C(E, E.current, b);
    return !0;
  }

  function Eb(b, a, c) {
    var d = b.stateNode;
    if (!d) throw p(Error(169));
    c ? (a = Cb(b, a, xb), d.__reactInternalMemoizedMergedChildContext = a, B(E, b), B(D, b), C(D, a, b)) : B(E, b);
    C(E, c, b);
  }

  var Fb = n.unstable_runWithPriority,
      Gb = n.unstable_scheduleCallback,
      Hb = n.unstable_cancelCallback,
      Ib = n.unstable_shouldYield,
      Jb = n.unstable_requestPaint,
      Kb = n.unstable_now,
      Lb = n.unstable_getCurrentPriorityLevel,
      Mb = n.unstable_ImmediatePriority,
      Nb = n.unstable_UserBlockingPriority,
      Ob = n.unstable_NormalPriority,
      Pb = n.unstable_LowPriority,
      Qb = n.unstable_IdlePriority,
      Rb = {},
      Sb = void 0 !== Jb ? Jb : function () {},
      Tb = null,
      Vb = null,
      Wb = !1,
      Xb = Kb(),
      G = 1E4 > Xb ? Kb : function () {
    return Kb() - Xb;
  };

  function Yb() {
    switch (Lb()) {
      case Mb:
        return 99;

      case Nb:
        return 98;

      case Ob:
        return 97;

      case Pb:
        return 96;

      case Qb:
        return 95;

      default:
        throw p(Error(332));
    }
  }

  function Zb(b) {
    switch (b) {
      case 99:
        return Mb;

      case 98:
        return Nb;

      case 97:
        return Ob;

      case 96:
        return Pb;

      case 95:
        return Qb;

      default:
        throw p(Error(332));
    }
  }

  function $b(b, a) {
    b = Zb(b);
    return Fb(b, a);
  }

  function ac(b, a, c) {
    b = Zb(b);
    return Gb(b, a, c);
  }

  function bc(b) {
    null === Tb ? (Tb = [b], Vb = Gb(Mb, cc)) : Tb.push(b);
    return Rb;
  }

  function H() {
    null !== Vb && Hb(Vb);
    cc();
  }

  function cc() {
    if (!Wb && null !== Tb) {
      Wb = !0;
      var b = 0;

      try {
        var a = Tb;
        $b(99, function () {
          for (; b < a.length; b++) {
            var c = a[b];

            do c = c(!0); while (null !== c);
          }
        });
        Tb = null;
      } catch (c) {
        throw null !== Tb && (Tb = Tb.slice(b + 1)), Gb(Mb, H), c;
      } finally {
        Wb = !1;
      }
    }
  }

  function dc(b, a) {
    if (1073741823 === a) return 99;
    if (1 === a) return 95;
    b = 10 * (1073741821 - a) - 10 * (1073741821 - b);
    return 0 >= b ? 99 : 250 >= b ? 98 : 5250 >= b ? 97 : 95;
  }

  function ec(b, a) {
    return b === a && (0 !== b || 1 / b === 1 / a) || b !== b && a !== a;
  }

  var fc = Object.prototype.hasOwnProperty;

  function gc(b, a) {
    if (ec(b, a)) return !0;
    if ("object" !== typeof b || null === b || "object" !== typeof a || null === a) return !1;
    var c = Object.keys(b),
        d = Object.keys(a);
    if (c.length !== d.length) return !1;

    for (d = 0; d < c.length; d++) if (!fc.call(a, c[d]) || !ec(b[c[d]], a[c[d]])) return !1;

    return !0;
  }

  function I(b, a) {
    if (b && b.defaultProps) {
      a = aa({}, a);
      b = b.defaultProps;

      for (var c in b) void 0 === a[c] && (a[c] = b[c]);
    }

    return a;
  }

  function hc(b) {
    var a = b._result;

    switch (b._status) {
      case 1:
        return a;

      case 2:
        throw a;

      case 0:
        throw a;

      default:
        b._status = 0;
        a = b._ctor;
        a = a();
        a.then(function (a) {
          0 === b._status && (a = a.default, b._status = 1, b._result = a);
        }, function (a) {
          0 === b._status && (b._status = 2, b._result = a);
        });

        switch (b._status) {
          case 1:
            return b._result;

          case 2:
            throw b._result;
        }

        b._result = a;
        throw a;
    }
  }

  var ic = {
    current: null
  },
      jc = null,
      kc = null,
      lc = null;

  function mc() {
    lc = kc = jc = null;
  }

  function nc(b, a) {
    var c = b.type._context;
    Oa ? (C(ic, c._currentValue, b), c._currentValue = a) : (C(ic, c._currentValue2, b), c._currentValue2 = a);
  }

  function oc(b) {
    var a = ic.current;
    B(ic, b);
    b = b.type._context;
    Oa ? b._currentValue = a : b._currentValue2 = a;
  }

  function pc(b, a) {
    for (; null !== b;) {
      var c = b.alternate;
      if (b.childExpirationTime < a) b.childExpirationTime = a, null !== c && c.childExpirationTime < a && (c.childExpirationTime = a);else if (null !== c && c.childExpirationTime < a) c.childExpirationTime = a;else break;
      b = b.return;
    }
  }

  function qc(b, a) {
    jc = b;
    lc = kc = null;
    b = b.dependencies;
    null !== b && null !== b.firstContext && (b.expirationTime >= a && (rc = !0), b.firstContext = null);
  }

  function J(b, a) {
    if (lc !== b && !1 !== a && 0 !== a) {
      if ("number" !== typeof a || 1073741823 === a) lc = b, a = 1073741823;
      a = {
        context: b,
        observedBits: a,
        next: null
      };

      if (null === kc) {
        if (null === jc) throw p(Error(308));
        kc = a;
        jc.dependencies = {
          expirationTime: 0,
          firstContext: a,
          responders: null
        };
      } else kc = kc.next = a;
    }

    return Oa ? b._currentValue : b._currentValue2;
  }

  var sc = !1;

  function tc(b) {
    return {
      baseState: b,
      firstUpdate: null,
      lastUpdate: null,
      firstCapturedUpdate: null,
      lastCapturedUpdate: null,
      firstEffect: null,
      lastEffect: null,
      firstCapturedEffect: null,
      lastCapturedEffect: null
    };
  }

  function uc(b) {
    return {
      baseState: b.baseState,
      firstUpdate: b.firstUpdate,
      lastUpdate: b.lastUpdate,
      firstCapturedUpdate: null,
      lastCapturedUpdate: null,
      firstEffect: null,
      lastEffect: null,
      firstCapturedEffect: null,
      lastCapturedEffect: null
    };
  }

  function vc(b, a) {
    return {
      expirationTime: b,
      suspenseConfig: a,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
      nextEffect: null
    };
  }

  function wc(b, a) {
    null === b.lastUpdate ? b.firstUpdate = b.lastUpdate = a : (b.lastUpdate.next = a, b.lastUpdate = a);
  }

  function xc(b, a) {
    var c = b.alternate;

    if (null === c) {
      var d = b.updateQueue;
      var e = null;
      null === d && (d = b.updateQueue = tc(b.memoizedState));
    } else d = b.updateQueue, e = c.updateQueue, null === d ? null === e ? (d = b.updateQueue = tc(b.memoizedState), e = c.updateQueue = tc(c.memoizedState)) : d = b.updateQueue = uc(e) : null === e && (e = c.updateQueue = uc(d));

    null === e || d === e ? wc(d, a) : null === d.lastUpdate || null === e.lastUpdate ? (wc(d, a), wc(e, a)) : (wc(d, a), e.lastUpdate = a);
  }

  function yc(b, a) {
    var c = b.updateQueue;
    c = null === c ? b.updateQueue = tc(b.memoizedState) : zc(b, c);
    null === c.lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = a : (c.lastCapturedUpdate.next = a, c.lastCapturedUpdate = a);
  }

  function zc(b, a) {
    var c = b.alternate;
    null !== c && a === c.updateQueue && (a = b.updateQueue = uc(a));
    return a;
  }

  function Ac(b, a, c, d, e, f) {
    switch (c.tag) {
      case 1:
        return b = c.payload, "function" === typeof b ? b.call(f, d, e) : b;

      case 3:
        b.effectTag = b.effectTag & -2049 | 64;

      case 0:
        b = c.payload;
        e = "function" === typeof b ? b.call(f, d, e) : b;
        if (null === e || void 0 === e) break;
        return aa({}, d, e);

      case 2:
        sc = !0;
    }

    return d;
  }

  function Bc(b, a, c, d, e) {
    sc = !1;
    a = zc(b, a);

    for (var f = a.baseState, g = null, h = 0, k = a.firstUpdate, l = f; null !== k;) {
      var m = k.expirationTime;
      m < e ? (null === g && (g = k, f = l), h < m && (h = m)) : (Cc(m, k.suspenseConfig), l = Ac(b, a, k, l, c, d), null !== k.callback && (b.effectTag |= 32, k.nextEffect = null, null === a.lastEffect ? a.firstEffect = a.lastEffect = k : (a.lastEffect.nextEffect = k, a.lastEffect = k)));
      k = k.next;
    }

    m = null;

    for (k = a.firstCapturedUpdate; null !== k;) {
      var y = k.expirationTime;
      y < e ? (null === m && (m = k, null === g && (f = l)), h < y && (h = y)) : (l = Ac(b, a, k, l, c, d), null !== k.callback && (b.effectTag |= 32, k.nextEffect = null, null === a.lastCapturedEffect ? a.firstCapturedEffect = a.lastCapturedEffect = k : (a.lastCapturedEffect.nextEffect = k, a.lastCapturedEffect = k)));
      k = k.next;
    }

    null === g && (a.lastUpdate = null);
    null === m ? a.lastCapturedUpdate = null : b.effectTag |= 32;
    null === g && null === m && (f = l);
    a.baseState = f;
    a.firstUpdate = g;
    a.firstCapturedUpdate = m;
    b.expirationTime = h;
    b.memoizedState = l;
  }

  function Dc(b, a, c) {
    null !== a.firstCapturedUpdate && (null !== a.lastUpdate && (a.lastUpdate.next = a.firstCapturedUpdate, a.lastUpdate = a.lastCapturedUpdate), a.firstCapturedUpdate = a.lastCapturedUpdate = null);
    Ec(a.firstEffect, c);
    a.firstEffect = a.lastEffect = null;
    Ec(a.firstCapturedEffect, c);
    a.firstCapturedEffect = a.lastCapturedEffect = null;
  }

  function Ec(b, a) {
    for (; null !== b;) {
      var c = b.callback;

      if (null !== c) {
        b.callback = null;
        var d = a;
        if ("function" !== typeof c) throw p(Error(191), c);
        c.call(d);
      }

      b = b.nextEffect;
    }
  }

  var Fc = q.ReactCurrentBatchConfig,
      Gc = new ba.Component().refs;

  function Hc(b, a, c, d) {
    a = b.memoizedState;
    c = c(d, a);
    c = null === c || void 0 === c ? a : aa({}, a, c);
    b.memoizedState = c;
    d = b.updateQueue;
    null !== d && 0 === b.expirationTime && (d.baseState = c);
  }

  var Kc = {
    isMounted: function (b) {
      return (b = b._reactInternalFiber) ? 2 === ta(b) : !1;
    },
    enqueueSetState: function (b, a, c) {
      b = b._reactInternalFiber;
      var d = K(),
          e = Fc.suspense;
      d = Ic(d, b, e);
      e = vc(d, e);
      e.payload = a;
      void 0 !== c && null !== c && (e.callback = c);
      xc(b, e);
      Jc(b, d);
    },
    enqueueReplaceState: function (b, a, c) {
      b = b._reactInternalFiber;
      var d = K(),
          e = Fc.suspense;
      d = Ic(d, b, e);
      e = vc(d, e);
      e.tag = 1;
      e.payload = a;
      void 0 !== c && null !== c && (e.callback = c);
      xc(b, e);
      Jc(b, d);
    },
    enqueueForceUpdate: function (b, a) {
      b = b._reactInternalFiber;
      var c = K(),
          d = Fc.suspense;
      c = Ic(c, b, d);
      d = vc(c, d);
      d.tag = 2;
      void 0 !== a && null !== a && (d.callback = a);
      xc(b, d);
      Jc(b, c);
    }
  };

  function Lc(b, a, c, d, e, f, g) {
    b = b.stateNode;
    return "function" === typeof b.shouldComponentUpdate ? b.shouldComponentUpdate(d, f, g) : a.prototype && a.prototype.isPureReactComponent ? !gc(c, d) || !gc(e, f) : !0;
  }

  function Mc(b, a, c) {
    var d = !1,
        e = wb;
    var f = a.contextType;
    "object" === typeof f && null !== f ? f = J(f) : (e = F(a) ? xb : D.current, d = a.contextTypes, f = (d = null !== d && void 0 !== d) ? yb(b, e) : wb);
    a = new a(c, f);
    b.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null;
    a.updater = Kc;
    b.stateNode = a;
    a._reactInternalFiber = b;
    d && (b = b.stateNode, b.__reactInternalMemoizedUnmaskedChildContext = e, b.__reactInternalMemoizedMaskedChildContext = f);
    return a;
  }

  function Nc(b, a, c, d) {
    b = a.state;
    "function" === typeof a.componentWillReceiveProps && a.componentWillReceiveProps(c, d);
    "function" === typeof a.UNSAFE_componentWillReceiveProps && a.UNSAFE_componentWillReceiveProps(c, d);
    a.state !== b && Kc.enqueueReplaceState(a, a.state, null);
  }

  function Oc(b, a, c, d) {
    var e = b.stateNode;
    e.props = c;
    e.state = b.memoizedState;
    e.refs = Gc;
    var f = a.contextType;
    "object" === typeof f && null !== f ? e.context = J(f) : (f = F(a) ? xb : D.current, e.context = yb(b, f));
    f = b.updateQueue;
    null !== f && (Bc(b, f, c, e, d), e.state = b.memoizedState);
    f = a.getDerivedStateFromProps;
    "function" === typeof f && (Hc(b, a, f, c), e.state = b.memoizedState);
    "function" === typeof a.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (a = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), a !== e.state && Kc.enqueueReplaceState(e, e.state, null), f = b.updateQueue, null !== f && (Bc(b, f, c, e, d), e.state = b.memoizedState));
    "function" === typeof e.componentDidMount && (b.effectTag |= 4);
  }

  var Pc = Array.isArray;

  function Qc(b, a, c) {
    b = c.ref;

    if (null !== b && "function" !== typeof b && "object" !== typeof b) {
      if (c._owner) {
        c = c._owner;
        var d = void 0;

        if (c) {
          if (1 !== c.tag) throw p(Error(309));
          d = c.stateNode;
        }

        if (!d) throw p(Error(147), b);
        var e = "" + b;
        if (null !== a && null !== a.ref && "function" === typeof a.ref && a.ref._stringRef === e) return a.ref;

        a = function (a) {
          var b = d.refs;
          b === Gc && (b = d.refs = {});
          null === a ? delete b[e] : b[e] = a;
        };

        a._stringRef = e;
        return a;
      }

      if ("string" !== typeof b) throw p(Error(284));
      if (!c._owner) throw p(Error(290), b);
    }

    return b;
  }

  function Rc(b, a) {
    if ("textarea" !== b.type) throw p(Error(31), "[object Object]" === Object.prototype.toString.call(a) ? "object with keys {" + Object.keys(a).join(", ") + "}" : a, "");
  }

  function Sc(b) {
    function a(a, c) {
      if (b) {
        var e = a.lastEffect;
        null !== e ? (e.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
        c.nextEffect = null;
        c.effectTag = 8;
      }
    }

    function c(c, e) {
      if (!b) return null;

      for (; null !== e;) a(c, e), e = e.sibling;

      return null;
    }

    function d(a, b) {
      for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;

      return a;
    }

    function e(a, b, c) {
      a = Tc(a, b, c);
      a.index = 0;
      a.sibling = null;
      return a;
    }

    function f(a, c, e) {
      a.index = e;
      if (!b) return c;
      e = a.alternate;
      if (null !== e) return e = e.index, e < c ? (a.effectTag = 2, c) : e;
      a.effectTag = 2;
      return c;
    }

    function g(a) {
      b && null === a.alternate && (a.effectTag = 2);
      return a;
    }

    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return b = Uc(c, a.mode, d), b.return = a, b;
      b = e(b, c, d);
      b.return = a;
      return b;
    }

    function k(a, b, c, d) {
      if (null !== b && b.elementType === c.type) return d = e(b, c.props, d), d.ref = Qc(a, b, c), d.return = a, d;
      d = Vc(c.type, c.key, c.props, null, a.mode, d);
      d.ref = Qc(a, b, c);
      d.return = a;
      return d;
    }

    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Wc(c, a.mode, d), b.return = a, b;
      b = e(b, c.children || [], d);
      b.return = a;
      return b;
    }

    function m(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return b = Xc(c, a.mode, d, f), b.return = a, b;
      b = e(b, c, d);
      b.return = a;
      return b;
    }

    function y(a, b, c) {
      if ("string" === typeof b || "number" === typeof b) return b = Uc("" + b, a.mode, c), b.return = a, b;

      if ("object" === typeof b && null !== b) {
        switch (b.$$typeof) {
          case ca:
            return c = Vc(b.type, b.key, b.props, null, a.mode, c), c.ref = Qc(a, null, b), c.return = a, c;

          case da:
            return b = Wc(b, a.mode, c), b.return = a, b;
        }

        if (Pc(b) || ra(b)) return b = Xc(b, a.mode, c, null), b.return = a, b;
        Rc(a, b);
      }

      return null;
    }

    function x(a, b, c, e) {
      var d = null !== b ? b.key : null;
      if ("string" === typeof c || "number" === typeof c) return null !== d ? null : h(a, b, "" + c, e);

      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case ca:
            return c.key === d ? c.type === ea ? m(a, b, c.props.children, e, d) : k(a, b, c, e) : null;

          case da:
            return c.key === d ? l(a, b, c, e) : null;
        }

        if (Pc(c) || ra(c)) return null !== d ? null : m(a, b, c, e, null);
        Rc(a, c);
      }

      return null;
    }

    function t(a, b, c, e, d) {
      if ("string" === typeof e || "number" === typeof e) return a = a.get(c) || null, h(b, a, "" + e, d);

      if ("object" === typeof e && null !== e) {
        switch (e.$$typeof) {
          case ca:
            return a = a.get(null === e.key ? c : e.key) || null, e.type === ea ? m(b, a, e.props.children, d, e.key) : k(b, a, e, d);

          case da:
            return a = a.get(null === e.key ? c : e.key) || null, l(b, a, e, d);
        }

        if (Pc(e) || ra(e)) return a = a.get(c) || null, m(b, a, e, d, null);
        Rc(b, e);
      }

      return null;
    }

    function P(e, g, h, k) {
      for (var l = null, z = null, r = g, w = g = 0, m = null; null !== r && w < h.length; w++) {
        r.index > w ? (m = r, r = null) : m = r.sibling;
        var u = x(e, r, h[w], k);

        if (null === u) {
          null === r && (r = m);
          break;
        }

        b && r && null === u.alternate && a(e, r);
        g = f(u, g, w);
        null === z ? l = u : z.sibling = u;
        z = u;
        r = m;
      }

      if (w === h.length) return c(e, r), l;

      if (null === r) {
        for (; w < h.length; w++) r = y(e, h[w], k), null !== r && (g = f(r, g, w), null === z ? l = r : z.sibling = r, z = r);

        return l;
      }

      for (r = d(e, r); w < h.length; w++) m = t(r, e, w, h[w], k), null !== m && (b && null !== m.alternate && r.delete(null === m.key ? w : m.key), g = f(m, g, w), null === z ? l = m : z.sibling = m, z = m);

      b && r.forEach(function (b) {
        return a(e, b);
      });
      return l;
    }

    function Q(e, g, h, k) {
      var l = ra(h);
      if ("function" !== typeof l) throw p(Error(150));
      h = l.call(h);
      if (null == h) throw p(Error(151));

      for (var r = l = null, m = g, w = g = 0, z = null, u = h.next(); null !== m && !u.done; w++, u = h.next()) {
        m.index > w ? (z = m, m = null) : z = m.sibling;
        var va = x(e, m, u.value, k);

        if (null === va) {
          null === m && (m = z);
          break;
        }

        b && m && null === va.alternate && a(e, m);
        g = f(va, g, w);
        null === r ? l = va : r.sibling = va;
        r = va;
        m = z;
      }

      if (u.done) return c(e, m), l;

      if (null === m) {
        for (; !u.done; w++, u = h.next()) u = y(e, u.value, k), null !== u && (g = f(u, g, w), null === r ? l = u : r.sibling = u, r = u);

        return l;
      }

      for (m = d(e, m); !u.done; w++, u = h.next()) u = t(m, e, w, u.value, k), null !== u && (b && null !== u.alternate && m.delete(null === u.key ? w : u.key), g = f(u, g, w), null === r ? l = u : r.sibling = u, r = u);

      b && m.forEach(function (b) {
        return a(e, b);
      });
      return l;
    }

    return function (b, d, f, h) {
      var k = "object" === typeof f && null !== f && f.type === ea && null === f.key;
      k && (f = f.props.children);
      var l = "object" === typeof f && null !== f;
      if (l) switch (f.$$typeof) {
        case ca:
          a: {
            l = f.key;

            for (k = d; null !== k;) {
              if (k.key === l) {
                if (7 === k.tag ? f.type === ea : k.elementType === f.type) {
                  c(b, k.sibling);
                  d = e(k, f.type === ea ? f.props.children : f.props, h);
                  d.ref = Qc(b, k, f);
                  d.return = b;
                  b = d;
                  break a;
                }

                c(b, k);
                break;
              } else a(b, k);

              k = k.sibling;
            }

            f.type === ea ? (d = Xc(f.props.children, b.mode, h, f.key), d.return = b, b = d) : (h = Vc(f.type, f.key, f.props, null, b.mode, h), h.ref = Qc(b, d, f), h.return = b, b = h);
          }

          return g(b);

        case da:
          a: {
            for (k = f.key; null !== d;) {
              if (d.key === k) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(b, d.sibling);
                  d = e(d, f.children || [], h);
                  d.return = b;
                  b = d;
                  break a;
                }

                c(b, d);
                break;
              } else a(b, d);

              d = d.sibling;
            }

            d = Wc(f, b.mode, h);
            d.return = b;
            b = d;
          }

          return g(b);
      }
      if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(b, d.sibling), d = e(d, f, h), d.return = b, b = d) : (c(b, d), d = Uc(f, b.mode, h), d.return = b, b = d), g(b);
      if (Pc(f)) return P(b, d, f, h);
      if (ra(f)) return Q(b, d, f, h);
      l && Rc(b, f);
      if ("undefined" === typeof f && !k) switch (b.tag) {
        case 1:
        case 0:
          throw b = b.type, p(Error(152), b.displayName || b.name || "Component");
      }
      return c(b, d);
    };
  }

  var Yc = Sc(!0),
      Zc = Sc(!1),
      $c = {},
      L = {
    current: $c
  },
      ad = {
    current: $c
  },
      bd = {
    current: $c
  };

  function cd(b) {
    if (b === $c) throw p(Error(174));
    return b;
  }

  function dd(b, a) {
    C(bd, a, b);
    C(ad, b, b);
    C(L, $c, b);
    a = Aa(a);
    B(L, b);
    C(L, a, b);
  }

  function ed(b) {
    B(L, b);
    B(ad, b);
    B(bd, b);
  }

  function fd(b) {
    var a = cd(bd.current),
        c = cd(L.current);
    a = Ba(c, b.type, a);
    c !== a && (C(ad, b, b), C(L, a, b));
  }

  function gd(b) {
    ad.current === b && (B(L, b), B(ad, b));
  }

  var hd = 1,
      id = 1,
      jd = 2,
      M = {
    current: 0
  };

  function kd(b) {
    for (var a = b; null !== a;) {
      if (13 === a.tag) {
        if (null !== a.memoizedState) return a;
      } else if (19 === a.tag && void 0 !== a.memoizedProps.revealOrder) {
        if (0 !== (a.effectTag & 64)) return a;
      } else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }

      if (a === b) break;

      for (; null === a.sibling;) {
        if (null === a.return || a.return === b) return null;
        a = a.return;
      }

      a.sibling.return = a.return;
      a = a.sibling;
    }

    return null;
  }

  function ld(b, a) {
    return {
      responder: b,
      props: a
    };
  }

  var md = 0,
      nd = 2,
      od = 4,
      pd = 8,
      qd = 16,
      rd = 32,
      sd = 64,
      td = 128,
      ud = q.ReactCurrentDispatcher,
      vd = 0,
      wd = null,
      N = null,
      xd = null,
      yd = null,
      O = null,
      zd = null,
      Ad = 0,
      Bd = null,
      Cd = 0,
      Dd = !1,
      Ed = null,
      Fd = 0;

  function R() {
    throw p(Error(321));
  }

  function Gd(b, a) {
    if (null === a) return !1;

    for (var c = 0; c < a.length && c < b.length; c++) if (!ec(b[c], a[c])) return !1;

    return !0;
  }

  function Hd(b, a, c, d, e, f) {
    vd = f;
    wd = a;
    xd = null !== b ? b.memoizedState : null;
    ud.current = null === xd ? Id : Jd;
    a = c(d, e);

    if (Dd) {
      do Dd = !1, Fd += 1, xd = null !== b ? b.memoizedState : null, zd = yd, Bd = O = N = null, ud.current = Jd, a = c(d, e); while (Dd);

      Ed = null;
      Fd = 0;
    }

    ud.current = Kd;
    b = wd;
    b.memoizedState = yd;
    b.expirationTime = Ad;
    b.updateQueue = Bd;
    b.effectTag |= Cd;
    b = null !== N && null !== N.next;
    vd = 0;
    zd = O = yd = xd = N = wd = null;
    Ad = 0;
    Bd = null;
    Cd = 0;
    if (b) throw p(Error(300));
    return a;
  }

  function Ld() {
    ud.current = Kd;
    vd = 0;
    zd = O = yd = xd = N = wd = null;
    Ad = 0;
    Bd = null;
    Cd = 0;
    Dd = !1;
    Ed = null;
    Fd = 0;
  }

  function Md() {
    var b = {
      memoizedState: null,
      baseState: null,
      queue: null,
      baseUpdate: null,
      next: null
    };
    null === O ? yd = O = b : O = O.next = b;
    return O;
  }

  function Nd() {
    if (null !== zd) O = zd, zd = O.next, N = xd, xd = null !== N ? N.next : null;else {
      if (null === xd) throw p(Error(310));
      N = xd;
      var b = {
        memoizedState: N.memoizedState,
        baseState: N.baseState,
        queue: N.queue,
        baseUpdate: N.baseUpdate,
        next: null
      };
      O = null === O ? yd = b : O.next = b;
      xd = N.next;
    }
    return O;
  }

  function Od(b, a) {
    return "function" === typeof a ? a(b) : a;
  }

  function Pd(b) {
    var a = Nd(),
        c = a.queue;
    if (null === c) throw p(Error(311));
    c.lastRenderedReducer = b;

    if (0 < Fd) {
      var d = c.dispatch;

      if (null !== Ed) {
        var e = Ed.get(c);

        if (void 0 !== e) {
          Ed.delete(c);
          var f = a.memoizedState;

          do f = b(f, e.action), e = e.next; while (null !== e);

          ec(f, a.memoizedState) || (rc = !0);
          a.memoizedState = f;
          a.baseUpdate === c.last && (a.baseState = f);
          c.lastRenderedState = f;
          return [f, d];
        }
      }

      return [a.memoizedState, d];
    }

    d = c.last;
    var g = a.baseUpdate;
    f = a.baseState;
    null !== g ? (null !== d && (d.next = null), d = g.next) : d = null !== d ? d.next : null;

    if (null !== d) {
      var h = e = null,
          k = d,
          l = !1;

      do {
        var m = k.expirationTime;
        m < vd ? (l || (l = !0, h = g, e = f), m > Ad && (Ad = m)) : (Cc(m, k.suspenseConfig), f = k.eagerReducer === b ? k.eagerState : b(f, k.action));
        g = k;
        k = k.next;
      } while (null !== k && k !== d);

      l || (h = g, e = f);
      ec(f, a.memoizedState) || (rc = !0);
      a.memoizedState = f;
      a.baseUpdate = h;
      a.baseState = e;
      c.lastRenderedState = f;
    }

    return [a.memoizedState, c.dispatch];
  }

  function Qd(b, a, c, d) {
    b = {
      tag: b,
      create: a,
      destroy: c,
      deps: d,
      next: null
    };
    null === Bd ? (Bd = {
      lastEffect: null
    }, Bd.lastEffect = b.next = b) : (a = Bd.lastEffect, null === a ? Bd.lastEffect = b.next = b : (c = a.next, a.next = b, b.next = c, Bd.lastEffect = b));
    return b;
  }

  function Rd(b, a, c, d) {
    var e = Md();
    Cd |= b;
    e.memoizedState = Qd(a, c, void 0, void 0 === d ? null : d);
  }

  function Sd(b, a, c, d) {
    var e = Nd();
    d = void 0 === d ? null : d;
    var f = void 0;

    if (null !== N) {
      var g = N.memoizedState;
      f = g.destroy;

      if (null !== d && Gd(d, g.deps)) {
        Qd(md, c, f, d);
        return;
      }
    }

    Cd |= b;
    e.memoizedState = Qd(a, c, f, d);
  }

  function Td(b, a) {
    if ("function" === typeof a) return b = b(), a(b), function () {
      a(null);
    };
    if (null !== a && void 0 !== a) return b = b(), a.current = b, function () {
      a.current = null;
    };
  }

  function Ud() {}

  function Vd(b, a, c) {
    if (!(25 > Fd)) throw p(Error(301));
    var d = b.alternate;
    if (b === wd || null !== d && d === wd) {
      if (Dd = !0, b = {
        expirationTime: vd,
        suspenseConfig: null,
        action: c,
        eagerReducer: null,
        eagerState: null,
        next: null
      }, null === Ed && (Ed = new Map()), c = Ed.get(a), void 0 === c) Ed.set(a, b);else {
        for (a = c; null !== a.next;) a = a.next;

        a.next = b;
      }
    } else {
      var e = K(),
          f = Fc.suspense;
      e = Ic(e, b, f);
      f = {
        expirationTime: e,
        suspenseConfig: f,
        action: c,
        eagerReducer: null,
        eagerState: null,
        next: null
      };
      var g = a.last;
      if (null === g) f.next = f;else {
        var h = g.next;
        null !== h && (f.next = h);
        g.next = f;
      }
      a.last = f;
      if (0 === b.expirationTime && (null === d || 0 === d.expirationTime) && (d = a.lastRenderedReducer, null !== d)) try {
        var k = a.lastRenderedState,
            l = d(k, c);
        f.eagerReducer = d;
        f.eagerState = l;
        if (ec(l, k)) return;
      } catch (m) {} finally {}
      Jc(b, e);
    }
  }

  var Kd = {
    readContext: J,
    useCallback: R,
    useContext: R,
    useEffect: R,
    useImperativeHandle: R,
    useLayoutEffect: R,
    useMemo: R,
    useReducer: R,
    useRef: R,
    useState: R,
    useDebugValue: R,
    useResponder: R
  },
      Id = {
    readContext: J,
    useCallback: function (b, a) {
      Md().memoizedState = [b, void 0 === a ? null : a];
      return b;
    },
    useContext: J,
    useEffect: function (b, a) {
      return Rd(516, td | sd, b, a);
    },
    useImperativeHandle: function (b, a, c) {
      c = null !== c && void 0 !== c ? c.concat([b]) : null;
      return Rd(4, od | rd, Td.bind(null, a, b), c);
    },
    useLayoutEffect: function (b, a) {
      return Rd(4, od | rd, b, a);
    },
    useMemo: function (b, a) {
      var c = Md();
      a = void 0 === a ? null : a;
      b = b();
      c.memoizedState = [b, a];
      return b;
    },
    useReducer: function (b, a, c) {
      var d = Md();
      a = void 0 !== c ? c(a) : a;
      d.memoizedState = d.baseState = a;
      b = d.queue = {
        last: null,
        dispatch: null,
        lastRenderedReducer: b,
        lastRenderedState: a
      };
      b = b.dispatch = Vd.bind(null, wd, b);
      return [d.memoizedState, b];
    },
    useRef: function (b) {
      var a = Md();
      b = {
        current: b
      };
      return a.memoizedState = b;
    },
    useState: function (b) {
      var a = Md();
      "function" === typeof b && (b = b());
      a.memoizedState = a.baseState = b;
      b = a.queue = {
        last: null,
        dispatch: null,
        lastRenderedReducer: Od,
        lastRenderedState: b
      };
      b = b.dispatch = Vd.bind(null, wd, b);
      return [a.memoizedState, b];
    },
    useDebugValue: Ud,
    useResponder: ld
  },
      Jd = {
    readContext: J,
    useCallback: function (b, a) {
      var c = Nd();
      a = void 0 === a ? null : a;
      var d = c.memoizedState;
      if (null !== d && null !== a && Gd(a, d[1])) return d[0];
      c.memoizedState = [b, a];
      return b;
    },
    useContext: J,
    useEffect: function (b, a) {
      return Sd(516, td | sd, b, a);
    },
    useImperativeHandle: function (b, a, c) {
      c = null !== c && void 0 !== c ? c.concat([b]) : null;
      return Sd(4, od | rd, Td.bind(null, a, b), c);
    },
    useLayoutEffect: function (b, a) {
      return Sd(4, od | rd, b, a);
    },
    useMemo: function (b, a) {
      var c = Nd();
      a = void 0 === a ? null : a;
      var d = c.memoizedState;
      if (null !== d && null !== a && Gd(a, d[1])) return d[0];
      b = b();
      c.memoizedState = [b, a];
      return b;
    },
    useReducer: Pd,
    useRef: function () {
      return Nd().memoizedState;
    },
    useState: function (b) {
      return Pd(Od, b);
    },
    useDebugValue: Ud,
    useResponder: ld
  },
      Wd = null,
      Xd = null,
      Yd = !1;

  function Zd(b, a) {
    var c = $d(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = a;
    c.return = b;
    c.effectTag = 8;
    null !== b.lastEffect ? (b.lastEffect.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
  }

  function ae(b, a) {
    switch (b.tag) {
      case 5:
        return a = mb(a, b.type, b.pendingProps), null !== a ? (b.stateNode = a, !0) : !1;

      case 6:
        return a = nb(a, b.pendingProps), null !== a ? (b.stateNode = a, !0) : !1;

      case 13:
        return !1;

      default:
        return !1;
    }
  }

  function be(b) {
    if (Yd) {
      var a = Xd;

      if (a) {
        var c = a;

        if (!ae(b, a)) {
          a = ob(c);

          if (!a || !ae(b, a)) {
            b.effectTag |= 2;
            Yd = !1;
            Wd = b;
            return;
          }

          Zd(Wd, c);
        }

        Wd = b;
        Xd = pb(a);
      } else b.effectTag |= 2, Yd = !1, Wd = b;
    }
  }

  function ce(b) {
    for (b = b.return; null !== b && 5 !== b.tag && 3 !== b.tag && 18 !== b.tag;) b = b.return;

    Wd = b;
  }

  function de(b) {
    if (!Qa || b !== Wd) return !1;
    if (!Yd) return ce(b), Yd = !0, !1;
    var a = b.type;
    if (5 !== b.tag || "head" !== a && "body" !== a && !Ia(a, b.memoizedProps)) for (a = Xd; a;) Zd(b, a), a = ob(a);
    ce(b);
    Xd = Wd ? ob(b.stateNode) : null;
    return !0;
  }

  function ee() {
    Qa && (Xd = Wd = null, Yd = !1);
  }

  var fe = q.ReactCurrentOwner,
      rc = !1;

  function S(b, a, c, d) {
    a.child = null === b ? Zc(a, null, c, d) : Yc(a, b.child, c, d);
  }

  function je(b, a, c, d, e) {
    c = c.render;
    var f = a.ref;
    qc(a, e);
    d = Hd(b, a, c, d, f, e);
    if (null !== b && !rc) return a.updateQueue = b.updateQueue, a.effectTag &= -517, b.expirationTime <= e && (b.expirationTime = 0), ke(b, a, e);
    a.effectTag |= 1;
    S(b, a, d, e);
    return a.child;
  }

  function le(b, a, c, d, e, f) {
    if (null === b) {
      var g = c.type;
      if ("function" === typeof g && !me(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return a.tag = 15, a.type = g, ne(b, a, g, d, e, f);
      b = Vc(c.type, null, d, null, a.mode, f);
      b.ref = a.ref;
      b.return = a;
      return a.child = b;
    }

    g = b.child;
    if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : gc, c(e, d) && b.ref === a.ref)) return ke(b, a, f);
    a.effectTag |= 1;
    b = Tc(g, d, f);
    b.ref = a.ref;
    b.return = a;
    return a.child = b;
  }

  function ne(b, a, c, d, e, f) {
    return null !== b && gc(b.memoizedProps, d) && b.ref === a.ref && (rc = !1, e < f) ? ke(b, a, f) : oe(b, a, c, d, f);
  }

  function pe(b, a) {
    var c = a.ref;
    if (null === b && null !== c || null !== b && b.ref !== c) a.effectTag |= 128;
  }

  function oe(b, a, c, d, e) {
    var f = F(c) ? xb : D.current;
    f = yb(a, f);
    qc(a, e);
    c = Hd(b, a, c, d, f, e);
    if (null !== b && !rc) return a.updateQueue = b.updateQueue, a.effectTag &= -517, b.expirationTime <= e && (b.expirationTime = 0), ke(b, a, e);
    a.effectTag |= 1;
    S(b, a, c, e);
    return a.child;
  }

  function qe(b, a, c, d, e) {
    if (F(c)) {
      var f = !0;
      Db(a);
    } else f = !1;

    qc(a, e);
    if (null === a.stateNode) null !== b && (b.alternate = null, a.alternate = null, a.effectTag |= 2), Mc(a, c, d, e), Oc(a, c, d, e), d = !0;else if (null === b) {
      var g = a.stateNode,
          h = a.memoizedProps;
      g.props = h;
      var k = g.context,
          l = c.contextType;
      "object" === typeof l && null !== l ? l = J(l) : (l = F(c) ? xb : D.current, l = yb(a, l));
      var m = c.getDerivedStateFromProps,
          y = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
      y || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Nc(a, g, d, l);
      sc = !1;
      var x = a.memoizedState;
      k = g.state = x;
      var t = a.updateQueue;
      null !== t && (Bc(a, t, d, g, e), k = a.memoizedState);
      h !== d || x !== k || E.current || sc ? ("function" === typeof m && (Hc(a, c, m, d), k = a.memoizedState), (h = sc || Lc(a, c, h, d, x, k, l)) ? (y || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (a.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (a.effectTag |= 4), a.memoizedProps = d, a.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (a.effectTag |= 4), d = !1);
    } else g = a.stateNode, h = a.memoizedProps, g.props = a.type === a.elementType ? h : I(a.type, h), k = g.context, l = c.contextType, "object" === typeof l && null !== l ? l = J(l) : (l = F(c) ? xb : D.current, l = yb(a, l)), m = c.getDerivedStateFromProps, (y = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Nc(a, g, d, l), sc = !1, k = a.memoizedState, x = g.state = k, t = a.updateQueue, null !== t && (Bc(a, t, d, g, e), x = a.memoizedState), h !== d || k !== x || E.current || sc ? ("function" === typeof m && (Hc(a, c, m, d), x = a.memoizedState), (m = sc || Lc(a, c, h, d, k, x, l)) ? (y || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, l), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, l)), "function" === typeof g.componentDidUpdate && (a.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (a.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === b.memoizedProps && k === b.memoizedState || (a.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === b.memoizedProps && k === b.memoizedState || (a.effectTag |= 256), a.memoizedProps = d, a.memoizedState = x), g.props = d, g.state = x, g.context = l, d = m) : ("function" !== typeof g.componentDidUpdate || h === b.memoizedProps && k === b.memoizedState || (a.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === b.memoizedProps && k === b.memoizedState || (a.effectTag |= 256), d = !1);
    return re(b, a, c, d, f, e);
  }

  function re(b, a, c, d, e, f) {
    pe(b, a);
    var g = 0 !== (a.effectTag & 64);
    if (!d && !g) return e && Eb(a, c, !1), ke(b, a, f);
    d = a.stateNode;
    fe.current = a;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    a.effectTag |= 1;
    null !== b && g ? (a.child = Yc(a, b.child, null, f), a.child = Yc(a, null, h, f)) : S(b, a, h, f);
    a.memoizedState = d.state;
    e && Eb(a, c, !0);
    return a.child;
  }

  function se(b) {
    var a = b.stateNode;
    a.pendingContext ? Bb(b, a.pendingContext, a.pendingContext !== a.context) : a.context && Bb(b, a.context, !1);
    dd(b, a.containerInfo);
  }

  var te = {};

  function ue(b, a, c) {
    var d = a.mode,
        e = a.pendingProps,
        f = M.current,
        g = null,
        h = !1,
        k;
    (k = 0 !== (a.effectTag & 64)) || (k = 0 !== (f & jd) && (null === b || null !== b.memoizedState));
    k ? (g = te, h = !0, a.effectTag &= -65) : null !== b && null === b.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= id);
    f &= hd;
    C(M, f, a);
    if (null === b) {
      if (h) {
        e = e.fallback;
        b = Xc(null, d, 0, null);
        b.return = a;
        if (0 === (a.mode & 2)) for (h = null !== a.memoizedState ? a.child.child : a.child, b.child = h; null !== h;) h.return = b, h = h.sibling;
        c = Xc(e, d, c, null);
        c.return = a;
        b.sibling = c;
        d = b;
      } else d = c = Zc(a, null, e.children, c);
    } else {
      if (null !== b.memoizedState) {
        if (f = b.child, d = f.sibling, h) {
          e = e.fallback;
          c = Tc(f, f.pendingProps, 0);
          c.return = a;
          if (0 === (a.mode & 2) && (h = null !== a.memoizedState ? a.child.child : a.child, h !== f.child)) for (c.child = h; null !== h;) h.return = c, h = h.sibling;
          e = Tc(d, e, d.expirationTime);
          e.return = a;
          c.sibling = e;
          d = c;
          c.childExpirationTime = 0;
          c = e;
        } else d = c = Yc(a, f.child, e.children, c);
      } else if (f = b.child, h) {
        h = e.fallback;
        e = Xc(null, d, 0, null);
        e.return = a;
        e.child = f;
        null !== f && (f.return = e);
        if (0 === (a.mode & 2)) for (f = null !== a.memoizedState ? a.child.child : a.child, e.child = f; null !== f;) f.return = e, f = f.sibling;
        c = Xc(h, d, c, null);
        c.return = a;
        e.sibling = c;
        c.effectTag |= 2;
        d = e;
        e.childExpirationTime = 0;
      } else c = d = Yc(a, f, e.children, c);
      a.stateNode = b.stateNode;
    }
    a.memoizedState = g;
    a.child = d;
    return c;
  }

  function ve(b, a, c, d, e) {
    var f = b.memoizedState;
    null === f ? b.memoizedState = {
      isBackwards: a,
      rendering: null,
      last: d,
      tail: c,
      tailExpiration: 0,
      tailMode: e
    } : (f.isBackwards = a, f.rendering = null, f.last = d, f.tail = c, f.tailExpiration = 0, f.tailMode = e);
  }

  function we(b, a, c) {
    var d = a.pendingProps,
        e = d.revealOrder,
        f = d.tail;
    S(b, a, d.children, c);
    d = M.current;
    if (0 !== (d & jd)) d = d & hd | jd, a.effectTag |= 64;else {
      if (null !== b && 0 !== (b.effectTag & 64)) a: for (b = a.child; null !== b;) {
        if (13 === b.tag) {
          if (null !== b.memoizedState) {
            b.expirationTime < c && (b.expirationTime = c);
            var g = b.alternate;
            null !== g && g.expirationTime < c && (g.expirationTime = c);
            pc(b.return, c);
          }
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }

        if (b === a) break a;

        for (; null === b.sibling;) {
          if (null === b.return || b.return === a) break a;
          b = b.return;
        }

        b.sibling.return = b.return;
        b = b.sibling;
      }
      d &= hd;
    }
    C(M, d, a);
    if (0 === (a.mode & 2)) a.memoizedState = null;else switch (e) {
      case "forwards":
        c = a.child;

        for (e = null; null !== c;) d = c.alternate, null !== d && null === kd(d) && (e = c), c = c.sibling;

        c = e;
        null === c ? (e = a.child, a.child = null) : (e = c.sibling, c.sibling = null);
        ve(a, !1, e, c, f);
        break;

      case "backwards":
        c = null;
        e = a.child;

        for (a.child = null; null !== e;) {
          d = e.alternate;

          if (null !== d && null === kd(d)) {
            a.child = e;
            break;
          }

          d = e.sibling;
          e.sibling = c;
          c = e;
          e = d;
        }

        ve(a, !0, c, null, f);
        break;

      case "together":
        ve(a, !1, null, null, void 0);
        break;

      default:
        a.memoizedState = null;
    }
    return a.child;
  }

  function ke(b, a, c) {
    null !== b && (a.dependencies = b.dependencies);
    if (a.childExpirationTime < c) return null;
    if (null !== b && a.child !== b.child) throw p(Error(153));

    if (null !== a.child) {
      b = a.child;
      c = Tc(b, b.pendingProps, b.expirationTime);
      a.child = c;

      for (c.return = a; null !== b.sibling;) b = b.sibling, c = c.sibling = Tc(b, b.pendingProps, b.expirationTime), c.return = a;

      c.sibling = null;
    }

    return a.child;
  }

  function xe(b) {
    b.effectTag |= 4;
  }

  var ye = void 0,
      ze = void 0,
      Ae = void 0,
      Be = void 0;
  if (A) ye = function (b, a) {
    for (var c = a.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Fa(b, c.stateNode);else if (20 === c.tag) Fa(b, c.stateNode.instance);else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === a) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === a) return;
        c = c.return;
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, ze = function () {}, Ae = function (b, a, c, d, e) {
    b = b.memoizedProps;

    if (b !== d) {
      var f = a.stateNode,
          g = cd(L.current);
      c = Ha(f, c, b, d, e, g);
      (a.updateQueue = c) && xe(a);
    }
  }, Be = function (b, a, c, d) {
    c !== d && xe(a);
  };else if (Pa) {
    ye = function (b, a, c, d) {
      for (var e = a.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = kb(f, e.type, e.memoizedProps, e));
          Fa(b, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = lb(f, e.memoizedProps, e)), Fa(b, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, ye(b, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === a) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === a) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    var Ce = function (b, a, c, d) {
      for (var e = a.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = kb(f, e.type, e.memoizedProps, e));
          gb(b, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = lb(f, e.memoizedProps, e)), gb(b, f);else if (4 !== e.tag) {
          if (13 === e.tag && 0 !== (e.effectTag & 4) && (f = null !== e.memoizedState)) {
            var g = e.child;

            if (null !== g && (null !== g.child && (g.child.return = g, Ce(b, g, !0, f)), f = g.sibling, null !== f)) {
              f.return = e;
              e = f;
              continue;
            }
          }

          if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }

        if (e === a) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === a) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    };

    ze = function (b) {
      var a = b.stateNode;

      if (null !== b.firstEffect) {
        var c = a.containerInfo,
            d = fb(c);
        Ce(d, b, !1, !1);
        a.pendingChildren = d;
        xe(b);
        hb(c, d);
      }
    };

    Ae = function (b, a, c, d, e) {
      var f = b.stateNode,
          g = b.memoizedProps;
      if ((b = null === a.firstEffect) && g === d) a.stateNode = f;else {
        var h = a.stateNode,
            k = cd(L.current),
            l = null;
        g !== d && (l = Ha(h, c, g, d, e, k));
        b && null === l ? a.stateNode = f : (f = eb(f, l, c, g, d, a, b, h), Ga(f, c, d, e, k) && xe(a), a.stateNode = f, b ? xe(a) : ye(f, a, !1, !1));
      }
    };

    Be = function (b, a, c, d) {
      c !== d && (b = cd(bd.current), c = cd(L.current), a.stateNode = Ka(d, b, c, a), xe(a));
    };
  } else ze = function () {}, Ae = function () {}, Be = function () {};

  function De(b, a) {
    switch (b.tailMode) {
      case "hidden":
        a = b.tail;

        for (var c = null; null !== a;) null !== a.alternate && (c = a), a = a.sibling;

        null === c ? b.tail = null : c.sibling = null;
        break;

      case "collapsed":
        c = b.tail;

        for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;

        null === d ? a || null === b.tail ? b.tail = null : b.tail.sibling = null : d.sibling = null;
    }
  }

  function Ee(b) {
    switch (b.tag) {
      case 1:
        F(b.type) && zb(b);
        var a = b.effectTag;
        return a & 2048 ? (b.effectTag = a & -2049 | 64, b) : null;

      case 3:
        ed(b);
        Ab(b);
        a = b.effectTag;
        if (0 !== (a & 64)) throw p(Error(285));
        b.effectTag = a & -2049 | 64;
        return b;

      case 5:
        return gd(b), null;

      case 13:
        return B(M, b), a = b.effectTag, a & 2048 ? (b.effectTag = a & -2049 | 64, b) : null;

      case 18:
        return null;

      case 19:
        return B(M, b), null;

      case 4:
        return ed(b), null;

      case 10:
        return oc(b), null;

      default:
        return null;
    }
  }

  function Fe(b, a) {
    return {
      value: b,
      source: a,
      stack: tb(a)
    };
  }

  var Ge = "function" === typeof WeakSet ? WeakSet : Set;

  function He(b, a) {
    var c = a.source,
        d = a.stack;
    null === d && null !== c && (d = tb(c));
    null !== c && sa(c.type);
    a = a.value;
    null !== b && 1 === b.tag && sa(b.type);

    try {
      console.error(a);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }

  function Ie(b, a) {
    try {
      a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
    } catch (c) {
      Je(b, c);
    }
  }

  function Ke(b) {
    var a = b.ref;
    if (null !== a) if ("function" === typeof a) try {
      a(null);
    } catch (c) {
      Je(b, c);
    } else a.current = null;
  }

  function Le(b, a, c) {
    c = c.updateQueue;
    c = null !== c ? c.lastEffect : null;

    if (null !== c) {
      var d = c = c.next;

      do {
        if ((d.tag & b) !== md) {
          var e = d.destroy;
          d.destroy = void 0;
          void 0 !== e && e();
        }

        (d.tag & a) !== md && (e = d.create, d.destroy = e());
        d = d.next;
      } while (d !== c);
    }
  }

  function Me(b, a) {
    "function" === typeof Ne && Ne(b);

    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        var c = b.updateQueue;

        if (null !== c && (c = c.lastEffect, null !== c)) {
          var d = c.next;
          $b(97 < a ? 97 : a, function () {
            var a = d;

            do {
              var c = a.destroy;

              if (void 0 !== c) {
                var g = b;

                try {
                  c();
                } catch (h) {
                  Je(g, h);
                }
              }

              a = a.next;
            } while (a !== d);
          });
        }

        break;

      case 1:
        Ke(b);
        a = b.stateNode;
        "function" === typeof a.componentWillUnmount && Ie(b, a);
        break;

      case 5:
        Ke(b);
        break;

      case 4:
        A ? Oe(b, a) : Pa && Pe(b);
    }
  }

  function Qe(b, a) {
    for (var c = b;;) if (Me(c, a), null === c.child || A && 4 === c.tag) {
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }

      c.sibling.return = c.return;
      c = c.sibling;
    } else c.child.return = c, c = c.child;
  }

  function Pe(b) {
    if (Pa) {
      b = b.stateNode.containerInfo;
      var a = fb(b);
      jb(b, a);
    }
  }

  function Re(b) {
    return 5 === b.tag || 3 === b.tag || 4 === b.tag;
  }

  function Se(b) {
    if (A) {
      a: {
        for (var a = b.return; null !== a;) {
          if (Re(a)) {
            var c = a;
            break a;
          }

          a = a.return;
        }

        throw p(Error(160));
      }

      a = c.stateNode;

      switch (c.tag) {
        case 5:
          var d = !1;
          break;

        case 3:
          a = a.containerInfo;
          d = !0;
          break;

        case 4:
          a = a.containerInfo;
          d = !0;
          break;

        default:
          throw p(Error(161));
      }

      c.effectTag & 16 && ($a(a), c.effectTag &= -17);

      a: b: for (c = b;;) {
        for (; null === c.sibling;) {
          if (null === c.return || Re(c.return)) {
            c = null;
            break a;
          }

          c = c.return;
        }

        c.sibling.return = c.return;

        for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
          if (c.effectTag & 2) continue b;
          if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
        }

        if (!(c.effectTag & 2)) {
          c = c.stateNode;
          break a;
        }
      }

      for (var e = b;;) {
        var f = 5 === e.tag || 6 === e.tag;
        if (f || 20 === e.tag) f = f ? e.stateNode : e.stateNode.instance, c ? d ? Xa(a, f, c) : Wa(a, f, c) : d ? Sa(a, f) : Ra(a, f);else if (4 !== e.tag && null !== e.child) {
          e.child.return = e;
          e = e.child;
          continue;
        }
        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }

        e.sibling.return = e.return;
        e = e.sibling;
      }
    }
  }

  function Oe(b, a) {
    for (var c = b, d = !1, e = void 0, f = void 0;;) {
      if (!d) {
        d = c.return;

        a: for (;;) {
          if (null === d) throw p(Error(160));
          e = d.stateNode;

          switch (d.tag) {
            case 5:
              f = !1;
              break a;

            case 3:
              e = e.containerInfo;
              f = !0;
              break a;

            case 4:
              e = e.containerInfo;
              f = !0;
              break a;
          }

          d = d.return;
        }

        d = !0;
      }

      if (5 === c.tag || 6 === c.tag) Qe(c, a), f ? Za(e, c.stateNode) : Ya(e, c.stateNode);else if (20 === c.tag) {
        var g = c.stateNode.instance;
        Qe(c, a);
        f ? Za(e, g) : Ya(e, g);
      } else if (4 === c.tag) {
        if (null !== c.child) {
          e = c.stateNode.containerInfo;
          f = !0;
          c.child.return = c;
          c = c.child;
          continue;
        }
      } else if (Me(c, a), null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c.return || c.return === b) return;
        c = c.return;
        4 === c.tag && (d = !1);
      }

      c.sibling.return = c.return;
      c = c.sibling;
    }
  }

  function Te(b, a) {
    if (A) switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Le(od, pd, a);
        break;

      case 1:
        break;

      case 5:
        var c = a.stateNode;

        if (null != c) {
          var d = a.memoizedProps;
          b = null !== b ? b.memoizedProps : d;
          var e = a.type,
              f = a.updateQueue;
          a.updateQueue = null;
          null !== f && Va(c, f, e, b, d, a);
        }

        break;

      case 6:
        if (null === a.stateNode) throw p(Error(162));
        c = a.memoizedProps;
        Ta(a.stateNode, null !== b ? b.memoizedProps : c, c);
        break;

      case 3:
        break;

      case 12:
        break;

      case 13:
        Ue(a);
        Ve(a);
        break;

      case 19:
        Ve(a);
        break;

      case 17:
        break;

      case 20:
        break;

      default:
        throw p(Error(163));
    } else {
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Le(od, pd, a);
          return;

        case 12:
          return;

        case 13:
          Ue(a);
          Ve(a);
          return;

        case 19:
          Ve(a);
          return;
      }

      if (Pa) switch (a.tag) {
        case 1:
        case 5:
        case 6:
        case 20:
          break;

        case 3:
        case 4:
          a = a.stateNode;
          jb(a.containerInfo, a.pendingChildren);
          break;

        default:
          throw p(Error(163));
      }
    }
  }

  function Ue(b) {
    var a = b;
    if (null === b.memoizedState) var c = !1;else c = !0, a = b.child, We = G();
    if (A && null !== a) a: if (b = a, A) for (a = b;;) {
      if (5 === a.tag) {
        var d = a.stateNode;
        c ? ab(d) : cb(a.stateNode, a.memoizedProps);
      } else if (6 === a.tag) d = a.stateNode, c ? bb(d) : db(d, a.memoizedProps);else if (13 === a.tag && null !== a.memoizedState) {
        d = a.child.sibling;
        d.return = a;
        a = d;
        continue;
      } else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }

      if (a === b) break a;

      for (; null === a.sibling;) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }

      a.sibling.return = a.return;
      a = a.sibling;
    }
  }

  function Ve(b) {
    var a = b.updateQueue;

    if (null !== a) {
      b.updateQueue = null;
      var c = b.stateNode;
      null === c && (c = b.stateNode = new Ge());
      a.forEach(function (a) {
        var d = Xe.bind(null, b, a);
        c.has(a) || (c.add(a), a.then(d, d));
      });
    }
  }

  var Ye = "function" === typeof WeakMap ? WeakMap : Map;

  function Ze(b, a, c) {
    c = vc(c, null);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = a.value;

    c.callback = function () {
      $e || ($e = !0, af = d);
      He(b, a);
    };

    return c;
  }

  function bf(b, a, c) {
    c = vc(c, null);
    c.tag = 3;
    var d = b.type.getDerivedStateFromError;

    if ("function" === typeof d) {
      var e = a.value;

      c.payload = function () {
        He(b, a);
        return d(e);
      };
    }

    var f = b.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      "function" !== typeof d && (null === cf ? cf = new Set([this]) : cf.add(this), He(b, a));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }

  var df = Math.ceil,
      ef = q.ReactCurrentDispatcher,
      ff = q.ReactCurrentOwner,
      T = 0,
      gf = 8,
      hf = 16,
      jf = 32,
      kf = 0,
      lf = 1,
      mf = 2,
      nf = 3,
      of = 4,
      U = T,
      pf = null,
      V = null,
      W = 0,
      X = kf,
      qf = 1073741823,
      rf = 1073741823,
      sf = null,
      tf = !1,
      We = 0,
      uf = 500,
      Y = null,
      $e = !1,
      af = null,
      cf = null,
      vf = !1,
      wf = null,
      xf = 90,
      yf = 0,
      zf = null,
      Af = 0,
      Bf = null,
      Cf = 0;

  function K() {
    return (U & (hf | jf)) !== T ? 1073741821 - (G() / 10 | 0) : 0 !== Cf ? Cf : Cf = 1073741821 - (G() / 10 | 0);
  }

  function Ic(b, a, c) {
    a = a.mode;
    if (0 === (a & 2)) return 1073741823;
    var d = Yb();
    if (0 === (a & 4)) return 99 === d ? 1073741823 : 1073741822;
    if ((U & hf) !== T) return W;
    if (null !== c) b = 1073741821 - 25 * (((1073741821 - b + (c.timeoutMs | 0 || 5E3) / 10) / 25 | 0) + 1);else switch (d) {
      case 99:
        b = 1073741823;
        break;

      case 98:
        b = 1073741821 - 10 * (((1073741821 - b + 15) / 10 | 0) + 1);
        break;

      case 97:
      case 96:
        b = 1073741821 - 25 * (((1073741821 - b + 500) / 25 | 0) + 1);
        break;

      case 95:
        b = 1;
        break;

      default:
        throw p(Error(326));
    }
    null !== pf && b === W && --b;
    return b;
  }

  var Df = 0;

  function Jc(b, a) {
    if (50 < Af) throw Af = 0, Bf = null, p(Error(185));
    b = Ef(b, a);

    if (null !== b) {
      b.pingTime = 0;
      var c = Yb();
      if (1073741823 === a) {
        if ((U & gf) !== T && (U & (hf | jf)) === T) for (var d = Z(b, 1073741823, !0); null !== d;) d = d(!0);else Ff(b, 99, 1073741823), U === T && H();
      } else Ff(b, c, a);
      (U & 4) === T || 98 !== c && 99 !== c || (null === zf ? zf = new Map([[b, a]]) : (c = zf.get(b), (void 0 === c || c > a) && zf.set(b, a)));
    }
  }

  function Ef(b, a) {
    b.expirationTime < a && (b.expirationTime = a);
    var c = b.alternate;
    null !== c && c.expirationTime < a && (c.expirationTime = a);
    var d = b.return,
        e = null;
    if (null === d && 3 === b.tag) e = b.stateNode;else for (; null !== d;) {
      c = d.alternate;
      d.childExpirationTime < a && (d.childExpirationTime = a);
      null !== c && c.childExpirationTime < a && (c.childExpirationTime = a);

      if (null === d.return && 3 === d.tag) {
        e = d.stateNode;
        break;
      }

      d = d.return;
    }
    null !== e && (a > e.firstPendingTime && (e.firstPendingTime = a), b = e.lastPendingTime, 0 === b || a < b) && (e.lastPendingTime = a);
    return e;
  }

  function Ff(b, a, c) {
    if (b.callbackExpirationTime < c) {
      var d = b.callbackNode;
      null !== d && d !== Rb && Hb(d);
      b.callbackExpirationTime = c;
      1073741823 === c ? b.callbackNode = bc(Hf.bind(null, b, Z.bind(null, b, c))) : (d = null, 1 !== c && (d = {
        timeout: 10 * (1073741821 - c) - G()
      }), b.callbackNode = ac(a, Hf.bind(null, b, Z.bind(null, b, c)), d));
    }
  }

  function Hf(b, a, c) {
    var d = b.callbackNode,
        e = null;

    try {
      return e = a(c), null !== e ? Hf.bind(null, b, e) : null;
    } finally {
      null === e && d === b.callbackNode && (b.callbackNode = null, b.callbackExpirationTime = 0);
    }
  }

  function If(b, a) {
    var c = b.firstBatch;
    return null !== c && c._defer && c._expirationTime >= a ? (ac(97, function () {
      c._onComplete();

      return null;
    }), !0) : !1;
  }

  function Jf() {
    if (null !== zf) {
      var b = zf;
      zf = null;
      b.forEach(function (a, b) {
        bc(Z.bind(null, b, a));
      });
      H();
    }
  }

  function Kf(b, a) {
    b.finishedWork = null;
    b.finishedExpirationTime = 0;
    var c = b.timeoutHandle;
    c !== Na && (b.timeoutHandle = Na, Ma(c));
    if (null !== V) for (c = V.return; null !== c;) {
      var d = c;

      switch (d.tag) {
        case 1:
          var e = d.type.childContextTypes;
          null !== e && void 0 !== e && zb(d);
          break;

        case 3:
          ed(d);
          Ab(d);
          break;

        case 5:
          gd(d);
          break;

        case 4:
          ed(d);
          break;

        case 13:
          B(M, d);
          break;

        case 19:
          B(M, d);
          break;

        case 10:
          oc(d);
      }

      c = c.return;
    }
    pf = b;
    V = Tc(b.current, null, a);
    W = a;
    X = kf;
    rf = qf = 1073741823;
    sf = null;
    tf = !1;
  }

  function Z(b, a, c) {
    if ((U & (hf | jf)) !== T) throw p(Error(327));
    if (b.firstPendingTime < a) return null;
    if (c && b.finishedExpirationTime === a) return Lf.bind(null, b);
    Mf();
    if (b !== pf || a !== W) Kf(b, a);else if (X === nf) if (tf) Kf(b, a);else {
      var d = b.lastPendingTime;
      if (d < a) return Z.bind(null, b, d);
    }

    if (null !== V) {
      d = U;
      U |= hf;
      var e = ef.current;
      null === e && (e = Kd);
      ef.current = Kd;

      if (c) {
        if (1073741823 !== a) {
          var f = K();
          if (f < a) return U = d, mc(), ef.current = e, Z.bind(null, b, f);
        }
      } else Cf = 0;

      do try {
        if (c) for (; null !== V;) V = Nf(V);else for (; null !== V && !Ib();) V = Nf(V);
        break;
      } catch (P) {
        mc();
        Ld();
        f = V;
        if (null === f || null === f.return) throw Kf(b, a), U = d, P;

        a: {
          var g = b,
              h = f.return,
              k = f,
              l = P,
              m = W;
          k.effectTag |= 1024;
          k.firstEffect = k.lastEffect = null;

          if (null !== l && "object" === typeof l && "function" === typeof l.then) {
            var y = l,
                x = 0 !== (M.current & id);
            l = h;

            do {
              var t;
              if (t = 13 === l.tag) null !== l.memoizedState ? t = !1 : (t = l.memoizedProps, t = void 0 === t.fallback ? !1 : !0 !== t.unstable_avoidThisFallback ? !0 : x ? !1 : !0);

              if (t) {
                h = l.updateQueue;
                null === h ? (h = new Set(), h.add(y), l.updateQueue = h) : h.add(y);

                if (0 === (l.mode & 2)) {
                  l.effectTag |= 64;
                  k.effectTag &= -1957;
                  1 === k.tag && (null === k.alternate ? k.tag = 17 : (m = vc(1073741823, null), m.tag = 2, xc(k, m)));
                  k.expirationTime = 1073741823;
                  break a;
                }

                k = g;
                g = m;
                x = k.pingCache;
                null === x ? (x = k.pingCache = new Ye(), h = new Set(), x.set(y, h)) : (h = x.get(y), void 0 === h && (h = new Set(), x.set(y, h)));
                h.has(g) || (h.add(g), k = Of.bind(null, k, y, g), y.then(k, k));
                l.effectTag |= 2048;
                l.expirationTime = m;
                break a;
              }

              l = l.return;
            } while (null !== l);

            l = Error((sa(k.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + tb(k));
          }

          X !== of && (X = lf);
          l = Fe(l, k);
          k = h;

          do {
            switch (k.tag) {
              case 3:
                k.effectTag |= 2048;
                k.expirationTime = m;
                m = Ze(k, l, m);
                yc(k, m);
                break a;

              case 1:
                if (y = l, g = k.type, h = k.stateNode, 0 === (k.effectTag & 64) && ("function" === typeof g.getDerivedStateFromError || null !== h && "function" === typeof h.componentDidCatch && (null === cf || !cf.has(h)))) {
                  k.effectTag |= 2048;
                  k.expirationTime = m;
                  m = bf(k, y, m);
                  yc(k, m);
                  break a;
                }

            }

            k = k.return;
          } while (null !== k);
        }

        V = Pf(f);
      } while (1);

      U = d;
      mc();
      ef.current = e;
      if (null !== V) return Z.bind(null, b, a);
    }

    b.finishedWork = b.current.alternate;
    b.finishedExpirationTime = a;
    if (If(b, a)) return null;
    pf = null;

    switch (X) {
      case kf:
        throw p(Error(328));

      case lf:
        return d = b.lastPendingTime, d < a ? Z.bind(null, b, d) : c ? Lf.bind(null, b) : (Kf(b, a), bc(Z.bind(null, b, a)), null);

      case mf:
        if (1073741823 === qf && !c && (c = We + uf - G(), 10 < c)) {
          if (tf) return Kf(b, a), Z.bind(null, b, a);
          d = b.lastPendingTime;
          if (d < a) return Z.bind(null, b, d);
          b.timeoutHandle = La(Lf.bind(null, b), c);
          return null;
        }

        return Lf.bind(null, b);

      case nf:
        if (!c) {
          if (tf) return Kf(b, a), Z.bind(null, b, a);
          c = b.lastPendingTime;
          if (c < a) return Z.bind(null, b, c);
          1073741823 !== rf ? c = 10 * (1073741821 - rf) - G() : 1073741823 === qf ? c = 0 : (c = 10 * (1073741821 - qf) - 5E3, d = G(), a = 10 * (1073741821 - a) - d, c = d - c, 0 > c && (c = 0), c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * df(c / 1960)) - c, a < c && (c = a));
          if (10 < c) return b.timeoutHandle = La(Lf.bind(null, b), c), null;
        }

        return Lf.bind(null, b);

      case of:
        return !c && 1073741823 !== qf && null !== sf && (d = qf, e = sf, a = e.busyMinDurationMs | 0, 0 >= a ? a = 0 : (c = e.busyDelayMs | 0, d = G() - (10 * (1073741821 - d) - (e.timeoutMs | 0 || 5E3)), a = d <= c ? 0 : c + a - d), 10 < a) ? (b.timeoutHandle = La(Lf.bind(null, b), a), null) : Lf.bind(null, b);

      default:
        throw p(Error(329));
    }
  }

  function Cc(b, a) {
    b < qf && 1 < b && (qf = b);
    null !== a && b < rf && 1 < b && (rf = b, sf = a);
  }

  function Nf(b) {
    var a = Qf(b.alternate, b, W);
    b.memoizedProps = b.pendingProps;
    null === a && (a = Pf(b));
    ff.current = null;
    return a;
  }

  function Pf(b) {
    V = b;

    do {
      var a = V.alternate;
      b = V.return;

      if (0 === (V.effectTag & 1024)) {
        a: {
          var c = a;
          a = V;
          var d = W,
              e = a.pendingProps;

          switch (a.tag) {
            case 2:
              break;

            case 16:
              break;

            case 15:
            case 0:
              break;

            case 1:
              F(a.type) && zb(a);
              break;

            case 3:
              ed(a);
              Ab(a);
              d = a.stateNode;
              d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
              if (null === c || null === c.child) de(a), a.effectTag &= -3;
              ze(a);
              break;

            case 5:
              gd(a);
              d = cd(bd.current);
              var f = a.type;
              if (null !== c && null != a.stateNode) Ae(c, a, f, e, d), c.ref !== a.ref && (a.effectTag |= 128);else if (e) {
                c = cd(L.current);

                if (de(a)) {
                  e = a;
                  if (!Qa) throw p(Error(175));
                  c = qb(e.stateNode, e.type, e.memoizedProps, d, c, e);
                  e.updateQueue = c;
                  null !== c && xe(a);
                } else {
                  var g = Ea(f, e, d, c, a);
                  ye(g, a, !1, !1);
                  Ga(g, f, e, d, c) && xe(a);
                  a.stateNode = g;
                }

                null !== a.ref && (a.effectTag |= 128);
              } else if (null === a.stateNode) throw p(Error(166));
              break;

            case 6:
              if (c && null != a.stateNode) Be(c, a, c.memoizedProps, e);else {
                if ("string" !== typeof e && null === a.stateNode) throw p(Error(166));
                c = cd(bd.current);
                d = cd(L.current);

                if (de(a)) {
                  c = a;
                  if (!Qa) throw p(Error(176));
                  rb(c.stateNode, c.memoizedProps, c) && xe(a);
                } else a.stateNode = Ka(e, c, d, a);
              }
              break;

            case 11:
              break;

            case 13:
              B(M, a);
              e = a.memoizedState;

              if (0 !== (a.effectTag & 64)) {
                a.expirationTime = d;
                break a;
              }

              d = null !== e;
              e = !1;
              null === c ? de(a) : (f = c.memoizedState, e = null !== f, d || null === f || (f = c.child.sibling, null !== f && (g = a.firstEffect, null !== g ? (a.firstEffect = f, f.nextEffect = g) : (a.firstEffect = a.lastEffect = f, f.nextEffect = null), f.effectTag = 8)));
              if (d && !e && 0 !== (a.mode & 2)) if (null === c && !0 !== a.memoizedProps.unstable_avoidThisFallback || 0 !== (M.current & id)) X === kf && (X = mf);else if (X === kf || X === mf) X = nf;
              Pa && d && (a.effectTag |= 4);
              A && (d || e) && (a.effectTag |= 4);
              break;

            case 7:
              break;

            case 8:
              break;

            case 12:
              break;

            case 4:
              ed(a);
              ze(a);
              break;

            case 10:
              oc(a);
              break;

            case 9:
              break;

            case 14:
              break;

            case 17:
              F(a.type) && zb(a);
              break;

            case 18:
              break;

            case 19:
              B(M, a);
              e = a.memoizedState;
              if (null === e) break;
              f = 0 !== (a.effectTag & 64);
              g = e.rendering;
              if (null === g) {
                if (f) De(e, !1);else {
                  if (X !== kf || null !== c && 0 !== (c.effectTag & 64)) for (c = a.child; null !== c;) {
                    g = kd(c);

                    if (null !== g) {
                      a.effectTag |= 64;
                      De(e, !1);
                      c = g.updateQueue;
                      null !== c && (a.updateQueue = c, a.effectTag |= 4);
                      a.firstEffect = a.lastEffect = null;
                      c = d;

                      for (d = a.child; null !== d;) e = d, f = c, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, g = e.alternate, null === g ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = g.childExpirationTime, e.expirationTime = g.expirationTime, e.child = g.child, e.memoizedProps = g.memoizedProps, e.memoizedState = g.memoizedState, e.updateQueue = g.updateQueue, f = g.dependencies, e.dependencies = null === f ? null : {
                        expirationTime: f.expirationTime,
                        firstContext: f.firstContext,
                        responders: f.responders
                      }), d = d.sibling;

                      C(M, M.current & hd | jd, a);
                      a = a.child;
                      break a;
                    }

                    c = c.sibling;
                  }
                }
              } else {
                if (!f) if (c = kd(g), null !== c) {
                  if (a.effectTag |= 64, f = !0, De(e, !0), null === e.tail && "hidden" === e.tailMode) {
                    c = c.updateQueue;
                    null !== c && (a.updateQueue = c, a.effectTag |= 4);
                    a = a.lastEffect = e.lastEffect;
                    null !== a && (a.nextEffect = null);
                    break;
                  }
                } else G() > e.tailExpiration && 1 < d && (a.effectTag |= 64, f = !0, De(e, !1), a.expirationTime = a.childExpirationTime = d - 1);
                e.isBackwards ? (g.sibling = a.child, a.child = g) : (c = e.last, null !== c ? c.sibling = g : a.child = g, e.last = g);
              }

              if (null !== e.tail) {
                0 === e.tailExpiration && (e.tailExpiration = G() + 500);
                c = e.tail;
                e.rendering = c;
                e.tail = c.sibling;
                e.lastEffect = a.lastEffect;
                c.sibling = null;
                d = M.current;
                d = f ? d & hd | jd : d & hd;
                C(M, d, a);
                a = c;
                break a;
              }

              break;

            case 20:
              break;

            default:
              throw p(Error(156));
          }

          a = null;
        }

        c = V;

        if (1 === W || 1 !== c.childExpirationTime) {
          d = 0;

          for (e = c.child; null !== e;) f = e.expirationTime, g = e.childExpirationTime, f > d && (d = f), g > d && (d = g), e = e.sibling;

          c.childExpirationTime = d;
        }

        if (null !== a) return a;
        null !== b && 0 === (b.effectTag & 1024) && (null === b.firstEffect && (b.firstEffect = V.firstEffect), null !== V.lastEffect && (null !== b.lastEffect && (b.lastEffect.nextEffect = V.firstEffect), b.lastEffect = V.lastEffect), 1 < V.effectTag && (null !== b.lastEffect ? b.lastEffect.nextEffect = V : b.firstEffect = V, b.lastEffect = V));
      } else {
        a = Ee(V, W);
        if (null !== a) return a.effectTag &= 1023, a;
        null !== b && (b.firstEffect = b.lastEffect = null, b.effectTag |= 1024);
      }

      a = V.sibling;
      if (null !== a) return a;
      V = b;
    } while (null !== V);

    X === kf && (X = of);
    return null;
  }

  function Lf(b) {
    var a = Yb();
    $b(99, Rf.bind(null, b, a));
    null !== wf && ac(97, function () {
      Mf();
      return null;
    });
    return null;
  }

  function Rf(b, a) {
    Mf();
    if ((U & (hf | jf)) !== T) throw p(Error(327));
    var c = b.finishedWork,
        d = b.finishedExpirationTime;
    if (null === c) return null;
    b.finishedWork = null;
    b.finishedExpirationTime = 0;
    if (c === b.current) throw p(Error(177));
    b.callbackNode = null;
    b.callbackExpirationTime = 0;
    var e = c.expirationTime,
        f = c.childExpirationTime;
    e = f > e ? f : e;
    b.firstPendingTime = e;
    e < b.lastPendingTime && (b.lastPendingTime = e);
    b === pf && (V = pf = null, W = 0);
    1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;

    if (null !== e) {
      f = U;
      U |= jf;
      ff.current = null;
      Ca(b.containerInfo);
      Y = e;

      do try {
        for (; null !== Y;) {
          if (0 !== (Y.effectTag & 256)) {
            var g = Y.alternate,
                h = Y;

            switch (h.tag) {
              case 0:
              case 11:
              case 15:
                Le(nd, md, h);
                break;

              case 1:
                if (h.effectTag & 256 && null !== g) {
                  var k = g.memoizedProps,
                      l = g.memoizedState,
                      m = h.stateNode,
                      y = m.getSnapshotBeforeUpdate(h.elementType === h.type ? k : I(h.type, k), l);
                  m.__reactInternalSnapshotBeforeUpdate = y;
                }

                break;

              case 3:
              case 5:
              case 6:
              case 4:
              case 17:
                break;

              default:
                throw p(Error(163));
            }
          }

          Y = Y.nextEffect;
        }
      } catch (ib) {
        if (null === Y) throw p(Error(330));
        Je(Y, ib);
        Y = Y.nextEffect;
      } while (null !== Y);

      Y = e;

      do try {
        for (g = a; null !== Y;) {
          var x = Y.effectTag;
          x & 16 && A && $a(Y.stateNode);

          if (x & 128) {
            var t = Y.alternate;

            if (null !== t) {
              var P = t.ref;
              null !== P && ("function" === typeof P ? P(null) : P.current = null);
            }
          }

          switch (x & 14) {
            case 2:
              Se(Y);
              Y.effectTag &= -3;
              break;

            case 6:
              Se(Y);
              Y.effectTag &= -3;
              Te(Y.alternate, Y);
              break;

            case 4:
              Te(Y.alternate, Y);
              break;

            case 8:
              k = Y;
              l = g;
              A ? Oe(k, l) : Qe(k, l);
              k.return = null;
              k.child = null;
              k.memoizedState = null;
              k.updateQueue = null;
              k.dependencies = null;
              var Q = k.alternate;
              null !== Q && (Q.return = null, Q.child = null, Q.memoizedState = null, Q.updateQueue = null, Q.dependencies = null);
          }

          Y = Y.nextEffect;
        }
      } catch (ib) {
        if (null === Y) throw p(Error(330));
        Je(Y, ib);
        Y = Y.nextEffect;
      } while (null !== Y);

      Da(b.containerInfo);
      b.current = c;
      Y = e;

      do try {
        for (x = d; null !== Y;) {
          var z = Y.effectTag;

          if (z & 36) {
            var r = Y.alternate;
            t = Y;
            P = x;

            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Le(qd, rd, t);
                break;

              case 1:
                var w = t.stateNode;
                if (t.effectTag & 4) if (null === r) w.componentDidMount();else {
                  var va = t.elementType === t.type ? r.memoizedProps : I(t.type, r.memoizedProps);
                  w.componentDidUpdate(va, r.memoizedState, w.__reactInternalSnapshotBeforeUpdate);
                }
                var ge = t.updateQueue;
                null !== ge && Dc(t, ge, w, P);
                break;

              case 3:
                var he = t.updateQueue;

                if (null !== he) {
                  Q = null;
                  if (null !== t.child) switch (t.child.tag) {
                    case 5:
                      Q = za(t.child.stateNode);
                      break;

                    case 1:
                      Q = t.child.stateNode;
                  }
                  Dc(t, he, Q, P);
                }

                break;

              case 5:
                var Gf = t.stateNode;
                null === r && t.effectTag & 4 && Ua(Gf, t.type, t.memoizedProps, t);
                break;

              case 6:
                break;

              case 4:
                break;

              case 12:
                break;

              case 13:
              case 19:
              case 17:
              case 20:
                break;

              default:
                throw p(Error(163));
            }
          }

          if (z & 128) {
            var Ub = Y.ref;

            if (null !== Ub) {
              var ie = Y.stateNode;

              switch (Y.tag) {
                case 5:
                  var u = za(ie);
                  break;

                default:
                  u = ie;
              }

              "function" === typeof Ub ? Ub(u) : Ub.current = u;
            }
          }

          z & 512 && (vf = !0);
          Y = Y.nextEffect;
        }
      } catch (ib) {
        if (null === Y) throw p(Error(330));
        Je(Y, ib);
        Y = Y.nextEffect;
      } while (null !== Y);

      Y = null;
      Sb();
      U = f;
    } else b.current = c;

    if (vf) vf = !1, wf = b, yf = d, xf = a;else for (Y = e; null !== Y;) a = Y.nextEffect, Y.nextEffect = null, Y = a;
    a = b.firstPendingTime;
    0 !== a ? (z = K(), z = dc(z, a), Ff(b, z, a)) : cf = null;
    "function" === typeof Sf && Sf(c.stateNode, d);
    1073741823 === a ? b === Bf ? Af++ : (Af = 0, Bf = b) : Af = 0;
    if ($e) throw $e = !1, b = af, af = null, b;
    if ((U & gf) !== T) return null;
    H();
    return null;
  }

  function Mf() {
    if (null === wf) return !1;
    var b = wf,
        a = yf,
        c = xf;
    wf = null;
    yf = 0;
    xf = 90;
    return $b(97 < c ? 97 : c, Tf.bind(null, b, a));
  }

  function Tf(b) {
    if ((U & (hf | jf)) !== T) throw p(Error(331));
    var a = U;
    U |= jf;

    for (b = b.current.firstEffect; null !== b;) {
      try {
        var c = b;
        if (0 !== (c.effectTag & 512)) switch (c.tag) {
          case 0:
          case 11:
          case 15:
            Le(td, md, c), Le(md, sd, c);
        }
      } catch (d) {
        if (null === b) throw p(Error(330));
        Je(b, d);
      }

      c = b.nextEffect;
      b.nextEffect = null;
      b = c;
    }

    U = a;
    H();
    return !0;
  }

  function Uf(b, a, c) {
    a = Fe(c, a);
    a = Ze(b, a, 1073741823);
    xc(b, a);
    b = Ef(b, 1073741823);
    null !== b && Ff(b, 99, 1073741823);
  }

  function Je(b, a) {
    if (3 === b.tag) Uf(b, b, a);else for (var c = b.return; null !== c;) {
      if (3 === c.tag) {
        Uf(c, b, a);
        break;
      } else if (1 === c.tag) {
        var d = c.stateNode;

        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === cf || !cf.has(d))) {
          b = Fe(a, b);
          b = bf(c, b, 1073741823);
          xc(c, b);
          c = Ef(c, 1073741823);
          null !== c && Ff(c, 99, 1073741823);
          break;
        }
      }

      c = c.return;
    }
  }

  function Of(b, a, c) {
    var d = b.pingCache;
    null !== d && d.delete(a);
    pf === b && W === c ? X === nf || X === mf && 1073741823 === qf && G() - We < uf ? Kf(b, W) : tf = !0 : b.lastPendingTime < c || (a = b.pingTime, 0 !== a && a < c || (b.pingTime = c, b.finishedExpirationTime === c && (b.finishedExpirationTime = 0, b.finishedWork = null), a = K(), a = dc(a, c), Ff(b, a, c)));
  }

  function Xe(b, a) {
    var c = b.stateNode;
    null !== c && c.delete(a);
    c = K();
    a = Ic(c, b, null);
    c = dc(c, a);
    b = Ef(b, a);
    null !== b && Ff(b, c, a);
  }

  var Qf = void 0;

  Qf = function (b, a, c) {
    var d = a.expirationTime;

    if (null !== b) {
      var e = a.pendingProps;
      if (b.memoizedProps !== e || E.current) rc = !0;else if (d < c) {
        rc = !1;

        switch (a.tag) {
          case 3:
            se(a);
            ee();
            break;

          case 5:
            fd(a);
            if (a.mode & 4 && 1 !== c && Ja(a.type, e)) return a.expirationTime = a.childExpirationTime = 1, null;
            break;

          case 1:
            F(a.type) && Db(a);
            break;

          case 4:
            dd(a, a.stateNode.containerInfo);
            break;

          case 10:
            nc(a, a.memoizedProps.value);
            break;

          case 13:
            if (null !== a.memoizedState) {
              d = a.child.childExpirationTime;
              if (0 !== d && d >= c) return ue(b, a, c);
              C(M, M.current & hd, a);
              a = ke(b, a, c);
              return null !== a ? a.sibling : null;
            }

            C(M, M.current & hd, a);
            break;

          case 19:
            d = a.childExpirationTime >= c;

            if (0 !== (b.effectTag & 64)) {
              if (d) return we(b, a, c);
              a.effectTag |= 64;
            }

            e = a.memoizedState;
            null !== e && (e.rendering = null, e.tail = null);
            C(M, M.current, a);
            if (!d) return null;
        }

        return ke(b, a, c);
      }
    } else rc = !1;

    a.expirationTime = 0;

    switch (a.tag) {
      case 2:
        d = a.type;
        null !== b && (b.alternate = null, a.alternate = null, a.effectTag |= 2);
        b = a.pendingProps;
        e = yb(a, D.current);
        qc(a, c);
        e = Hd(null, a, d, b, e, c);
        a.effectTag |= 1;

        if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
          a.tag = 1;
          Ld();

          if (F(d)) {
            var f = !0;
            Db(a);
          } else f = !1;

          a.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
          var g = d.getDerivedStateFromProps;
          "function" === typeof g && Hc(a, d, g, b);
          e.updater = Kc;
          a.stateNode = e;
          e._reactInternalFiber = a;
          Oc(a, d, b, c);
          a = re(null, a, d, !0, f, c);
        } else a.tag = 0, S(null, a, e, c), a = a.child;

        return a;

      case 16:
        e = a.elementType;
        null !== b && (b.alternate = null, a.alternate = null, a.effectTag |= 2);
        b = a.pendingProps;
        e = hc(e);
        a.type = e;
        f = a.tag = Vf(e);
        b = I(e, b);

        switch (f) {
          case 0:
            a = oe(null, a, e, b, c);
            break;

          case 1:
            a = qe(null, a, e, b, c);
            break;

          case 11:
            a = je(null, a, e, b, c);
            break;

          case 14:
            a = le(null, a, e, I(e.type, b), d, c);
            break;

          default:
            throw p(Error(306), e, "");
        }

        return a;

      case 0:
        return d = a.type, e = a.pendingProps, e = a.elementType === d ? e : I(d, e), oe(b, a, d, e, c);

      case 1:
        return d = a.type, e = a.pendingProps, e = a.elementType === d ? e : I(d, e), qe(b, a, d, e, c);

      case 3:
        se(a);
        d = a.updateQueue;
        if (null === d) throw p(Error(282));
        e = a.memoizedState;
        e = null !== e ? e.element : null;
        Bc(a, d, a.pendingProps, null, c);
        d = a.memoizedState.element;
        if (d === e) ee(), a = ke(b, a, c);else {
          e = a.stateNode;
          if (e = (null === b || null === b.child) && e.hydrate) Qa ? (Xd = pb(a.stateNode.containerInfo), Wd = a, e = Yd = !0) : e = !1;
          e ? (a.effectTag |= 2, a.child = Zc(a, null, d, c)) : (S(b, a, d, c), ee());
          a = a.child;
        }
        return a;

      case 5:
        return fd(a), null === b && be(a), d = a.type, e = a.pendingProps, f = null !== b ? b.memoizedProps : null, g = e.children, Ia(d, e) ? g = null : null !== f && Ia(d, f) && (a.effectTag |= 16), pe(b, a), a.mode & 4 && 1 !== c && Ja(d, e) ? (a.expirationTime = a.childExpirationTime = 1, a = null) : (S(b, a, g, c), a = a.child), a;

      case 6:
        return null === b && be(a), null;

      case 13:
        return ue(b, a, c);

      case 4:
        return dd(a, a.stateNode.containerInfo), d = a.pendingProps, null === b ? a.child = Yc(a, null, d, c) : S(b, a, d, c), a.child;

      case 11:
        return d = a.type, e = a.pendingProps, e = a.elementType === d ? e : I(d, e), je(b, a, d, e, c);

      case 7:
        return S(b, a, a.pendingProps, c), a.child;

      case 8:
        return S(b, a, a.pendingProps.children, c), a.child;

      case 12:
        return S(b, a, a.pendingProps.children, c), a.child;

      case 10:
        a: {
          d = a.type._context;
          e = a.pendingProps;
          g = a.memoizedProps;
          f = e.value;
          nc(a, f);

          if (null !== g) {
            var h = g.value;
            f = ec(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;

            if (0 === f) {
              if (g.children === e.children && !E.current) {
                a = ke(b, a, c);
                break a;
              }
            } else for (h = a.child, null !== h && (h.return = a); null !== h;) {
              var k = h.dependencies;

              if (null !== k) {
                g = h.child;

                for (var l = k.firstContext; null !== l;) {
                  if (l.context === d && 0 !== (l.observedBits & f)) {
                    1 === h.tag && (l = vc(c, null), l.tag = 2, xc(h, l));
                    h.expirationTime < c && (h.expirationTime = c);
                    l = h.alternate;
                    null !== l && l.expirationTime < c && (l.expirationTime = c);
                    pc(h.return, c);
                    k.expirationTime < c && (k.expirationTime = c);
                    break;
                  }

                  l = l.next;
                }
              } else g = 10 === h.tag ? h.type === a.type ? null : h.child : h.child;

              if (null !== g) g.return = h;else for (g = h; null !== g;) {
                if (g === a) {
                  g = null;
                  break;
                }

                h = g.sibling;

                if (null !== h) {
                  h.return = g.return;
                  g = h;
                  break;
                }

                g = g.return;
              }
              h = g;
            }
          }

          S(b, a, e.children, c);
          a = a.child;
        }

        return a;

      case 9:
        return e = a.type, f = a.pendingProps, d = f.children, qc(a, c), e = J(e, f.unstable_observedBits), d = d(e), a.effectTag |= 1, S(b, a, d, c), a.child;

      case 14:
        return e = a.type, f = I(e, a.pendingProps), f = I(e.type, f), le(b, a, e, f, d, c);

      case 15:
        return ne(b, a, a.type, a.pendingProps, d, c);

      case 17:
        return d = a.type, e = a.pendingProps, e = a.elementType === d ? e : I(d, e), null !== b && (b.alternate = null, a.alternate = null, a.effectTag |= 2), a.tag = 1, F(d) ? (b = !0, Db(a)) : b = !1, qc(a, c), Mc(a, d, e, c), Oc(a, d, e, c), re(null, a, d, !0, b, c);

      case 19:
        return we(b, a, c);
    }

    throw p(Error(156));
  };

  var Sf = null,
      Ne = null;

  function Wf(b) {
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
    var a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (a.isDisabled || !a.supportsFiber) return !0;

    try {
      var c = a.inject(b);

      Sf = function (b) {
        try {
          a.onCommitFiberRoot(c, b, void 0, 64 === (b.current.effectTag & 64));
        } catch (e) {}
      };

      Ne = function (b) {
        try {
          a.onCommitFiberUnmount(c, b);
        } catch (e) {}
      };
    } catch (d) {}

    return !0;
  }

  function Xf(b, a, c, d) {
    this.tag = b;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = a;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.effectTag = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childExpirationTime = this.expirationTime = 0;
    this.alternate = null;
  }

  function $d(b, a, c, d) {
    return new Xf(b, a, c, d);
  }

  function me(b) {
    b = b.prototype;
    return !(!b || !b.isReactComponent);
  }

  function Vf(b) {
    if ("function" === typeof b) return me(b) ? 1 : 0;

    if (void 0 !== b && null !== b) {
      b = b.$$typeof;
      if (b === la) return 11;
      if (b === oa) return 14;
    }

    return 2;
  }

  function Tc(b, a) {
    var c = b.alternate;
    null === c ? (c = $d(b.tag, a, b.key, b.mode), c.elementType = b.elementType, c.type = b.type, c.stateNode = b.stateNode, c.alternate = b, b.alternate = c) : (c.pendingProps = a, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childExpirationTime = b.childExpirationTime;
    c.expirationTime = b.expirationTime;
    c.child = b.child;
    c.memoizedProps = b.memoizedProps;
    c.memoizedState = b.memoizedState;
    c.updateQueue = b.updateQueue;
    a = b.dependencies;
    c.dependencies = null === a ? null : {
      expirationTime: a.expirationTime,
      firstContext: a.firstContext,
      responders: a.responders
    };
    c.sibling = b.sibling;
    c.index = b.index;
    c.ref = b.ref;
    return c;
  }

  function Vc(b, a, c, d, e, f) {
    var g = 2;
    d = b;
    if ("function" === typeof b) me(b) && (g = 1);else if ("string" === typeof b) g = 5;else a: switch (b) {
      case ea:
        return Xc(c.children, e, f, a);

      case ka:
        g = 8;
        e |= 7;
        break;

      case fa:
        g = 8;
        e |= 1;
        break;

      case ha:
        return b = $d(12, c, a, e | 8), b.elementType = ha, b.type = ha, b.expirationTime = f, b;

      case ma:
        return b = $d(13, c, a, e), b.type = ma, b.elementType = ma, b.expirationTime = f, b;

      case na:
        return b = $d(19, c, a, e), b.elementType = na, b.expirationTime = f, b;

      default:
        if ("object" === typeof b && null !== b) switch (b.$$typeof) {
          case ia:
            g = 10;
            break a;

          case ja:
            g = 9;
            break a;

          case la:
            g = 11;
            break a;

          case oa:
            g = 14;
            break a;

          case pa:
            g = 16;
            d = null;
            break a;
        }
        throw p(Error(130), null == b ? b : typeof b, "");
    }
    a = $d(g, c, a, e);
    a.elementType = b;
    a.type = d;
    a.expirationTime = f;
    return a;
  }

  function Xc(b, a, c, d) {
    b = $d(7, b, d, a);
    b.expirationTime = c;
    return b;
  }

  function Uc(b, a, c) {
    b = $d(6, b, null, a);
    b.expirationTime = c;
    return b;
  }

  function Wc(b, a, c) {
    a = $d(4, null !== b.children ? b.children : [], b.key, a);
    a.expirationTime = c;
    a.stateNode = {
      containerInfo: b.containerInfo,
      pendingChildren: null,
      implementation: b.implementation
    };
    return a;
  }

  function Yf(b, a, c) {
    this.tag = a;
    this.current = null;
    this.containerInfo = b;
    this.pingCache = this.pendingChildren = null;
    this.finishedExpirationTime = 0;
    this.finishedWork = null;
    this.timeoutHandle = Na;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = this.firstBatch = null;
    this.pingTime = this.lastPendingTime = this.firstPendingTime = this.callbackExpirationTime = 0;
  }

  function Zf(b, a, c, d, e, f) {
    var g = a.current;

    a: if (c) {
      c = c._reactInternalFiber;

      b: {
        if (2 !== ta(c) || 1 !== c.tag) throw p(Error(170));
        var h = c;

        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;

            case 1:
              if (F(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }

          }

          h = h.return;
        } while (null !== h);

        throw p(Error(171));
      }

      if (1 === c.tag) {
        var k = c.type;

        if (F(k)) {
          c = Cb(c, k, h);
          break a;
        }
      }

      c = h;
    } else c = wb;

    null === a.context ? a.context = c : a.pendingContext = c;
    a = f;
    e = vc(d, e);
    e.payload = {
      element: b
    };
    a = void 0 === a ? null : a;
    null !== a && (e.callback = a);
    xc(g, e);
    Jc(g, d);
    return d;
  }

  function $f(b) {
    var a = b._reactInternalFiber;

    if (void 0 === a) {
      if ("function" === typeof b.render) throw p(Error(188));
      throw p(Error(268), Object.keys(b));
    }

    b = xa(a);
    return null === b ? null : b.stateNode;
  }

  var ag = {
    updateContainerAtExpirationTime: Zf,
    createContainer: function (b, a, c) {
      b = new Yf(b, a, c);
      a = $d(3, null, null, 2 === a ? 7 : 1 === a ? 3 : 0);
      b.current = a;
      return a.stateNode = b;
    },
    updateContainer: function (b, a, c, d) {
      var e = a.current,
          f = K(),
          g = Fc.suspense;
      e = Ic(f, e, g);
      return Zf(b, a, c, e, g, d);
    },
    flushRoot: function (b, a) {
      if ((U & (hf | jf)) !== T) throw p(Error(253));
      bc(Z.bind(null, b, a));
      H();
    },
    computeUniqueAsyncExpiration: function () {
      var b = 1073741821 - 25 * (((1073741821 - K() + 500) / 25 | 0) + 1);
      b <= Df && --b;
      return Df = b;
    },
    batchedEventUpdates: function (b, a) {
      var c = U;
      U |= 2;

      try {
        return b(a);
      } finally {
        U = c, U === T && H();
      }
    },
    batchedUpdates: function (b, a) {
      var c = U;
      U |= 1;

      try {
        return b(a);
      } finally {
        U = c, U === T && H();
      }
    },
    unbatchedUpdates: function (b, a) {
      var c = U;
      U &= -2;
      U |= gf;

      try {
        return b(a);
      } finally {
        U = c, U === T && H();
      }
    },
    deferredUpdates: function (b) {
      return $b(97, b);
    },
    syncUpdates: function (b, a, c, d) {
      return $b(99, b.bind(null, a, c, d));
    },
    discreteUpdates: function (b, a, c, d) {
      var e = U;
      U |= 4;

      try {
        return $b(98, b.bind(null, a, c, d));
      } finally {
        U = e, U === T && H();
      }
    },
    flushDiscreteUpdates: function () {
      (U & (1 | hf | jf)) === T && (Jf(), Mf());
    },
    flushControlled: function (b) {
      var a = U;
      U |= 1;

      try {
        $b(99, b);
      } finally {
        U = a, U === T && H();
      }
    },
    flushSync: function (b, a) {
      if ((U & (hf | jf)) !== T) throw p(Error(187));
      var c = U;
      U |= 1;

      try {
        return $b(99, b.bind(null, a));
      } finally {
        U = c, H();
      }
    },
    flushPassiveEffects: Mf,
    IsThisRendererActing: {
      current: !1
    },
    getPublicRootInstance: function (b) {
      b = b.current;
      if (!b.child) return null;

      switch (b.child.tag) {
        case 5:
          return za(b.child.stateNode);

        default:
          return b.child.stateNode;
      }
    },
    findHostInstance: $f,
    findHostInstanceWithWarning: function (b) {
      return $f(b);
    },
    findHostInstanceWithNoPortals: function (b) {
      b = ya(b);
      return null === b ? null : 20 === b.tag ? b.stateNode.instance : b.stateNode;
    },
    shouldSuspend: function () {
      return !1;
    },
    injectIntoDevTools: function (b) {
      var a = b.findFiberByHostInstance;
      return Wf(aa({}, b, {
        overrideHookState: null,
        overrideProps: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: q.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (a) {
          a = xa(a);
          return null === a ? null : a.stateNode;
        },
        findFiberByHostInstance: function (b) {
          return a ? a(b) : null;
        },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
      }));
    }
  };
  module.exports = ag.default || ag;
  var $$$renderer = module.exports;
  module.exports = $$$reconciler;
  return $$$renderer;
};

/***/ }),

/***/ "./node_modules/react-reconciler/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/react-reconciler/cjs/react-reconciler.production.min.js");
} else {}

/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var l = __webpack_require__("./node_modules/object-assign/index.js"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    z = n ? Symbol.for("react.memo") : 60115,
    A = n ? Symbol.for("react.lazy") : 60116,
    B = "function" === typeof Symbol && Symbol.iterator;

function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var D = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    E = {};

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

F.prototype.isReactComponent = {};

F.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function G() {}

G.prototype = F.prototype;

function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

var I = H.prototype = new G();
I.constructor = H;
l(I, F.prototype);
I.isPureReactComponent = !0;
var J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, c) {
  var e,
      d = {},
      g = null,
      k = null;
  if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  var f = arguments.length - 2;
  if (1 === f) d.children = c;else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) h[m] = arguments[m + 2];

    d.children = h;
  }
  if (a && a.defaultProps) for (e in f = a.defaultProps, f) void 0 === d[e] && (d[e] = f[e]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: d,
    _owner: J.current
  };
}

function N(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: e,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, c, e) {
  var d = typeof a;
  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];
    var f = b + U(d, k);
    g += T(d, f, c, e);
  } else if (null === a || "object" !== typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) d = d.value, f = b + U(d, k++), g += T(d, f, c, e);else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}

function V(a, b, c) {
  return null == a ? 0 : T(a, "", b, c);
}

function U(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function W(a, b) {
  a.func.call(a.context, b, a.count++);
}

function aa(a, b, c) {
  var e = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X(a, e, c, function (a) {
    return a;
  }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}

function X(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(P, "$&/") + "/");
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}

var Y = {
  current: null
};

function Z() {
  var a = Y.current;
  if (null === a) throw Error(C(321));
  return a;
}

var ba = {
  ReactCurrentDispatcher: Y,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: J,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: function (a, b, c) {
    if (null == a) return a;
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function (a, b, c) {
    if (null == a) return a;
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function (a) {
    return V(a, function () {
      return null;
    }, null);
  },
  toArray: function (a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function (a) {
    if (!O(a)) throw Error(C(143));
    return a;
  }
};
exports.Component = F;
exports.Fragment = r;
exports.Profiler = u;
exports.PureComponent = H;
exports.StrictMode = t;
exports.Suspense = y;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(C(267, a));
  var e = l({}, a.props),
      d = a.key,
      g = a.ref,
      k = a._owner;

  if (null != b) {
    void 0 !== b.ref && (g = b.ref, k = J.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

    for (h in b) K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
  }

  var h = arguments.length - 2;
  if (1 === h) e.children = c;else if (1 < h) {
    f = Array(h);

    for (var m = 0; m < h; m++) f[m] = arguments[m + 2];

    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: w,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: v,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: x,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: A,
    _ctor: a,
    _status: -1,
    _result: null
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: z,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return Z().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return Z().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return Z().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return Z().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return Z().useRef(a);
};

exports.useState = function (a) {
  return Z().useState(a);
};

exports.version = "16.13.1";

/***/ }),

/***/ "./node_modules/react/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react.production.min.js");
} else {}

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.15.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


Object.defineProperty(exports, "__esModule", {
  value: !0
});
var d = void 0,
    e = void 0,
    g = void 0,
    m = void 0,
    n = void 0;
exports.unstable_now = void 0;
exports.unstable_forceFrameRate = void 0;

if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var p = null,
      q = null,
      r = function () {
    if (null !== p) try {
      var a = exports.unstable_now();
      p(!0, a);
      p = null;
    } catch (b) {
      throw setTimeout(r, 0), b;
    }
  };

  exports.unstable_now = function () {
    return Date.now();
  };

  d = function (a) {
    null !== p ? setTimeout(d, 0, a) : (p = a, setTimeout(r, 0));
  };

  e = function (a, b) {
    q = setTimeout(a, b);
  };

  g = function () {
    clearTimeout(q);
  };

  m = function () {
    return !1;
  };

  n = exports.unstable_forceFrameRate = function () {};
} else {
  var t = window.performance,
      u = window.Date,
      v = window.setTimeout,
      w = window.clearTimeout,
      x = window.requestAnimationFrame,
      y = window.cancelAnimationFrame;
  "undefined" !== typeof console && ("function" !== typeof x && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof y && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
  exports.unstable_now = "object" === typeof t && "function" === typeof t.now ? function () {
    return t.now();
  } : function () {
    return u.now();
  };
  var z = !1,
      A = null,
      B = -1,
      C = -1,
      D = 33.33,
      E = -1,
      F = -1,
      G = 0,
      H = !1;

  m = function () {
    return exports.unstable_now() >= G;
  };

  n = function () {};

  exports.unstable_forceFrameRate = function (a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : 0 < a ? (D = Math.floor(1E3 / a), H = !0) : (D = 33.33, H = !1);
  };

  var J = function () {
    if (null !== A) {
      var a = exports.unstable_now(),
          b = 0 < G - a;

      try {
        A(b, a) || (A = null);
      } catch (c) {
        throw I.postMessage(null), c;
      }
    }
  },
      K = new MessageChannel(),
      I = K.port2;

  K.port1.onmessage = J;

  var L = function (a) {
    if (null === A) F = E = -1, z = !1;else {
      z = !0;
      x(function (a) {
        w(B);
        L(a);
      });

      var b = function () {
        G = exports.unstable_now() + D / 2;
        J();
        B = v(b, 3 * D);
      };

      B = v(b, 3 * D);

      if (-1 !== E && .1 < a - E) {
        var c = a - E;
        !H && -1 !== F && c < D && F < D && (D = c < F ? F : c, 8.33 > D && (D = 8.33));
        F = c;
      }

      E = a;
      G = a + D;
      I.postMessage(null);
    }
  };

  d = function (a) {
    A = a;
    z || (z = !0, x(function (a) {
      L(a);
    }));
  };

  e = function (a, b) {
    C = v(function () {
      a(exports.unstable_now());
    }, b);
  };

  g = function () {
    w(C);
    C = -1;
  };
}

var M = null,
    N = null,
    O = null,
    P = 3,
    Q = !1,
    R = !1,
    S = !1;

function T(a, b) {
  var c = a.next;
  if (c === a) M = null;else {
    a === M && (M = c);
    var f = a.previous;
    f.next = c;
    c.previous = f;
  }
  a.next = a.previous = null;
  c = a.callback;
  f = P;
  var l = O;
  P = a.priorityLevel;
  O = a;

  try {
    var h = a.expirationTime <= b;

    switch (P) {
      case 1:
        var k = c(h);
        break;

      case 2:
        k = c(h);
        break;

      case 3:
        k = c(h);
        break;

      case 4:
        k = c(h);
        break;

      case 5:
        k = c(h);
    }
  } catch (Z) {
    throw Z;
  } finally {
    P = f, O = l;
  }

  if ("function" === typeof k) if (b = a.expirationTime, a.callback = k, null === M) M = a.next = a.previous = a;else {
    k = null;
    h = M;

    do {
      if (b <= h.expirationTime) {
        k = h;
        break;
      }

      h = h.next;
    } while (h !== M);

    null === k ? k = M : k === M && (M = a);
    b = k.previous;
    b.next = k.previous = a;
    a.next = k;
    a.previous = b;
  }
}

function U(a) {
  if (null !== N && N.startTime <= a) {
    do {
      var b = N,
          c = b.next;
      if (b === c) N = null;else {
        N = c;
        var f = b.previous;
        f.next = c;
        c.previous = f;
      }
      b.next = b.previous = null;
      V(b, b.expirationTime);
    } while (null !== N && N.startTime <= a);
  }
}

function W(a) {
  S = !1;
  U(a);
  R || (null !== M ? (R = !0, d(X)) : null !== N && e(W, N.startTime - a));
}

function X(a, b) {
  R = !1;
  S && (S = !1, g());
  U(b);
  Q = !0;

  try {
    if (!a) for (; null !== M && M.expirationTime <= b;) T(M, b), b = exports.unstable_now(), U(b);else if (null !== M) {
      do T(M, b), b = exports.unstable_now(), U(b); while (null !== M && !m());
    }
    if (null !== M) return !0;
    null !== N && e(W, N.startTime - b);
    return !1;
  } finally {
    Q = !1;
  }
}

function Y(a) {
  switch (a) {
    case 1:
      return -1;

    case 2:
      return 250;

    case 5:
      return 1073741823;

    case 4:
      return 1E4;

    default:
      return 5E3;
  }
}

function V(a, b) {
  if (null === M) M = a.next = a.previous = a;else {
    var c = null,
        f = M;

    do {
      if (b < f.expirationTime) {
        c = f;
        break;
      }

      f = f.next;
    } while (f !== M);

    null === c ? c = M : c === M && (M = a);
    b = c.previous;
    b.next = c.previous = a;
    a.next = c;
    a.previous = b;
  }
}

var aa = n;
exports.unstable_ImmediatePriority = 1;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_NormalPriority = 3;
exports.unstable_IdlePriority = 5;
exports.unstable_LowPriority = 4;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = P;
  P = a;

  try {
    return b();
  } finally {
    P = c;
  }
};

exports.unstable_next = function (a) {
  switch (P) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = P;
  }

  var c = P;
  P = b;

  try {
    return a();
  } finally {
    P = c;
  }
};

exports.unstable_scheduleCallback = function (a, b, c) {
  var f = exports.unstable_now();

  if ("object" === typeof c && null !== c) {
    var l = c.delay;
    l = "number" === typeof l && 0 < l ? f + l : f;
    c = "number" === typeof c.timeout ? c.timeout : Y(a);
  } else c = Y(a), l = f;

  c = l + c;
  a = {
    callback: b,
    priorityLevel: a,
    startTime: l,
    expirationTime: c,
    next: null,
    previous: null
  };

  if (l > f) {
    c = l;
    if (null === N) N = a.next = a.previous = a;else {
      b = null;
      var h = N;

      do {
        if (c < h.startTime) {
          b = h;
          break;
        }

        h = h.next;
      } while (h !== N);

      null === b ? b = N : b === N && (N = a);
      c = b.previous;
      c.next = b.previous = a;
      a.next = b;
      a.previous = c;
    }
    null === M && N === a && (S ? g() : S = !0, e(W, l - f));
  } else V(a, c), R || Q || (R = !0, d(X));

  return a;
};

exports.unstable_cancelCallback = function (a) {
  var b = a.next;

  if (null !== b) {
    if (a === b) a === M ? M = null : a === N && (N = null);else {
      a === M ? M = b : a === N && (N = b);
      var c = a.previous;
      c.next = b;
      b.previous = c;
    }
    a.next = a.previous = null;
  }
};

exports.unstable_wrapCallback = function (a) {
  var b = P;
  return function () {
    var c = P;
    P = b;

    try {
      return a.apply(this, arguments);
    } finally {
      P = c;
    }
  };
};

exports.unstable_getCurrentPriorityLevel = function () {
  return P;
};

exports.unstable_shouldYield = function () {
  var a = exports.unstable_now();
  U(a);
  return null !== O && null !== M && M.startTime <= a && M.expirationTime < O.expirationTime || m();
};

exports.unstable_requestPaint = aa;

exports.unstable_continueExecution = function () {
  R || Q || (R = !0, d(X));
};

exports.unstable_pauseExecution = function () {};

exports.unstable_getFirstCallbackNode = function () {
  return M;
};

/***/ }),

/***/ "./node_modules/scheduler/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}

/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),

/***/ "./node_modules/util/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};

  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }

  return descriptors;
};

var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  } // Allow for deprecating things in the process of starting up.


  if (typeof process === 'undefined') {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = __webpack_require__("./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = __webpack_require__("./node_modules/inherits/inherits_browser.js");

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];

    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};

exports.promisify.custom = kCustomPromisifiedSymbol;

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }

  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  } // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.


  function callbackified() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();

    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }

    var self = this;

    var cb = function () {
      return maybeCb.apply(self, arguments);
    }; // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)


    original.apply(this, args).then(function (ret) {
      process.nextTick(cb, null, ret);
    }, function (rej) {
      process.nextTick(callbackifyOnRejected, rej, cb);
    });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}

exports.callbackify = callbackify;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__;

/***/ })

/******/ });