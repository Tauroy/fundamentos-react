import React from 'react';

export default (props) => {
    let isPar = props.number % 2 === 0;
    return (
        <div>
            {isPar ? 
            <span>Par</span> : 
            <span>Impar</span>}
        </div>
    );
}