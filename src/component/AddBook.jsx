import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !description || !rating) {
      alert('All fields are required!');
      return;
    }

    const newBook = { id: Date.now(), title, author, description, rating };
    dispatch(addBook(newBook));
    navigate('/books');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a New Book</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
