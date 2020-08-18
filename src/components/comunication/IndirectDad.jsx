import React, { useState } from 'react';
import IndirectChildren from './IdirectChildren';

export default props => {
    const [name , setName] = useState('?');
    const [years , setYears] = useState(0);
    const [geek , setNerd] = useState(false);

    function getinformation(name, years, geek) {
      setName(name);
      setYears(years);
      setNerd(geek);
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{years}</strong> </span>
                <span>{geek ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndirectChildren click={getinformation}></IndirectChildren>
        </div>
    )
}