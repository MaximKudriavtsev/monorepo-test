import * as React from 'react';
import { shallow } from 'enzyme';
import { FirstComponent } from './first-component';

describe('FirstComponent', () => {
    it('should render div', () => {
        const tree = shallow((
            <FirstComponent />
        ));

        expect(tree.find('div').exists)
            .toBeTruthy();
    });
});
