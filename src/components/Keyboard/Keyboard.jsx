import './keyboard.scss'
import { Backspace } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import wordExists from 'word-exists'
import { compare } from './Compare'
import { dictionary } from '../../words'

const topKeys = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
const midKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
const botKeys = ["z", "x", "c", "v", "b", "n", "m"]

const allKeys = [topKeys, botKeys, midKeys, "Enter", "Backspace"].flat()

const Keyboard = ({ setWord, attempt, letterCount, word, letterColor, setLetterColor }) => {
    const [mainWord, setMainWord] = useState(dictionary[Math.floor(Math.random() * 211)])
    //main word is decomposed into array

    const originWord = mainWord.toLowerCase().split("")

    console.log(mainWord)

    const newColor = [...letterColor]


    const clickAction = (value) => {
        if (attempt.current === 5) {
            return window.removeEventListener("keydown", (e) => clickAction(e.key))

        }
        if (allKeys.includes(value)) {
            const newState = [...word]

            const clickedWord = value
            if (clickedWord === "Backspace") {
                newState[attempt.current][letterCount.current - 1] = ""
                if (letterCount.current !== 0) letterCount.current -= 1
            }
            if (clickedWord !== "Backspace" && clickedWord !== "Enter" && letterCount.current < 5) {
                newState[attempt.current][letterCount.current] = clickedWord.toUpperCase()
                letterCount.current += 1;
            }

            if (clickedWord === "Enter" && letterCount.current === 5) {
                const inputWord = newState[attempt.current].join('')
                if (wordExists(inputWord) === true) {
                    newColor[attempt.current] = compare(originWord, newState[attempt.current])
                    attempt.current += 1
                    letterCount.current = 0
                    setLetterColor(newColor)
                }
            }
            setWord(newState)
        }
    }



    useEffect(() => {
        window.addEventListener("keydown", (e) => clickAction(e.key))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="keyboard">
            <div className="top">
                {topKeys.map((topKey, index) => {
                    return (
                        <button value={topKey} className="key" key={index} onClick={(e) => clickAction(e.target.value)}>{topKey}</button>
                    )
                })}
            </div>

            <div className="middle">
                {midKeys.map((midKey, index) => {
                    return (
                        <button value={midKey} className="key" key={index} onClick={(e) => clickAction(e.target.value)}>{midKey}</button>
                    )
                })}
            </div>

            <div className="bottom">
                <button value="Enter" className="bkey" onClick={(e) => clickAction(e.target.value)}>Enter</button>
                {botKeys.map((botKey, index) => {
                    return (
                        <button value={botKey} className="key" key={index} onClick={(e) => clickAction(e.target.value)}>{botKey}</button>
                    )
                })}
                <button value="Backspace" className="bkey" onClick={(e) => clickAction(e.target.value)}><Backspace className="icon" /></button>
            </div>
        </div >
    );
}

export default Keyboard;