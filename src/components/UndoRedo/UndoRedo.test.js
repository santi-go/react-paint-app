import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UndoRedo from './UndoRedo';

configure({ adapter: new Adapter() });

describe ('<UndoRedo/>', () =>{
    let wrapper = {};
    let mockUndoRedo = {};
    const mockUndoLast = () => {};
    const mockRedoLast = () => {};
    const className = 'undo-redo'

    beforeAll(() => {
        wrapper = mount(<UndoRedo 
            className={className}
            unDo={mockUndoLast}
            reDo={mockRedoLast}>></UndoRedo>);
            mockUndoRedo = wrapper.instance();   
    });

    it('should have render PaintUI component', () => {
        expect(wrapper.exists()).toBe(true);
    });
});