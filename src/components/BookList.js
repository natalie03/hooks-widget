import React, { useState } from 'react';
import {v1 as uuidv1 } from 'uuid'

const BookList = () => {
    const [books, setBooks] = useState([
        { title: 'Artist\'s Way', id: 1},
        { title: 'Breath', id: 2},
        { title: 'The Splendid and the Vile', id: 3}
    ]);
    const addBook = () => {
        setBooks([...books, {title: 'new book', id: uuidv1()}])
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
            <button onClick={addBook}>Add a book</button>
        </div>
     );
}

export default BookList;