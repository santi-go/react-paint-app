import React from 'react';

function Button(props){
    return (
        <button 
            className={props.className}
            onClick={props.onClick}
        >{props.isOn ? "On" : "Off"}</button>
    );
}

export default Button;