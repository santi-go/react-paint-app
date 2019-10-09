import SelectColor from './SelectColor'

describe('<SelectColor/>', () => {
    it('should have render SelectColor componet', () => {
        const className = "select-color";
        const wrapper = new SelectColor({className: className});
        expect(wrapper.props.className).toEqual('select-color');
    })
})