import './complete.scss'

const Complete = ({ gameComplete }) => {
    const clickAction = () => {
        window.location.reload();
    }
    if (gameComplete === "win") {
        return (
            <div className="complete">
                <h1>You win</h1>
                <button onClick={clickAction}>Play again</button>
            </div>
        );
    } else if (gameComplete === "lose") {
        return (
            <div className="complete">
                <h1>You lose</h1>
                <button onClick={clickAction}>Play again</button>
            </div>
        );
    }
}

export default Complete;