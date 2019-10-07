import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HelloWorld from './HelloWorld';


configure({adapter: new Adapter()})

describe('<HelloWorld/>', () => {
    it('should render the component', () => {
        const wrapper = shallow(<HelloWorld/>);
        expect(wrapper.contains('It Renders'));
    })
});