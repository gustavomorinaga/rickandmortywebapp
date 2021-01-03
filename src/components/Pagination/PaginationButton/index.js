import React from 'react';

import './index.css';

function PaginationButton({ number, currentPage, paginate }) {
  return (
    <li key={number} className="page-number">
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
