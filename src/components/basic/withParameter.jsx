import React from 'react';

export default function withParameter(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação';
    const nota = Math.ceil(props.nota);
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                {props.aluno}
                tem nota
                <strong> {nota} </strong>
                e foi
                <strong> {status} </strong>
            </p>
        </div>
    );
}