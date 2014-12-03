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
