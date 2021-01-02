import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import CharacterCards from './CharacterCards';

import './index.css';

function CharacterList() {
  const [CharacterList, setCharacterList] = useState([]);

  useEffect(() => {
    api.get('/character')
      .then(res => {
        setCharacterList(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <section className="character-list">
      <h2>Characters</h2>
      <p className="subtitle">Select the character for more details!</p>
      <span>
        {CharacterList.map((chars, id) => {
          return (
            <CharacterCards key={id} chars={chars} />
          );
        })
        }
      </span>
    </section>
  );
}

export default CharacterList;
