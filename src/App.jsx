import { useRef, useState } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Navbar from './components/Navbar/Navbar'
import WordGrid from './components/WordGrid/WordGrid';
import './app.scss'
import Complete from './components/Complete/Complete';
const wordle = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]

const color = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]


const App = () => {

    const attempt = useRef(0)
    const letterCount = useRef(0)
    const [word, setWord] = useState(wordle)
    const [letterColor, setLetterColor] = useState(color)
    const [gameComplete, setGameComplete] = useState("")
    return (
        <div className={`app ${gameComplete}`}>
            <Navbar />
            <WordGrid attempt={attempt} word={word} setWord={setWord} letterColor={letterColor} />
            <Keyboard
                attempt={attempt}
                word={word}
                letterCount={letterCount}
                setWord={setWord}
                letterColor={letterColor}
                setLetterColor={setLetterColor}
                gameComplete={gameComplete}
                setGameComplete={setGameComplete}
            />
            <Complete gameComplete={gameComplete} />
        </div>

    );
}

export default App;