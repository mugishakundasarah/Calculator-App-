const Symbol = ({key, symbol, handleClick}) => {
    let isSymbol = isNaN(symbol) ? true : false
    return ( 
        <div 
            className={`symbol flex justify-center items-center cursor-pointer font-bold bg-symbol-dark p-2 rounded-lg text-2xl ml-2.5 mt-2 ${isSymbol ? 'text-red' : 'text-white'}`}  
            onClick={() => handleClick(symbol)}>
            {symbol}
        </div>
     );
}
 
export default Symbol;