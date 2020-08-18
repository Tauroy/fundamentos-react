import React from 'react';
import If, { Else } from './If';

export default props => {
    const user = props.user || {};
    return (
        <div>
            <If test={user && user.name}>
                Seja Bem vindo <strong>{user.name}</strong>
                <Else>
                    Seja Bem vindo <strong>Indefinido</strong>
                </Else>
            </If>
        </div>
    )
}