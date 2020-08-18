import React from 'react';
import './Card.css';
export default props => {

    let styleCard ={
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className='Card' style={styleCard}>
            <div className='Title'>
                {props.title}
            </div>
            <div className='Content'>
               {props.children}
            </div>
        </div>
    );
}