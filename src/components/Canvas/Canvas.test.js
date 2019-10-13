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
    const event = {pageX:0, pageY:0};
    
    beforeAll(() => {
        wrapper = mount(<Canvas{...mockCanvasProps}></Canvas>);
        wrapper.setState({mouseDown: false});
        mockCanvas = wrapper.instance();
    });

    it('should have render Button component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should undo last stroke when undoLast is called', () => {
        mockCanvas.mouseDown(event);
        expect(mockCanvas.stroke).toBe(1);
        mockCanvas.undoLast();
        expect(mockCanvas.stroke).toBe(0);
    });

    it('should redo last stroke when redoLast is called', () => {
        mockCanvas.mouseDown(event);
        expect(mockCanvas.stroke).toBe(1);
        mockCanvas.undoLast();
        expect(mockCanvas.stroke).toBe(0);
        mockCanvas.redoLast();
        expect(mockCanvas.stroke).toBe(1);
    });

    it('should knows that mouseDown when starts drawing', () => {
        mockCanvas.mouseDown(event);
        expect(mockCanvas.state.mouseDown).toBe(true);   
    });

    it('should knows that mouseUp when ends drawing', () => {
        mockCanvas.mouseDown(event);
        expect(mockCanvas.state.mouseDown).toBe(true); 
        mockCanvas.mouseUp(event);
        expect(mockCanvas.state.mouseDown).toBe(false);   
    }); 
});

