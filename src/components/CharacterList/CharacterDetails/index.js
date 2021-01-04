import React from 'react';

import './index.css';

function CharacterDetails({ details }) {
  return (
    <article className="character-details">
      <h3>Details</h3>
      <ul className="character-details-content">
        <li><strong>Gender:</strong> {details.gender}</li>
        <li><strong>Origin:</strong> {details.origin.name}</li>
        <li><strong>Last Location:</strong> {details.location.name}</li>
        <li><strong>Total Apparitions:</strong> {details.episode.length}</li>
      </ul>
    </article>
  );
}

export default CharacterDetails;
