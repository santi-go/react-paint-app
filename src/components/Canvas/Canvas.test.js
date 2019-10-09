import Canvas from './Canvas';

describe('<Canvas/>', () => {
    it('should have render canvas element', () => {
        const className = 'canvas';
        const wrapper = new Canvas({ className: className }).render()

        expect(wrapper.props.className).toEqual("canvas");
    })
})

