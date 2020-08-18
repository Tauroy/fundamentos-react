import React from 'react';

export default props => {
    return (
        <div>
            <span>{props.name} </span>
            <span><strong>{props.years} </strong></span>
            <span>{props.geek ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    )
}