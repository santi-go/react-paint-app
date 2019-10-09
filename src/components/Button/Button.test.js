import Button from './Button';

describe('<Button/>', () => {
    it('should have render button element', () => {
        const className = "btn";
        const wrapper = new Button({ className: className })

        expect(wrapper.props.className).toEqual("btn");
    })
})
