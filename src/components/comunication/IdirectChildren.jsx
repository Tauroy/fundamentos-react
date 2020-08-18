import React from 'react';

export default props => {
    const getinformation = props.click;
    const generateYears = () => parseInt(Math.random() * [20]) + 50;
    const generateGeek = () => Math.random() > 0.5;
    return (
        <div>
            <div>Filho</div>
            <button onClick={ _ => getinformation('Yago', generateYears(), generateGeek())}>
                Fornecer informações
            </button>
        </div>
    )
}