import { createElement } from 'react';
import { FirstComponent } from 'first-package';
import { ComponentWithoutBundle } from 'first-package/component-without-bundle';

var SecondComponent = function SecondComponent(props) {
  return createElement("div", props, createElement(FirstComponent, null), createElement(ComponentWithoutBundle, null));
};

export { SecondComponent };
//# sourceMappingURL=second-package.es.js.map
