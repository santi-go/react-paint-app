import React from 'react';
import './SelectColor.scss';

class SelectColor extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            
        }
    }
    
    
    render() {
        const {
            selectColor
        } = this.props;
        return (
            <div className={selectColor}>
                Buttons!
            </div>
        );
    }
}

export default SelectColor;