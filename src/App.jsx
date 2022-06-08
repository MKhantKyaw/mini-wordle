import { useRef, useState } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Navbar from './components/Navbar/Navbar'
import WordGrid from './components/WordGrid/WordGrid';

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

    return (
        <>
            <Navbar />
            <WordGrid attempt={attempt} word={word} setWord={setWord} letterColor={letterColor} />
            <Keyboard
                attempt={attempt}
                word={word}
                letterCount={letterCount}
                setWord={setWord}
                letterColor={letterColor}
                setLetterColor={setLetterColor}
            />
        </>

    );
}

export default App;