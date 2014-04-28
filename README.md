underscore.prefilter
====================

This library is an extension for Underscore which allows wraping a conditional function before executing the main one, if true it passes and calls the subsequent method.

## Features

* Prevent functions to be called unintentionally.

## Dependencies

* underscore.js (>= 1.5)

## Examples

```javascript
var bark = function(sentence) {
  console.log("woof " + sentence + "!");
};

bark = _.prefilter(bark, function(sentence) {
  return !_.isNumber(sentence); 
});

bark("woof"); // woof woof!
bark(123); // null
```

## License

Copyright (c) 2013-2014 Mateus Maso. Released under an MIT license.
