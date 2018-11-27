(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global['first-package'] = {}),global.React));
}(this, (function (exports,React) { 'use strict';

	if (typeof process === "undefined") { var process = { env: {} }; }

	var FirstComponent = function FirstComponent(props) {
	  return React.createElement("div", props);
	};

	exports.FirstComponent = FirstComponent;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=first-package.umd.js.map
