import React, {Component} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component{
    
    
    render(){
        return(
            // to use with funcitons and classes, can consumer multiple context using this syntax
            <ThemeContext.Consumer>{(context)=>{
                const {isLightTheme, light, dark} = context;
                const theme = isLightTheme ? light : dark;
                return(
                    <nav className="Navbar" style={{background: theme.ui, color : theme.syntax}}>
                    <h1>Context App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                )
            }}</ThemeContext.Consumer>
        )
    }
}

export default Navbar;