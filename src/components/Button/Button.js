import React from 'react';

function Button(props){
    const line = "line"
    return (
        <button 
            className={props.className}
            onClick={props.onClick}
        >
        <div className={line}>{props.legend}</div>    
        </button>
    );
}

export default Button;