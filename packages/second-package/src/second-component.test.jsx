import * as React from 'react';
import { shallow } from 'enzyme';
import { SecondComponent } from './second-component';

describe('SecondComponent', () => {
    it('should render div', () => {
        const tree = shallow((
            <SecondComponent />
        ));

        expect(tree.find('div').exists)
            .toBeTruthy();
    });
});
