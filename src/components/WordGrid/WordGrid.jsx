import './wordgrid.scss'


const WordGrid = ({ word, setWord, attempt }) => {

    return (
        <div className="wordgrid">
            {word.map((column, index) => {
                return (
                    <div className="line" key={index}>
                        {column.map((row, indexRow) => {
                            return <div className="block" key={indexRow}>{row}</div>
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default WordGrid;