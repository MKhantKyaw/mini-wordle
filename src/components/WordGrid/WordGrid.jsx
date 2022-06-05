import './wordgrid.scss'
import { defaultWord } from './word';

const WordGrid = () => {
    return (
        <div className="wordgrid">
            {defaultWord.map((column) => {
                return (
                    <div className="line">
                        {column.map((row) => {
                            return <div className="block">{row}</div>
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default WordGrid;