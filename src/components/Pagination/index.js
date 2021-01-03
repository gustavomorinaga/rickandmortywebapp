import React from 'react';
import PaginationButton from './PaginationButton';
import SideButtons from './SideButtons';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './index.css';

function Pagination({ totalPages, paginate, currentPage }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const pagesLength = pages.slice((currentPage - 1), currentPage + 9).length;

  const pageNumbers = pagesLength === 10 ? pages.slice((currentPage - 1), currentPage + 9) : pages.slice((currentPage - 3), currentPage + 4);
  const firstPage = 1;
  const lastPage = totalPages;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <nav>
      <ul className="pagination">
        <SideButtons number={previousPage} paginate={paginate} currentPage={currentPage} totalPages={totalPages}>
          <ArrowBackIcon />
        </SideButtons>
        {pageNumbers[0] === 1 ? '' : <PaginationButton number={firstPage} currentPage={currentPage} paginate={paginate} />}
        {pageNumbers.map(number => (
          <li key={number} className="page-number">
            <button
              onClick={() => paginate(number)}
              className={currentPage === number ? 'current-page' : ''}
            >
              {number}
            </button>
          </li>
        ))}
        {pageNumbers[pageNumbers.length - 1] === totalPages ? '' : <PaginationButton number={lastPage} currentPage={currentPage} paginate={paginate} />}
        <SideButtons number={nextPage} paginate={paginate} currentPage={currentPage} totalPages={totalPages}>
          <ArrowForwardIcon />
        </SideButtons>
      </ul>
    </nav>
  );
}

export default Pagination;
