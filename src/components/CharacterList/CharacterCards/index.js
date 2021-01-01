import React from 'react';

function CharacterCards(props) {
  return(
    <section className="character-card">
      <h3>{props.chars.name}</h3>
      <img src={props.chars.image} alt={props.chars.name} />
    </section>
  );
}

export default CharacterCards;
