// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7mgxS":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _render = require("./Render");
var _renderDefault = parcelHelpers.interopDefault(_render);
var _entity = require("./Entity");
var _entityDefault = parcelHelpers.interopDefault(_entity);
var _vector = require("./Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
var _quadtree = require("./Quadtree");
var _quadtreeDefault = parcelHelpers.interopDefault(_quadtree);
var _rect = require("./Rect");
var _rectDefault = parcelHelpers.interopDefault(_rect);
const NUMBER_OF_BALLS = 500;
const COLLISION_SEARCH_AREA = 30;
const ATTRACTION_FORCE_TO_MOUSE = 100000000000;
let quadtreeMode = true;
let attractionMouse = false;
let showQuadtreeMode = true;
const mousePosition = new _vectorDefault.default();
const render = new _renderDefault.default();
const entityFollowMouse = new _entityDefault.default(50, new _vectorDefault.default(500, 500));
render.add(entityFollowMouse);
// * Initialization
while(render.entities.length < NUMBER_OF_BALLS){
    const entitySize = 10 + Math.random() * 10;
    const entityPosition = new _vectorDefault.default(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    const entity = new _entityDefault.default(entitySize, entityPosition);
    let entityCanBeAdded = true;
    // An entity can be added if it doesn't collide with other entity.
    render.entities.forEach((other)=>{
        if (other.collides(entity)) entityCanBeAdded = false;
    });
    if (entityCanBeAdded) render.add(entity);
}
document.addEventListener("mousemove", (event)=>{
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
});
document.addEventListener("keydown", (event)=>{
    if (event.key.toLocaleLowerCase() === "q") quadtreeMode = !quadtreeMode;
    if (event.key.toLocaleLowerCase() === "a") attractionMouse = !attractionMouse;
    if (event.key.toLocaleLowerCase() === "s") showQuadtreeMode = !showQuadtreeMode;
});
// Add force of attraction between the mouse and the entity.
function addForceEntityToMouse() {
    if (attractionMouse) render.entities.forEach((entity)=>{
        const distanceVector = _vectorDefault.default.sub(mousePosition, entity.position);
        const distance = distanceVector.mag();
        if (distance > 50) {
            const force = distanceVector.normalized();
            force.mult(ATTRACTION_FORCE_TO_MOUSE / distance);
            entity.addForce(force);
        }
    });
}
function text(txt, x, y, render1) {
    render1.context.strokeText(txt, x, y);
    render1.context.fillText(txt, x, y);
}
render.update = ()=>{
    const distance = _vectorDefault.default.sub(mousePosition, entityFollowMouse.position);
    if (distance.mag() > 10) {
        distance.normalize();
        distance.mult(10);
        entityFollowMouse.velocity = distance;
        entityFollowMouse.position.add(distance);
    }
    addForceEntityToMouse();
    if (quadtreeMode) {
        const screenSizeRectangle = new _rectDefault.default(new _vectorDefault.default(), window.innerWidth, window.innerHeight);
        const qt = new _quadtreeDefault.default(screenSizeRectangle, 5);
        // Inset all entities in quadtree.
        render.entities.forEach((entity)=>qt.insert(entity)
        );
        render.entities.forEach((entity)=>{
            // Rectangle around the entity.
            const query = generateRectAroundVector(entity.position);
            // Search all entities inside the rectangle.
            const entitiesInsideRect = qt.queryRect(query);
            // Check collision with all entities inside the rectangle.
            entity.updateCollisions(entitiesInsideRect);
        });
        if (showQuadtreeMode) qt.draw(render.context);
    } else render.entities.forEach((entity)=>{
        entity.updateCollisions(render.entities);
    });
    render.context.fillStyle = "white";
    render.context.strokeStyle = "black";
    render.context.font = "bold 35px Arial";
    render.context.lineWidth = 10;
    text(`Quadtree mode: ${quadtreeMode ? 'ON' : 'OFF'}.  [Press q to change]`, 50, 100, render);
    text(`show quadtree lines mode: ${showQuadtreeMode ? 'ON' : 'OFF'}.  [Press s to change]`, 50, 150, render);
    text(`Attraction mouse mode: ${attractionMouse ? 'ON' : 'OFF'}.  [Press a to change]`, 50, 200, render);
    text(`Number of rocks ${NUMBER_OF_BALLS}.`, 50, 250, render);
    render.context.lineWidth = 1;
};
render.init();
function generateRectAroundVector(v) {
    return new _rectDefault.default(_vectorDefault.default.sub(v, new _vectorDefault.default(COLLISION_SEARCH_AREA / 2, COLLISION_SEARCH_AREA / 2)), COLLISION_SEARCH_AREA, COLLISION_SEARCH_AREA);
} //    const result = render.entities
 // result.forEach(r => {
 //   const distance = Vector.sub(r.position, entity.position)
 //   const d = distance.mag()
 //   distance.normalize()
 //   distance.mult((entity.mass * r.mass) / (d * d))
 //   distance.mult(0.005)
 //   if (!isNaN(distance.x) || !isNaN(distance.x)) {
 //     entity.addForce(distance)
 //   }
 // })

},{"./Render":"e4YLj","./Entity":"LRUzR","./Vector":"ebDaq","./Quadtree":"2rLJT","./Rect":"dKkvC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4YLj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Render {
    entities = [];
    clearColor = "#4f9bd9";
    lastUpdate = Date.now();
    constructor(width = window.innerWidth, height = window.innerHeight){
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
    }
    add(entiti) {
        this.entities.push(entiti);
    }
    render() {
        const now = Date.now();
        const dt = now - this.lastUpdate;
        this.lastUpdate = now;
        this.clear();
        this.entities.forEach((entiti)=>{
            entiti.render(this.context);
            entiti.update(this.entities, dt);
        });
        this.update(this);
        this.drawFPS(dt);
    }
    init() {
        if (document.readyState === "complete") this.loadCanvas();
        else window.onload = this.loadCanvas.bind(this);
    }
    clear() {
        this.context.fillStyle = this.clearColor;
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
    drawFPS(dt) {
        this.context.fillStyle = "white";
        this.context.lineWidth = 10;
        this.context.font = "bold 35px Arial";
        this.context.strokeText(`FPS: ${Math.round(1000 / dt)}`, 50, 50);
        this.context.fillText(`FPS: ${Math.round(1000 / dt)}`, 50, 50);
        this.context.lineWidth = 1;
    }
    loadCanvas() {
        document.body.appendChild(this.canvas);
        setInterval(this.render.bind(this), 0);
    }
    update(render) {
        return;
    }
}
exports.default = Render;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"LRUzR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _body = require("./Body");
var _bodyDefault = parcelHelpers.interopDefault(_body);
var _rockPng = require("../rock.png");
var _rockPngDefault = parcelHelpers.interopDefault(_rockPng);
const FIX_POS = 2;
const VEL_AFTER_COLLISION = 0.5;
const img = document.createElement('img');
img.src = _rockPngDefault.default;
img.onload = ()=>{
    console.log("IMG: LOADED CORRECTLY");
};
class Entity extends _bodyDefault.default {
    color = "#00FF00";
    constructor(radius, position){
        super(position, radius);
        this.position = position;
    }
    update(Entitys, dt) {
        this.updatePhysics(dt);
        this.maintainInsideFrame();
    }
    maintainInsideFrame(width = window.innerWidth, height = window.innerHeight) {
        const fix = FIX_POS + this.radius;
        if (this.position.x - this.radius < 0) {
            this.velocity.x *= -VEL_AFTER_COLLISION;
            this.position.x = fix;
        }
        if (this.position.x + this.radius > width) {
            this.velocity.x *= -VEL_AFTER_COLLISION;
            this.position.x = width - fix;
        }
        if (this.position.y - this.radius < 0) {
            this.velocity.y *= -VEL_AFTER_COLLISION;
            this.position.y = fix;
        }
        if (this.position.y + this.radius > height) {
            this.velocity.y *= -VEL_AFTER_COLLISION;
            this.position.y = height - fix;
        }
    }
    render(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.drawImage(img, this.position.x - this.radius, this.position.y - this.radius, 2 * this.radius, 2 * this.radius);
        context.stroke();
    }
}
exports.default = Entity;

},{"./Body":"kNFi8","../rock.png":"gGbRO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNFi8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vector = require("./Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
var _entity = require("./Entity");
var _entityDefault = parcelHelpers.interopDefault(_entity);
var _circle = require("./Circle");
var _circleDefault = parcelHelpers.interopDefault(_circle);
// COEFICIENTE_RESTITUCION
const CR = 0.99;
let id = 0;
class Body extends _circleDefault.default {
    friction = 1;
    constructor(position, radius){
        super(position, radius);
        id++;
        this.id = id;
        this.velocity = new _vectorDefault.default();
        this.acceleration = new _vectorDefault.default();
        this.mass = Math.PI * this.radius * this.radius;
    }
    fixPosition(other) {
        const distance = _vectorDefault.default.sub(this.position, other.position);
        const overlap = this.radius + other.radius - distance.mag();
        const fix = _vectorDefault.default.mult(overlap / 2, distance.normalized());
        this.position.add(fix);
        other.position.add(_vectorDefault.default.mult(-1, fix));
    }
    updateCollisions(Entitys) {
        Entitys.forEach((Entity)=>{
            if (this.id !== Entity.id) {
                if (this.collides(Entity)) {
                    const [v1, v2] = this.velocityAfterCollision(Entity);
                    this.velocity = v1;
                    Entity.velocity = v2;
                    this.fixPosition(Entity);
                }
            }
        });
    }
    velocityAfterCollision(other) {
        const v1 = _vectorDefault.default.mult(1 / (this.mass + other.mass), _vectorDefault.default.add(_vectorDefault.default.add(_vectorDefault.default.mult(CR * other.mass, _vectorDefault.default.sub(other.velocity, this.velocity)), _vectorDefault.default.mult(this.mass, this.velocity)), _vectorDefault.default.mult(other.mass, other.velocity)));
        const v2 = _vectorDefault.default.mult(1 / (this.mass + other.mass), _vectorDefault.default.add(_vectorDefault.default.add(_vectorDefault.default.mult(CR * this.mass, _vectorDefault.default.sub(this.velocity, other.velocity)), _vectorDefault.default.mult(this.mass, this.velocity)), _vectorDefault.default.mult(other.mass, other.velocity)));
        return [
            v1,
            v2
        ];
    }
    updatePhysics(dt) {
        const dtInSeconds = dt / 1000;
        this.position.add(_vectorDefault.default.mult(dtInSeconds, this.velocity));
        this.velocity.add(_vectorDefault.default.mult(dtInSeconds, this.acceleration));
        this.velocity.mult(dtInSeconds * this.friction);
        this.acceleration.mult(0);
    }
    addForce(force) {
        this.acceleration.add(_vectorDefault.default.mult(1 / this.mass, force));
    }
}
exports.default = Body;

},{"./Vector":"ebDaq","./Entity":"LRUzR","./Circle":"lqU1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebDaq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Vector {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }
    normalized() {
        return Vector.mult(1 / this.mag(), this);
    }
    normalize() {
        this.mult(1 / this.mag());
    }
    mag() {
        return Math.hypot(this.x, this.y);
    }
    mult(s) {
        this.x *= s;
        this.y *= s;
    }
    copy() {
        return new Vector(this.x, this.y);
    }
    static mult(s, v) {
        return new Vector(v.x * s, v.y * s);
    }
    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    static sub(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
}
exports.default = Vector;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lqU1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vector = require("./Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
class Circle {
    constructor(position, radius){
        this.position = position;
        this.radius = radius;
    }
    collides(other) {
        const distanceVector = _vectorDefault.default.sub(this.position, other.position);
        const distance = distanceVector.mag();
        if (distance <= this.radius + other.radius) return true;
        return false;
    }
}
exports.default = Circle;

},{"./Vector":"ebDaq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gGbRO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7UhFu') + "rock.fc7e3d83.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"2rLJT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rect = require("./Rect");
var _rectDefault = parcelHelpers.interopDefault(_rect);
var _entity = require("./Entity");
var _entityDefault = parcelHelpers.interopDefault(_entity);
var _vector = require("./Vector");
var _vectorDefault = parcelHelpers.interopDefault(_vector);
class QuadTree {
    divided = false;
    childs = [];
    subTrees = [];
    constructor(border, capacity = 10){
        this.border = border;
        this.capacity = capacity;
    }
    subdivide() {
        const offsetX = _vectorDefault.default.add(new _vectorDefault.default(this.border.w / 2, 0), this.border.position);
        const offsetY = _vectorDefault.default.add(new _vectorDefault.default(0, this.border.h / 2), this.border.position);
        const offsetXY = _vectorDefault.default.add(new _vectorDefault.default(this.border.w / 2, this.border.h / 2), this.border.position);
        this.subTrees.push(new QuadTree(new _rectDefault.default(this.border.position.copy(), this.border.w / 2, this.border.h / 2), this.capacity), new QuadTree(new _rectDefault.default(offsetX, this.border.w / 2, this.border.h / 2), this.capacity), new QuadTree(new _rectDefault.default(offsetY, this.border.w / 2, this.border.h / 2), this.capacity), new QuadTree(new _rectDefault.default(offsetXY, this.border.w / 2, this.border.h / 2), this.capacity));
        this.divided = true;
    }
    queryRange(range) {
        const found = [];
        if (this.border.containsCircle(range)) {
            this.childs.forEach((child)=>{
                if (range.collides(child)) found.push(child);
            });
            if (this.divided) this.subTrees.forEach((tree)=>{
                found.push(...tree.queryRange(range));
            });
        }
        return found;
    }
    queryRect(range) {
        const found = [];
        if (this.border.collidesRect(range)) {
            this.childs.forEach((child)=>{
                if (range.containsCircle(child)) found.push(child);
            });
            if (this.divided) this.subTrees.forEach((tree)=>{
                found.push(...tree.queryRect(range));
            });
        }
        return found;
    }
    insert(Entity) {
        if (this.border.containsCircle(Entity)) {
            if (this.childs.length < this.capacity) {
                this.childs.push(Entity);
                return true;
            } else {
                if (!this.divided) this.subdivide();
                this.subTrees.find((tree)=>tree.insert(Entity)
                );
                return true;
            }
        }
    }
    draw(context) {
        context.strokeStyle = "#FFFFFF";
        context.strokeRect(this.border.position.x, this.border.position.y, this.border.w, this.border.h);
        this.subTrees.forEach((tree)=>tree.draw(context)
        );
    }
}
exports.default = QuadTree;

},{"./Rect":"dKkvC","./Entity":"LRUzR","./Vector":"ebDaq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dKkvC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Rect {
    constructor(position, w, h){
        this.w = w;
        this.h = h;
        this.position = position;
    }
    render(context) {
        context.beginPath();
        context.rect(this.position.x, this.position.y, this.w, this.h);
        context.stroke();
    }
    get x() {
        return this.position.x;
    }
    get y() {
        return this.position.y;
    }
    collidesRect(rect) {
        if (this.x < rect.x + rect.w && this.x + this.w > rect.x && this.y < rect.y + rect.h && this.y + this.h > rect.y) return true;
        return false;
    }
    containsCircle(circle) {
        const distX = Math.abs(circle.position.x - this.position.x - this.w / 2);
        const distY = Math.abs(circle.position.y - this.position.y - this.h / 2);
        if (distX > this.w / 2 + circle.radius) return false;
        if (distY > this.h / 2 + circle.radius) return false;
        if (distX <= this.w / 2) return true;
        if (distY <= this.h / 2) return true;
        const dx = distX - this.w / 2;
        const dy = distY - this.h / 2;
        return dx * dx + dy * dy <= circle.radius * circle.radius;
    }
}
exports.default = Rect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7mgxS","h7u1C"], "h7u1C", "parcelRequire0659")

//# sourceMappingURL=index.b71e74eb.js.map
