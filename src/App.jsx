import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from './component/HomePage';
import BrowseBooks from './component/BrowseBooks';
import AddBook from './component/AddBook';
import BookDetails from './component/BookDetails';
import NotFound from './component/NotFound';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
