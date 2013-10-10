underscore.prefilter
====================

```javascript
var bark = function(sentence) {
  alert("woof " + sentence + "!");
};

bark = _.prefilter(bark, function(sentence) {
  return !_.isNumber(sentence); 
});

bark("woof"); // woof woof!
bark(123); // null
```
