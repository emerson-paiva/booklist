import React from 'react';
import { useParams } from 'react-router-dom';

import BOOKS from '../../assets/books-data';

function BookInfoPage() {
  const { id } = useParams();
  const book = BOOKS.find(book => book.id === +id);

  console.log(book);
  return (
    <div>
      <img src={book.imageUrl} alt={book.title} />
      <h1>{book.title} - {book.author}</h1>
    </div>
  );
}

export default BookInfoPage;