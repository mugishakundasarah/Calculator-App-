import Symbol from "./Components/Symbol";
import './calculator.css'

const Calculator = () => {
    let Symbols = [
        'ln','log','^', '÷',
        9,8,7,'×',
        6,5,4, '-',
        3,2,1, '+',
        '+/-',0,'.','='
    ]
    return ( 
        <div className="calculator-container mx-auto rounded-lg flex">
            <div className="symbol-container rounded-lg flex flex-wrap">
                {
                    Symbols.map((symbol, index) => (
                        <Symbol symbol={symbol}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Calculator;