import React from 'react';

import './style.css';

function BookOverview({imgUrl, title}) {
  return (
    <div className="book-overview">
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default BookOverview;