import './keyboard.scss'
import { Backspace } from '@mui/icons-material'

const Keyboard = () => {
    const clickAction = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="keyboard">
            <div className="top">
                <button value="q" className="key" onClick={(e) => clickAction(e)}>q</button>
                <button value="w" className="key" onClick={(e) => clickAction(e)}>w</button>
                <button value="e" className="key" onClick={(e) => clickAction(e)}>e</button>
                <button value="r" className="key" onClick={(e) => clickAction(e)}>r</button>
                <button value="t" className="key" onClick={(e) => clickAction(e)}>t</button>
                <button value="y" className="key" onClick={(e) => clickAction(e)}>y</button>
                <button value="u" className="key" onClick={(e) => clickAction(e)}>u</button>
                <button value="i" className="key" onClick={(e) => clickAction(e)}>i</button>
                <button value="o" className="key" onClick={(e) => clickAction(e)}>o</button>
                <button value="p" className="key" onClick={(e) => clickAction(e)}>p</button>
            </div>

            <div className="middle">
                <button value="a" className="key" onClick={(e) => clickAction(e)}>a</button>
                <button value="s" className="key" onClick={(e) => clickAction(e)}>s</button>
                <button value="d" className="key" onClick={(e) => clickAction(e)}>d</button>
                <button value="f" className="key" onClick={(e) => clickAction(e)}>f</button>
                <button value="g" className="key" onClick={(e) => clickAction(e)}>g</button>
                <button value="h" className="key" onClick={(e) => clickAction(e)}>h</button>
                <button value="j" className="key" onClick={(e) => clickAction(e)}>j</button>
                <button value="k" className="key" onClick={(e) => clickAction(e)}>k</button>
                <button value="l" className="key" onClick={(e) => clickAction(e)}>l</button>
            </div>

            <div className="bottom">
                <button value="Enter" className="bkey" onClick={(e) => clickAction(e)}>Enter</button>
                <button value="z" className="key wrong" onClick={(e) => clickAction(e)}>z</button>
                <button value="x" className="key placement" onClick={(e) => clickAction(e)}>x</button>
                <button value="c" className="key correct" onClick={(e) => clickAction(e)}>c</button>
                <button value="v" className="key" onClick={(e) => clickAction(e)}>v</button>
                <button value="b" className="key" onClick={(e) => clickAction(e)}>b</button>
                <button value="n" className="key" onClick={(e) => clickAction(e)}>n</button>
                <button value="m" className="key" onClick={(e) => clickAction(e)}>m</button>
                <button value="bspace" className="bkey" onClick={(e) => clickAction(e)}><Backspace className="icon" /></button>
            </div>
        </div >
    );
}

export default Keyboard;