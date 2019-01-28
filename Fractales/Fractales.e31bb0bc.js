// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"Complex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Complex =
/*#__PURE__*/
function () {
  function Complex(real, imaginary) {
    _classCallCheck(this, Complex);

    this.Re = real;
    this.Im = imaginary;
  }

  _createClass(Complex, [{
    key: "add",
    value: function add(other) {
      this.Re += other.Re;
      this.Im += other.Im;
    }
  }, {
    key: "copy",
    value: function copy() {
      return new Complex(this.Re, this.Im);
    }
  }, {
    key: "square",
    value: function square() {
      this.Re = this.Re * this.Re - this.Im * this.Im;
      this.Im = 2 * this.Im * this.Re;
    }
  }, {
    key: "getSquare",
    value: function getSquare() {
      return new Complex(this.Re * this.Re - this.Im * this.Im, 2 * this.Im * this.Re);
    }
  }]);

  return Complex;
}();

var _default = Complex;
exports.default = _default;
},{}],"Color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hslToRgb = hslToRgb;
var r, g, b, q, p;

function hue2rgb(p, q, t) {
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
  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _Complex = _interopRequireDefault(require("./Complex"));

var _Color = require("./Color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * TODO
 *
 * Add to options:
 *  Canvas resolution.
 *  Colors.
 *  N, Iterations
 *  N, Infinity
 *  Zoom
 */
var canvasWidth = 500;
var canvasHeight = 500;
var c = new _Complex.default(-1, -0.3); //new Complex(-0.1, -0.3);

var n, z, col;
var counter = 0;
var N_ITERATION = 100;
var N_MAX = 2;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
document.getElementById("cambiar").addEventListener("click", function () {
  c.Re = Number(document.getElementById("real").value);
  c.Im = Number(document.getElementById("im").value);
});
var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
var index;

function drawPixel(x, y, r, g, b, a) {
  index = (x + y * canvasWidth) * 4;
  canvasData.data[index + 0] = r;
  canvasData.data[index + 1] = g;
  canvasData.data[index + 2] = b;
  canvasData.data[index + 3] = a;
}

function set_pixel(data, w, x, y, r, g, b, a) {
  index = (x + y * w) * 4;
  data.data[index + 0] = r;
  data.data[index + 1] = g;
  data.data[index + 2] = b;
  data.data[index + 3] = a;
}

window.generateFractal = generateFractal;
window.context = context;

function generateFractal(w, h, scale) {
  var temp_canvas = document.createElement("canvas");
  var temp_context = temp_canvas.getContext("2d");
  temp_canvas.width = w;
  temp_canvas.height = h;
  var temp_data = temp_context.getImageData(0, 0, w, h);
  temp_data = fractal(w, h, scale, temp_data);
  /*
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      z = new Complex(scale * (x / w) - scale / 2, scale * (y / h) - scale / 2); // Zoom.
      n = 0;
        while (n < N_ITERATION) {
        z.add(z.getSquare());
        z.add(c);
          if (Math.hypot(z.Re, z.Im) > N_MAX) {
          break;
        }
          n++;
      }
        n = n / N_ITERATION + 0.0; // Color.
      col = hslToRgb(n, 1, 0.5);
      set_pixel(temp_data, w, x, y, col[0], col[1], col[2], n * 255);
    }
  }
  */

  return temp_data;
}

function fractal(width, height, scale, data) {
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      z = new _Complex.default(scale * (x / width) - scale / 2, scale * (y / height) - scale / 2);
      n = 0;

      while (n < N_ITERATION) {
        z.add(z.getSquare());
        z.add(c);
        if (Math.abs(z.Re + z.Im) > N_MAX) break;
        n++;
      }

      n = n / N_ITERATION + 0.0; // Color.

      col = (0, _Color.hslToRgb)(n, 1, 0.5);
      set_pixel(data, width, x, y, col[0], col[1], col[2], n * 255);
    }
  }

  return data;
}

window.imagedata_to_image = imagedata_to_image;

function imagedata_to_image(imagedata) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = imagedata.width;
  canvas.height = imagedata.height;
  ctx.putImageData(imagedata, 0, 0);
  var image = new Image();
  image.src = canvas.toDataURL();
  return image;
}

function get_img(w, h, scale) {
  var i = generateFractal(w, h, scale);
  var img = imagedata_to_image(i);
  document.body.appendChild(img);
}

window.get_img = get_img;
setInterval(function () {
  c.Im += Math.cos(counter) / 100;
  c.Re += Math.sin(counter) / 100;
  counter += 0.05;
  context.putImageData(canvasData, 0, 0);
  canvasData = fractal(canvasWidth, canvasHeight, 2, canvasData);
  /*
  for (let x = 0; x < canvasWidth; x++) {
    for (let y = 0; y < canvasHeight; y++) {
      z = new Complex(
        3 * (x / canvasWidth) - 1.5,
        3 * (y / canvasHeight) - 1.5
      );
      n = 0;
      while (n < N_ITERATION) {
        z.add(z.getSquare());
        z.add(c);
        if (Math.abs(z.Re + z.Im) > N_MAX) {
          break;
        }
        n++;
      }
      n = n / N_ITERATION + 0.0;
      col = hslToRgb(n, 1, 0.5);
      drawPixel(x, y, col[0], col[1], col[2], n * 255);
    }
  }  */
}, 1000 / 10);
},{"./Complex":"Complex.js","./Color":"Color.js"}],"../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49877" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Fractales.e31bb0bc.map