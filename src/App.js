import React from 'react';
import BookContextProvider from './betterReadProject/contexts/BookContext';
import Navbar from './betterReadProject/components/Navbar';
import BookList from './betterReadProject/components/BookList';
import BookForm from './betterReadProject/components/BookForm';
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
