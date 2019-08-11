import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {isAuth, toggleAuth} = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return(
        <nav className="Navbar" style={{background: theme.ui, color : theme.syntax}}>
        <h1>Context App</h1>
        <div onClick={toggleAuth}>
            {isAuth ? 'logged in ' : 'logged out'}
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    )
}
export default Navbar;