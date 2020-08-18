import "./Counter.css";
import React, {Component} from 'react';

class Counter extends Component {

       state = {
            number: this.props.numberInitial || 0,
            passo: this.props.passoInitial || 5,
        };


        inc = () => {
            this.setState({
                number: this.state.number + this.state.passo,
            });
        };

        dec = () => {
            this.setState({
                number: this.state.number - this.state.passo,
            });
        };

        setPasso = (event) => {
            this.setState({
                passo: +event.target.value,
            });
        };
 

    render(){
        return (
            <div className='Counter'>
                <h2>Contador</h2>
                <h3>{this.state.number}</h3>
                <div>
                    <label htmlFor="passoInput">Passo:</label>
                    <input id="passoInput" type='number' value={this.state.passo} onChange={this.setPasso}></input>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Counter