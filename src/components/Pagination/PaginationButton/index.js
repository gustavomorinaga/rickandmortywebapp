import React from 'react';

import './index.css';

function PaginationButton({ number, currentPage, paginate }) {
  return (
    <li id={number} key={number} className="page-number">
      <button
        onClick={() => paginate(number)}
        className={currentPage === number ? 'current-page' : ''}
      >
        {number}
      </button>
    </li>
  );
}

export default PaginationButton;
