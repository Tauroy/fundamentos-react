import React from 'react';
import DirectChildren from './DirectChildren';

export default props => {
    return (
        <div>
            <DirectChildren name='Yago' years={20} geek={true} />
            <DirectChildren name='Amanda' years={15} geek={false} />
        </div>
    )
}