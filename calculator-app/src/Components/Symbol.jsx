const Symbol = ({key, symbol}) => {
    return ( 
        <div className="symbol flex justify-center items-center font-bold text-white bg-symbol-dark p-2 rounded-lg text-2xl ml-2.5 mt-2">
            {symbol}
        </div>
     );
}
 
export default Symbol;