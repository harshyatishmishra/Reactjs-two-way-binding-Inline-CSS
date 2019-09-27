import React from 'react';
import './People.css';
const styleInline = {
    //background-color: 'white',
    font: 'inherit',
    border: '1px soild blue',
    padding: '8px'
};
const people = (props) => {
    return (
        <div className="people">
            <p onClick={props.passClickRef}>I'm {props.name} {props.age}</p>
            <input type="text" onChange={props.passChangedRef} value={props.name} />
        </div>
    )

}

export default people;