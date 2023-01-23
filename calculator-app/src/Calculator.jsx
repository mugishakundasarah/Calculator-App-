import Symbol from "./Components/Symbol";
import './calculator.css'
import { useState } from "react";

const Calculator = () => {
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
    

    let handleSymbolClick = (symbol) => {
        if(symbol === '='){
            setSolution(10)
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