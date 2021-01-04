import React, { useState } from 'react';
import HeartRate from '../../HeartRate';
import CharacterDetails from '../CharacterDetails';

import './index.css';

function CharacterCards(props) {
  const [isActive, setActive] = useState(false);

  const handleActive = () => setActive(!isActive);

  return (
    <article
      className={`character-card${isActive ? ' active' : ''}`}
      onMouseEnter={handleActive}
      onMouseLeave={handleActive}
    >
      <div className="character-image-wrapper">
        <img className="character-image" src={props.chars.image} alt={props.chars.name} />
        <CharacterDetails details={props.chars} />
      </div>
      <div className="character-content-wrapper">
        <h3 className="character-name">{props.chars.name}</h3>
        <section className="life-status">
          <HeartRate status={props.chars.status} />
          <div className="life-status-content">
            <h4>Status</h4>
            <p><strong className={props.chars.status}>{props.chars.status}</strong> – {props.chars.species}</p>
          </div>
          <div className="dots">
            <div></div>
            <div></div>
            <div>{props.chars.id}</div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default CharacterCards;
