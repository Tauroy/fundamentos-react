import React from 'react';
import products from '../../data/product';
import './TableProduct.css';

export default (props) => {

    function getRow() {
        return products.map((product, i) => {
            return (
                <tr className={i % 2 === 0 ? 'Par' : 'Impar'} key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R$ {product.price.toFixed(2).replace('.', ',')}</td>
                </tr>
            );
        });
    }

    return (
        <div className='tableProduct'>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getRow()}
                </tbody>
            </table>
        </div>
    );
}