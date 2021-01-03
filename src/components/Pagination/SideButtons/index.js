import React from 'react';

import './index.css';

function SideButtons({ number, paginate, children }) {
  console.log(number);

  return (
    <>
      <li key={number} className="page-number">
        <button
          onClick={() => paginate(number)}
          className={`side-button`}
        >
          {children}
        </button>
      </li>
    </>
  );
}

export default SideButtons;
