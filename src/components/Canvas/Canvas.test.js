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
    const eventA = {pageX:0, pageY:0};
    
    beforeAll(() => {
        wrapper = mount(<Canvas{...mockCanvasProps}></Canvas>);
        wrapper.setState({mouseDown: false});
        mockCanvas = wrapper.instance();
        
    });

    it('should have render Button component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should knows that mouseDown when starts drawing', () => {
        mockCanvas.mouseDown(eventA);
        expect(mockCanvas.state.mouseDown).toBe(true);   
    })

    it('should knows that mouseUp when ends drawing', () => {
        mockCanvas.mouseDown(eventA);
        expect(mockCanvas.state.mouseDown).toBe(true); 
        mockCanvas.mouseUp(eventA);
        expect(mockCanvas.state.mouseDown).toBe(false);   
    })
})

