import Symbol from "./Components/Symbol";
import './calculator.css'
import { useState } from "react";
import axios from "axios";

const Calculator = () => {
    let URL = 'http://localhost:5000'
    let [input, setInput] = useState('')
    let [isNegative, setIsNegative] = useState(false)
    let [solution, setSolution] = useState(0)
    let Symbols = [
        'ln','log','^', '÷',
        9,8,7,'×',
        6,5,4, '-',
        3,2,1, '+',
        '+/-',0,'.','='
    ]
    

    let fetchResponse = async() => {
        let symbol;
        let operand1, operand2;
        input.split("").forEach(value => {
            if(isNaN(value)) symbol = value;
        })
        let operands = input.split(symbol)
        operand1 = operands[0]
        operand2 = operands[1]
        let result = await axios.post(`${URL}/calculate`, {operand1, operand2, symbol})
        if(result) setSolution(result.data.data)
    }

    let handleSymbolClick = (symbol) => {
        if(symbol === '='){
            console.log("reached")
            fetchResponse()
        }else if(symbol === '+/-') {
            if(isNegative) {
                setInput(input.split("").splice(0,1).toString())
                setIsNegative(false)
            } 
            else {
                setInput(`-${input}`)
                setIsNegative(true)
            }
        }else{
            setInput(`${input}${symbol}`)
        }                                               
    }

    let handleClear = () => {
        setInput('')
        setSolution()
    }

    return ( 
        <div className="calculator-container mx-auto rounded-lg">
            <div className="result-container mx-auto">
                <div className={`display-input text-white font-bold text-2xl`}>{input}</div>
                <div className="display-result text-white font-bold text-5xl">{solution}</div>
                <button className="text-white bg-green p-4 rounded-lg" onClick={() => handleClear()}>clear</button>
            </div>
            <div className="symbol-container rounded-lg flex flex-wrap">
                {
                    Symbols.map((symbol, index) => (
                        <Symbol symbol={symbol} handleClick={handleSymbolClick}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Calculator;