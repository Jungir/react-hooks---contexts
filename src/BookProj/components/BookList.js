import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
// class BookList extends Component{
//     //can only be used with class component
//     static contextType = ThemeContext;
//     render(){
//         const {isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className='BookList' style={{color: theme.syntax, background: theme.bg}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>The Way Of Kings</li>
//                     <li style={{background: theme.ui}}>The name of the Wind</li>
//                     <li style={{background: theme.ui}}>the final empire</li>
//                 </ul>
//             </div>
//         )
//     }
// }

const BookList = () => {
    const {books} = useContext(BookContext);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    console.log(theme);
    
    return (
        <div className='BookList' style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                {books.map(book => {
                    return <li key={book.id} style={{background: theme.ui}}>{book.title}</li>
                })}
            </ul>
        </div>
    )
};


export default BookList;