import React from 'react';

import Header from '../../components/Header';
import CharacterList from '../../components/CharacterList';

import RickAndMortyPng from '../../assets/images/rickAndMorty.png';

import './index.css';

function Landing() {
  return(
    <main>
      <Header />
      <section className="banner">
        <img src={RickAndMortyPng} alt="Rick and Morty in a Portal"/>
      </section>
      <CharacterList />
    </main>
  );
}

export default Landing;
