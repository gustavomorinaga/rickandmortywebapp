import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Pagination from '../Pagination';
import CharacterCards from './CharacterCards';

import './index.css';

function CharacterList() {
  const [CharacterList, setCharacterList] = useState([]);
  const [CharacterPages, setCharacterPages] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/character/?page=${CurrentPage}`);

        setCharacterPages(res.data.info);
        setCharacterList(res.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [CurrentPage]);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section id="characters" className="character-list">
      <h2>Characters</h2>
      <p className="subtitle">See some character to see the details!</p>
      <span>
        {CharacterList.map((chars, id) => {
          return (
            <CharacterCards key={id} chars={chars} />
          );
        })
        }
      </span>
      <Pagination totalPages={CharacterPages.pages} paginate={paginate} currentPage={CurrentPage} />
    </section>
  );
}

export default CharacterList;
