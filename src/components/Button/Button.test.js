import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('<Button/>', () => {
    let wrapper = {};
    let className = "class-btn";
    const mockClickOn = () => {className = "clicked-button"}
    
    beforeAll(() => {
        wrapper = mount(<Button 
            className={className}
            onClick={mockClickOn}
            ></Button>);
    });

    it('should have render Button component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should call the method assign to the onClick prop when clicked', () => {
        wrapper.prop('onClick')();
        const newWrapper = mount(<Button 
            className={className}
            onClick={mockClickOn}
            ></Button>);
        expect(newWrapper.prop('className')).toEqual('clicked-button');
    })
});

