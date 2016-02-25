goog.provide('myproject.start');
goog.provide('myproject.init');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');


/**
 * Base method to start all Modules found on the Page
 * @version 0.1.1
 * @constructor
 */
myproject.init = function() {
	var self = this;

	var newDiv = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
	'.-.');
	goog.dom.appendChild(document.body, newDiv);

	var btn = document.querySelector('.mybtn');
	goog.events.listen(btn, 'click', function() {
		window.alert('okok');
	});

	self.clicked();
};
goog.exportSymbol('myproject.init', myproject.start);

myproject.init.prototype.clicked = function() {
	window.alert('woop');
};

myproject.start = function() {
	myproject.init();
};

goog.exportSymbol('myproject.start', myproject.start);