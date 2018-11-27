(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('first-package'), require('first-package/component-without-bundle')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'first-package', 'first-package/component-without-bundle'], factory) :
    (factory((global['second-package'] = {}),global.React,global.firstPackage,global.componentWithoutBundle));
}(this, (function (exports,React,firstPackage,componentWithoutBundle) { 'use strict';

    var SecondComponent = function SecondComponent(props) {
      return React.createElement("div", props, React.createElement(firstPackage.FirstComponent, null), React.createElement(componentWithoutBundle.ComponentWithoutBundle, null));
    };

    exports.SecondComponent = SecondComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=second-package.umd.js.map
