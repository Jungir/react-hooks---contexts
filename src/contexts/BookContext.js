import React, {createContext, useState} from 'react'
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBoks] = useState([
        {title: 'name of book 1', id: Math.random()},
        {title: 'name of book 2', id: Math.random()},
        {title: 'name of book 3', id: Math.random()},
        {title: 'name of book 4', id: Math.random()}
    ]);
    return(
        <BookContext.Provider value = {{books}}>
            {props.children}
        </BookContext.Provider> 
    )
};

export default BookContextProvider;

