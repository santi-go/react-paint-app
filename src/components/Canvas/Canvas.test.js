import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Canvas from './Canvas';

configure({adapter: new Adapter()})

describe('<Canvas/>', () => {
    it('should render the component', () => {
        const wrapper = shallow(<Canvas/>)
        expect(wrapper.contains('Canvas'));
    })
})