import React from 'react';
import { useParams, Link } from 'react-router-dom';


const bookDetails = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A novel about the American dream set in the 1920s.', rating: 4.5 },
  { id: 2, title: '1984', author: 'George Orwell', description: 'A dystopian novel that explores the dangers of totalitarianism.', rating: 4.7 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A coming-of-age story set in the Deep South, addressing serious issues of race and injustice.', rating: 4.8 },
  { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'A story about teenage angst and alienation, narrated by the iconic Holden Caulfield.', rating: 4.0 },
  { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A romantic novel that explores the issues of class, marriage, and morality in early 19th century England.', rating: 4.6 },
  { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'A fantasy novel that follows the adventures of Bilbo Baggins in Middle-earth.', rating: 4.8 },
  { id: 7, title: 'Fahrenheit 451', author: 'Ray Bradbury', description: 'A dystopian novel about a future society where books are banned and "firemen" burn them.', rating: 4.2 },
  { id: 8, title: 'The Alchemist', author: 'Paulo Coelho', description: 'A philosophical novel about a shepherd’s journey to discover his personal legend.', rating: 4.5 },
  { id: 9, title: 'Brave New World', author: 'Aldous Huxley', description: 'A novel that anticipates developments in reproductive technology and sleep-learning.', rating: 4.3 },
  { id: 10, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', description: 'A story about a man who remains eternally young while his portrait ages.', rating: 4.4 },
  { id: 11, title: 'Moby-Dick', author: 'Herman Melville', description: 'An epic tale of obsession and revenge on the high seas.', rating: 4.1 },
  { id: 12, title: 'War and Peace', author: 'Leo Tolstoy', description: 'A historical novel that intertwines the lives of families during the Napoleonic Wars.', rating: 4.6 },
  { id: 13, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', description: 'A psychological novel about a young man who commits murder and grapples with guilt.', rating: 4.5 },
  { id: 14, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', description: 'A series of seven fantasy novels that take place in the magical land of Narnia.', rating: 4.7 },
  { id: 15, title: 'The Grapes of Wrath', author: 'John Steinbeck', description: 'A novel about the hardships of American farmers during the Great Depression.', rating: 4.2 },
  { id: 16, title: 'The Fault in Our Stars', author: 'John Green', description: 'A poignant love story about two teenagers who meet in a cancer support group.', rating: 4.3 },
  { id: 17, title: 'The Road', author: 'Cormac McCarthy', description: 'A bleak, post-apocalyptic tale of a father and son trying to survive.', rating: 4.1 },
  { id: 18, title: 'The Kite Runner', author: 'Khaled Hosseini', description: 'A story of friendship and redemption set against the backdrop of a changing Afghanistan.', rating: 4.5 },
  { id: 19, title: 'Little Fires Everywhere', author: 'Celeste Ng', description: 'A novel that explores the clash of culture and class in a suburban community.', rating: 4.4 },
  { id: 20, title: 'Educated', author: 'Tara Westover', description: 'A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world.', rating: 4.6 },
];


const BookDetails = () => {
  const { id } = useParams();
  const book = bookDetails.find((book) => book.id === parseInt(id));

  return (
    <div>
      {book ? (
        <>
          <h1>{book.title}</h1>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Rating:</strong> {book.rating}</p>
          <Link to="/books">Back to Browse</Link>
        </>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
};

export default BookDetails;
