underscore.prefilter [![Build Status](https://travis-ci.org/mateusmaso/underscore.prefilter.svg?branch=master)](https://travis-ci.org/mateusmaso/underscore.prefilter)
====================

This library is an extension for Underscore which allows wrapping a conditional method before executing the main one, if true it calls the subsequent method.

## Features

* Prevent functions to be called unintentionally.

## Dependencies

* underscore.js (>= 1.5.0)

## Node

```javascript
var _ = require('underscore');
_.mixin(require('underscore.prefilter'));
```

## Examples

```javascript
var bark = function(sentence) {
  console.log("woof " + sentence + "!");
};

bark = _.prefilter(bark, function(sentence) {
  return !_.isNumber(sentence);
});

bark("woof"); // woof woof!
bark(123); // undefined
```

## License

Copyright (c) 2013-2014 Mateus Maso. Released under an MIT license.
