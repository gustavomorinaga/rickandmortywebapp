import React, { useEffect, useState } from 'react';

import api from '../../services/api';

function CharacterList() {
  const [ CharacterList, setCharacterList ] = useState([]);

  useEffect(() => {
    
  });

  api.get('/character')
      .then(res => {
        setCharacterList(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });

  return(
    <>
    </>
  );
}

export default CharacterList;
