// underscore.prefilter
// --------------------
// v0.1.0
//
// Copyright (c) 2013-2014 Mateus Maso
// Distributed under MIT license
//
// http://github.com/mateusmaso/underscore.prefilter

(function(root, factory) {

  if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(_);
    exports = factory(_);
  } else {
    root._.mixin(factory(root._));
  }

}(this, function(_) {

  return {
    prefilter: function(method, filter) {
      return function() {
        if (filter.apply(this, arguments)) {
          return method.apply(this, arguments);
        } else {
          return false;
        }
      };
    }
  };

}));