import React from 'react';
import Button from '../Button/Button'
import './UndoRedo.scss';

class UndoRedo extends React.Component {
    renderDoButton(i) {
        if(i === 0) {
            return (
                <Button 
                    className={this.props.className} 
                    onClick={() => this.props.unDo()}
                    legend="UNDO"
                ></Button>
            );
        }
        if (i === 1) {
            return (
                <Button 
                    className={this.props.className} 
                    onClick={() => this.props.reDo()}
                    legend="REDO"
                ></Button>
            );
        }
        
    }

    render() {
        return (
            <div className="undo-redo">
                {this.renderDoButton(0)}
                {this.renderDoButton(1)}
            </div>
        );
    }
}

export default UndoRedo;