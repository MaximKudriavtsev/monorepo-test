import * as React from 'react';
import { FirstComponent} from 'first-package';
import { ComponentWithoutBundle } from 'first-package/component-without-bundle';

export const SecondComponent = props => (
    <div {...props}>
        <FirstComponent />
        <ComponentWithoutBundle />
    </div>
);