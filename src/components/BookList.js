import React, { useState } from 'react';
import {v1 as uuidv1 } from 'uuid'
import NewBookForm from './NewBookForm';

const BookList = () => {
    const [books, setBooks] = useState([
        { title: 'Artist\'s Way', id: 1},
        { title: 'Breath', id: 2},
        { title: 'The Splendid and the Vile', id: 3}
    ]);
    const addBook = (title) => {
        setBooks([...books, {title, id: uuidv1()}])
    }
    return (
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (
                    <li key={book.id}>{book.title}</li>
                    )
                })}
            </ul>
            <NewBookForm addBook={addBook}/>
        </div>
     );
}

export default BookList;