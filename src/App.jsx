import { useRef, useState } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Navbar from './components/Navbar/Navbar'
import WordGrid from './components/WordGrid/WordGrid';

const defaultWord = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
]

const App = () => {

    const attempt = useRef(0)
    const letterCount = useRef(0)
    const [word, setWord] = useState(defaultWord)

    return (
        <>
            <Navbar />
            <WordGrid attempt={attempt} word={word} setWord={setWord} />
            <Keyboard attempt={attempt} word={word} letterCount={letterCount} setWord={setWord} />
        </>
    );
}

export default App;