import React from 'react';

import Header from '../../components/Header';
import CharacterList from '../../components/CharacterList';

import './index.css';

function Landing() {
  return(
    <main>
      <Header />
      <CharacterList />
    </main>
  );
}

export default Landing;
