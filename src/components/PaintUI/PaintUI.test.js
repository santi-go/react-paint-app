import React from 'react';
import PaintUI from './PaintUI';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<PaintUI/>', () => {
    let mockPaintUI = {};
    let wrapper = {};
    
    beforeAll(() => {
        wrapper = mount(<PaintUI className="paint-ui"></PaintUI>);
        mockPaintUI = wrapper.instance();
        
    });

    it('should have render PaintUI component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should handle ActiveColor state', () => {
        expect(mockPaintUI.state.activeColor).toEqual({ "className": "color-btn black-btn", "name": "black"});
        mockPaintUI.handleActiveColor({ "className": "green-btn black-btn", "name": "green"});
        expect(mockPaintUI.state.activeColor).toEqual({ "className": "green-btn black-btn", "name": "green"});
    });

    it('should handle ActiveWidth state', () => {
        expect(mockPaintUI.state.activeWidth).toEqual({ width: 5, className: "width-btn thin-btn"});
        mockPaintUI.handleActiveWidth({ width: 10, className: "width-btn medium-btn"});
        expect(mockPaintUI.state.activeWidth).toEqual({ width: 10, className: "width-btn medium-btn"});
    }); 
});

