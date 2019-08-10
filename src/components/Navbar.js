import React, {Component} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component{
    
    
    // to use with funcitons and classes, can consumer multiple context using this syntax
    render(){
        return(
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const {isAuth, toggleAuth} = authContext;
                    const {isLightTheme, light, dark} = themeContext;
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
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        );
    }
}

export default Navbar;