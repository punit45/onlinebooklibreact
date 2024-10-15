import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery'];
const popularBooks = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A novel about the American dream set in the 1920s.', rating: 4.5 },
  { id: 2, title: '1984', author: 'George Orwell', description: 'A dystopian novel that explores the dangers of totalitarianism.', rating: 4.7 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A coming-of-age story set in the Deep South, addressing serious issues of race and injustice.', rating: 4.8 },
  { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'A story about teenage angst and alienation, narrated by the iconic Holden Caulfield.', rating: 4.0 },
  { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A romantic novel that explores the issues of class, marriage, and morality in early 19th century England.', rating: 4.6 },
  { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'A fantasy novel that follows the adventures of Bilbo Baggins in Middle-earth.', rating: 4.8 },
  { id: 7, title: 'Fahrenheit 451', author: 'Ray Bradbury', description: 'A dystopian novel about a future society where books are banned and "firemen" burn them.', rating: 4.2 },
  { id: 8, title: 'The Alchemist', author: 'Paulo Coelho', description: 'A philosophical novel about a shepherd’s journey to discover his personal legend.', rating: 4.5 },
  { id: 9, title: 'Brave New World', author: 'Aldous Huxley', description: 'A novel that anticipates developments in reproductive technology and sleep-learning.', rating: 4.3 },
  { id: 10, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', description: 'A story about a man who remains eternally young while his portrait ages.', rating: 4.4 }
];

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Online Book Library</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/books/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <h2>Popular Books</h2>
      <ul>
        {popularBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
