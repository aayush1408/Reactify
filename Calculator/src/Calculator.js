import React from 'react';
import './Calculator.css';
class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
                    value:null,
                    display:' 0 ',
                    waitingforOperand:false,
                    operator:null
            }

    }
    inputData(number){
        if(this.state.waitingforOperand){
            this.setState({
                display:String(number),
                waitingforOperand:false
            })
        }else{
        this.setState({display: this.state.display == 0 ? String(number) : this.state.display + number });
    }
    }
    inputDot(){
        if(this.state.waitingforOperand){
            this.setState({
                display:'.',
                waitingforOperand:false
            })
        }
        else if(this.state.display.indexOf('.') === -1){
            this.setState({display:this.state.display + '.' })
        }
    }

    clearDisplay(){
        this.setState({display:'0'});
    }

    changeSign(){
        this.setState({display: this.state.display.charAt(0) === '-' ? this.state.display.substr(1) : '-' + this.state.display })
    }

    percent(){
        let val = parseFloat(this.state.display);
        this.setState({display : val / 100 })
    }
    performOperation(nextOperator){

        let nextValue = parseFloat(this.state.display); 

        let operations = {
            '/':(prevValue,nextValue) => prevValue/nextValue,
            '*':(prevValue,nextValue) => prevValue*nextValue,
            '+':(prevValue,nextValue) => prevValue+nextValue,
            '-':(prevValue,nextValue) => prevValue-nextValue,
            '=':(prevValue,nextValue)=> nextValue
        }
 
        if (this.state.value === null) {
            this.setState({
                value:nextValue
            })
        }else if(this.state.operator){
            let currentValue = this.state.value || 0;
            let computedValue = operations[this.state.operator](currentValue,nextValue);
            this.setState({
                value:computedValue,
                display:String(computedValue)
            })
        }

        this.setState({
            waitingforOperand:true,
            operator:nextOperator
        })
    }

    render(){
        return(
                <div className="calculator">
                    <div className="calculator-display">{this.state.display}</div>
                    <div className="calculator-keypad">
                        <div className="input-keys">
                            <div className="function-keys">
                                <button className="calculator-key key-clear" onClick={ ()=>this.clearDisplay() } >AC</button>
                                <button className="calculator-key key-sign" onClick={ ()=>this.changeSign() }>+-</button>
                                <button className="calculator-key key-percent" onClick={ ()=>this.percent() }>%</button>  
                            </div>
                            <div className="digit-keys">
                                <button className="calculator-key key-0" onClick={ ()=>this.inputData(0) } >0</button>
                                <button className="calculator-key key-." onClick={ ()=>this.inputDot() } >.</button>
                                <button className="calculator-key key-1" onClick={ ()=>this.inputData(1) } >1</button>
                                <button className="calculator-key key-2" onClick={ ()=>this.inputData(2) } >2</button>
                                <button className="calculator-key key-3" onClick={ ()=>this.inputData(3) } >3</button>
                                <button className="calculator-key key-4" onClick={ ()=>this.inputData(4) } >4</button>
                                <button className="calculator-key key-5" onClick={ ()=>this.inputData(5) } >5</button>
                                <button className="calculator-key key-6" onClick={ ()=>this.inputData(6) } >6</button>
                                <button className="calculator-key key-7" onClick={ ()=>this.inputData(7) } >7</button>
                                <button className="calculator-key key-8" onClick={ ()=>this.inputData(8) } >8</button>
                                <button className="calculator-key key-9" onClick={ ()=>this.inputData(9) } >9</button>
                            </div>
                        </div>
                            <div className="operator-keys">
                                <button className="calculator-key key-divide" onClick={ ()=>this.performOperation('/') } >/</button>
                                <button className="calculator-key key-multiply" onClick={ ()=>this.performOperation('*') } >*</button>
                                <button className="calculator-key key-add" onClick={ ()=>this.performOperation('+') } >+</button>
                                <button className="calculator-key key-subtract" onClick={ ()=>this.performOperation('-') } >-</button>
                                <button className="calculator-key key-equal" onClick={ ()=>this.performOperation('=') }>=</button>
                            </div>    
                        </div>
                    </div>  
            
               )
    }
}

export default Calculator;
