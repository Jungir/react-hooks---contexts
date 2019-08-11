import React, {useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext';

 const BookForm = ()=>{
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    
    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book : {title, author}})
        setTitle('');
        setAuthor('');
        
    }
         return (
            <form onSubmit={handleSubmit}>
                <input required onChange={e => setTitle(e.target.value)} type="text" placeholder="book title" value={title}/>
                <input required onChange={e => setAuthor(e.target.value)} type="text" placeholder="book autho" value={author}/>

               
                <button>add book</button>
            </form>
         )
     
 }
 export default BookForm;