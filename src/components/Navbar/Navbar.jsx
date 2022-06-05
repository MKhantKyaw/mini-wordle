import './navbar.scss'
import { Leaderboard, Menu, Settings } from '@mui/icons-material';

const Navbar = () => {
    return (
        <div className="navbar">
            <Menu className="menu icon" />
            <div className="title">Mini Wordle</div>
            <div className="items">
                <Leaderboard className="icon" />
                <Settings className="icon" />
            </div>
        </div>
    );
}

export default Navbar;