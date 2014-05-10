(function(_) {

  _.prefilter = function(method, filter) {
    return function() {
      if (filter.apply(this, arguments)) return method.apply(this, arguments);
    };
  };

})(_);
