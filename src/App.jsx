import Keyboard from './components/Keyboard/Keyboard';
import Navbar from './components/Navbar/Navbar'
import WordGrid from './components/WordGrid/WordGrid';

const App = () => {
    return (
        <>
            <Navbar />
            <WordGrid />
            <Keyboard />
        </>
    );
}

export default App;