import TableProduct from './components/repetition/TableProduct';
import ListStudent from './components/repetition/ListStudent';
import WithParameter from './components/basic/withParameter';
import FamilyMember from './components/basic/FamilyMember';
import EvenOrOdd from './components/conditional/EvenOrOdd';
import UserInfo from './components/conditional/UserInfo';
import Fragments from './components/basic/Fragments';
import Random from './components/basic/Random';
import Family from './components/basic/Family';
import First from './components/basic/First';
import Card from './components/layout/Card';
import React from 'react';
import './App.css';
import DirectDad from './components/comunication/DirectDad';
import IndirectDad from './components/comunication/IndirectDad';
import Input from "./components/form/Input";
import Counter from "./components/counter/Counter.jsx";

export default () =>
    <div className='App'>

        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card title='#12 - Contador' color='#424242'>
               <Counter numberInitial={10} ></Counter>
            </Card>

            <Card title='#11 - Componente controlado' color='#E45F56'>
               <Input />
            </Card>

            <Card title='#10 - Comunicação indireta' color='#8BAD39'>
               <IndirectDad />
            </Card>

            <Card title='#09 - Comunicação direta' color='#59323C'>
               <DirectDad />
            </Card>
      
            <Card title='#08 - Rederização condicional' color='#982395'>
                <EvenOrOdd number={21} />
                <UserInfo user={{ name: 'Yago' }} />
            </Card>

            <Card title='#07 - Desafio Tabela de produtos' color='#FF9A65'>
                <TableProduct />
            </Card>

            <Card title='#06 - Repetição' color='#FF4C65'>
                <ListStudent />
            </Card>

            <Card title='#05 - Componente com Filhos' color='#00CBF8'>
                <Family surname='Tomaz'>
                    <FamilyMember name='Yago' />
                    <FamilyMember name='Rosangela' />
                    <FamilyMember name='Nathalia' />
                </Family>
            </Card>

            <Card title='#04 - Desafio Aleatório' color='#FA6900'>
                <Random min={1} max={60} />
            </Card>

            <Card title='#03 - Fragmento' color='#E94C6F'>
                <Fragments />
            </Card>

            <Card title='#02 - Com Parâmetro' color='#E8B71A'>
                <WithParameter title='Matemática' aluno='Yago' nota={9.3} />
            </Card>

            <Card title='#01 - Primeiro Componenete' color='#588C73'>
                <First />
            </Card>
        </div>
    </div>
