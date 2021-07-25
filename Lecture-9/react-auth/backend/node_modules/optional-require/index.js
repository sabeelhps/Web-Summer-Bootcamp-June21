"use strict";

/**
 * Compatibility bridge to the new typescript code.
 *
 */

const lib = require("./dist");

module.exports = (...args) => lib.makeOptionalRequire(...args);

module.exports.tryRequire = lib.tryRequire;
module.exports.tryResolve = lib.tryResolve;
module.exports.try = lib.tryRequire;
module.exports.resolve = lib.tryResolve;
module.exports.makeOptionalRequire = lib.makeOptionalRequire;
module.exports.optionalRequire = lib.optionalRequire;
module.exports.optionalRequireCwd = lib.optionalRequireCwd;
module.exports.optionalRequireTop = lib.optionalRequireTop;

let __defaultLog;

Object.defineProperty(module.exports, "log", {
  set(func) {
    __defaultLog = func;
    lib.setDefaultLog(func);
  },

  get() {
    return __defaultLog;
  },
});
