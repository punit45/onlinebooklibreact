import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../redux/booksSlice';

const allBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction' },
  { id: 2, title: '1984', author: 'George Orwell', category: 'Non-Fiction' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Sci-Fi'  },
{ id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger',category: 'Fiction' },
{ id: 5, title: 'Pride and Prejudice', author: 'Jane Austen',category: 'Mystery'  },
{ id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien',category: 'Fiction'},
{ id: 7, title: 'Fahrenheit 451', author: 'Ray Bradbury', category: 'Mystery' },
{ id: 8, title: 'The Alchemist', author: 'Paulo Coelho', category: 'Sci-Fi' },
{ id: 9, title: 'Brave New World', author: 'Aldous Huxley',category: 'Sci-Fi'  },
{ id: 10, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', category: 'Fiction' },
{ id: 11, title: 'Moby-Dick', author: 'Herman Melville',category: 'Mystery'},
{ id: 12, title: 'War and Peace', author: 'Leo Tolstoy', category: 'Sci-Fi'  },
{ id: 13, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky',category: 'Sci-Fi'  },
{ id: 14, title: 'The Chronicles of Narnia', author: 'C.S. Lewis',category: 'Non-Fiction' },
{ id: 15, title: 'The Grapes of Wrath', author: 'John Steinbeck',category: 'Fiction' },
{ id: 16, title: 'The Fault in Our Stars', author: 'John Green', category: 'Mystery' },
{ id: 17, title: 'The Road', author: 'Cormac McCarthy', category: 'Fiction'},
{ id: 18, title: 'The Kite Runner', author: 'Khaled Hosseini',category: 'Sci-Fi'  },
{ id: 19, title: 'Little Fires Everywhere', author: 'Celeste Ng', category: 'Mystery' },
{ id: 20, title: 'Educated', author: 'Tara Westover',category: 'Fiction'}
];



const BrowseBooks = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filteredBooks = allBooks.filter((book) => book.category === category);
    dispatch(setBooks(filteredBooks));
  }, [category, dispatch]);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Browse Books: {category}</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title} by {book.author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;
