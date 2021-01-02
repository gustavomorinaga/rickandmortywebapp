import React from 'react';

import './index.css';

import HelpIcon from '@material-ui/icons/Help';

function renderStatus(status) {
  switch (status) {
    case 'Alive':
      return <svg version="1.0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 150 73" enableBackground="new 0 0 150 73"> <polyline fill="none" stroke="#009B9E" strokeWidth="5" strokeMiterlimit="10" points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"/> </svg>;
    case 'Dead': 
      return <svg height="50px" width="50px"> <line x1="0" y1="25" x2="50" y2="25" stroke="red" strokeWidth="2" strokeMiterlimit="10" /> </svg>
    default: 
      return <HelpIcon style={{ fontSize: 50, color: 'gray' }} />
  }
}

function HeartRate({ status }) {
  return (
    <div className="heart-rate">
      {
        renderStatus(status)
      }
    </div>
  );
}

export default HeartRate;
