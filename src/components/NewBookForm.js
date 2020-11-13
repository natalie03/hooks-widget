import React, {useState} from 'react';

const NewBookForm = ({ addBook }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Book Name:</label>
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
            <input type="submit" value="Add Book"/>
        </form>
     );
}

export default NewBookForm;
