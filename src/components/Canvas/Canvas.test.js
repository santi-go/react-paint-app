import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Canvas from './Canvas';

configure({ adapter: new Adapter() });

describe('<Canvas/>', () => {
    let wrapper = {};
    let mockCanvas = {};
    const mockCanvasProps = {
        style: {
          background: 'powderblue',
        },
        brushCol: { name: 'black', className: 'color-btn black-btn'},
        lineWidth: { width: 5, className: "width-btn thin-btn"},
        className: 'paint',
        height: 500,
        width: 500,
    }
    
    beforeAll(() => {
        wrapper = mount(<Canvas{...mockCanvasProps}></Canvas>);
        wrapper.setState({mouseDown: false});
        mockCanvas = wrapper.instance();
        
    });

    it('should have render Button component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    // it('should handle mouseDown', () => {
    //     wrapper.prop('onMousedown')();
        
    //     expect(wrapper.state('mouseDown')).toBe(true);
    //     console.log(wrapper.debug())
    // })
})

