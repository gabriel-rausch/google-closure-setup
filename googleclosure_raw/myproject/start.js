goog.provide('myproject.start');

goog.require('goog.dom');

myproject.start = function() {
  var newDiv = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
    '.-');
  goog.dom.appendChild(document.body, newDiv);
};

goog.exportSymbol('myproject.start', myproject.start);