import './wordgrid.scss'


const WordGrid = ({ word, letterColor }) => {

    // console.log(letterColor)
    return (
        <div className="wordgrid">
            {word.map((column, index) => {
                return (
                    <div className="line" key={index}>
                        {column.map((row, indexRow) => {
                            return <div className={`block ${letterColor[index][indexRow]}`} key={indexRow}>{row}</div>
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default WordGrid;