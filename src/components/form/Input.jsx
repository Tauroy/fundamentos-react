import React, { useState } from 'react';
import  './Input.css';

export default props => {

    const [value, setValue] = useState('Inicial');

    function whenChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="Input">
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'Column'
            }}>
                <input value={value} onChange={whenChange}/>
                <input value={value} readOnly/>
                <input value={undefined}/>
            </div>
        </div>
    )
}