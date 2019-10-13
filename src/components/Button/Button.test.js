import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('<Button/>', () => {
    let wrapper = {};
    let mockButton = {};
    let className = "class-btn";
    let mockClickOn = () => {className = "clicked-button"}
    
    beforeAll(() => {
        wrapper = mount(<Button 
            className={className}
            onClick={mockClickOn}
            ></Button>);
        mockButton = wrapper.instance();
        
    });

    it('should have render Button component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    // it('should call a function when clicked', () => {
    //     wrapper.prop('onClick')()
    //     expect(wrapper.prop('className').toBe('clicked-button'))
    // })
})

