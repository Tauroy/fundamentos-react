import React from 'react';

export default props => {
    
    let{min, max} = props;
    let valueRandom = parseInt(Math.random() * (max - min)) + min;
    
    return (
        <div>
            <h2>Valores aleátorios:</h2>
            <p>Máximo:<strong>{max}</strong></p>
            <p>Mínimo:<strong>{min}</strong></p>
            <p>Valor:<strong>{valueRandom}</strong></p>
        </div>
    );
};