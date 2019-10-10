import PaintUI from './PaintUI';

describe('<PaintUI/>', () => {
    it('should have render PaintUI element', () => {
        const className = "paint-ui";
        const wrapper = new PaintUI({className: className});
        
        expect(wrapper.props.className).toEqual("paint-ui");
    })
})

