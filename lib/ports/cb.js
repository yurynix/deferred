'use strict';

var curry      = require('es5-ext/lib/Function/curry').call
  , nextTick   = require('clock/lib/next-tick');

require('../port').add('cb', function (cb) {
	nextTick(this.failed ?
		curry(cb, this.value, null) :
		curry(cb, null, this.value));
}, function (cb) {
	this.queue(['cb', [cb]]);
});