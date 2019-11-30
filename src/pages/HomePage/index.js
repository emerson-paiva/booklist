import React from 'react';
import { Link } from 'react-router-dom';

import BookOverview from '../../components/BookOverview';

import BOOKS from '../../assets/books-data';

import './style.css';

function HomePage() {
  return (
    <div className='home-page'>
      {BOOKS.map(({ id, title, imageUrl }) => (
        <Link to={`book/${id}`} key={id}>
          <BookOverview
            className='collection-overview'
            imgUrl={imageUrl}
            title={title}
          />
        </Link>
      ))}
    </div>
  );
}

export default HomePage