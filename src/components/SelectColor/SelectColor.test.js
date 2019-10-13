import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectColor from './SelectColor';

configure({ adapter: new Adapter() });

describe ('<SelectColor/>', () =>{
    let wrapper = {};
    let mockSelectColor = {};
    let mockHandleActiveColor = () => {};
    let state = {
        colors: [
            { name: 'maroon', className: "color-btn maroon-btn"},
            { name: 'red', className: "color-btn red-btn"},
            { name: 'orange', className: "color-btn orange-btn"},
            { name: 'yellow', className: "color-btn yellow-btn"},
            { name: 'olive', className: "color-btn olive-btn"},
            { name: 'green', className: "color-btn green-btn"},
            { name: 'purple', className: "color-btn purple-btn"},
            { name: 'fuchsia', className: "color-btn fuchsia-btn"},
            { name: 'lime', className: "color-btn lime-btn"},
            { name: 'teal', className: "color-btn teal-btn"},
            { name: 'aqua', className: "color-btn aqua-btn"},
            { name: 'blue', className: "color-btn blue-btn"},
            { name: 'navy', className: "color-btn navy-btn"},
            { name: 'black', className: "color-btn black-btn"},
            { name: 'gray', className: "color-btn gray-btn"},
            { name: 'white', className: "color-btn white-btn"},  
        ],
        activeColor: { name: 'black', className: 'color-btn black-btn'},
        widths: [
            { width: 2, className: "width-btn extra-thin-btn"},
            { width: 5, className: "width-btn thin-btn"},
            { width: 10, className: "width-btn medium-btn"},
            { width: 18, className: "width-btn large-btn"}
        ],
        activeWidth: { width: 5, className: "width-btn thin-btn"},
    };

    beforeAll(() => {
        wrapper = mount(<SelectColor{...state} onClick={mockHandleActiveColor}>></SelectColor>);
        mockSelectColor = wrapper.instance();
    });

    it('should have render PaintUI component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should have a 16 color buttons', () => {
        expect(mockSelectColor.props.colors.length).toEqual(16);
    });
 });