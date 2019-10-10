import React from 'react';
import './Canvas.scss'

class Canvas extends React.Component {
    // static defaultProps = {
    //     style: {
    //       background: 'green',
    //     },
    //     strokeStyle: '#7d7d7d',
    //     lineWidth: 10,
    //     className: 'canvas',
    //     height: 500,
    //     width: 500,
    //     onDraw: () => { console.log('i have drawn!'); },
    // };

    constructor(...props) {
        super(...props);

        this.state = {
            mouseDown: false,
            mouseLocation: [0, 0],
        };
    }

    componentDidMount() {
        const { brushCol, lineWidth } = this.props;
        const canvas = this.refs.canvas;

        this.ctx = canvas.getContext('2d');
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = brushCol;
        this.ctx.lineJoin = this.ctx.lineCap = 'round';

        this.bb = canvas.getBoundingClientRect();
    }
    
    mouseDown = e => {
        const { brushCol} = this.props;

        if (!this.state.mouseDown) this.setState({ mouseDown: true });
        
        this.ctx.strokeStyle = brushCol;

        this.setState({
          mouseLocation: [e.pageX || e.touches[0].pageX, e.pageY || e.touches[0].pageY],          
        });
        
        this.ctx.moveTo(
          (e.pageX || e.touches[0].pageX) - this.bb.left,
          (e.pageY || e.touches[0].pageY) - this.bb.top
        );

        this.ctx.beginPath();
    }

    mouseUp = () => (this.setState({ mouseDown: false }));

    mouseMove = e => {
        if (this.state.mouseDown) {
            if (e.touches) e.preventDefault();

            if (
                (e.pageX || e.touches[0].pageX) > 0 &&
                (e.pageY || e.touches[0].pageY) < this.props.height
            ) {
                this.ctx.lineTo(
                ((e.pageX || e.touches[0].pageX) - this.bb.left),
                ((e.pageY || e.touches[0].pageY) - this.bb.top)
                );

                this.ctx.stroke();
            }
        }
    }
    render() {
        const {
            className,
            width,
            height,
            onDraw,
            style,
        } = this.props;
        return (
            <div className={className}>
                <canvas
                        ref="canvas"
                        className={`${className}__canvas`}
                        width={width}
                        height={height}
                        onClick={onDraw}
                        style={
                            Object.assign({}, style, {
                                width: this.props.width,
                                height: this.props.height,
                            })
                        }

                        onMouseDown={this.mouseDown}
                        onTouchStart={this.mouseDown}

                        onMouseUp={this.mouseUp}
                        onTouchEnd={this.mouseUp}

                        onMouseMove={this.mouseMove}
                        onTouchMove={this.mouseMove}
                    />
            </div>    
        )
    }
}

export default Canvas;