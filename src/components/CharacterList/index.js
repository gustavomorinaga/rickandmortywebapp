import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import CharacterCards from './CharacterCards';

import './index.css';

function CharacterList() {
  const [ CharacterList, setCharacterList ] = useState([]);

  useEffect(() => {
    api.get('/character')
      .then(res => {
        setCharacterList(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return(
    <section className="character-list">
      {CharacterList.map((chars, id) => {
          return (
            <CharacterCards key={id} chars={chars} />
          );
        })
      }
    </section>
  );
}

export default CharacterList;
