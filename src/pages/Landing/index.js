import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';

import Header from '../../components/Header';
import CharacterList from '../../components/CharacterList';

import api from '../../services/api';

import RickAndMortyPng from '../../assets/images/rickAndMorty.png';
import PortalPng from '../../assets/images/portal.png';

import './index.css';

function Landing() {
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let locationsResponse = await api.get('/location');
        let episodesResponse = await api.get('/episode');

        locationsResponse = locationsResponse.data.results;
        episodesResponse = episodesResponse.data.results;

        let local = [];

        locationsResponse.forEach(el => {
          local.push({ planet: el.name, population: el.residents.length });
        });

        let eps = [];

        for (let i = 1; i <= episodesResponse.length; i++) {
          const string = episodesResponse.filter(el => el.episode.includes(`S0${i}`));

          if (string[0] !== undefined) {
            eps.push(string);
          }
        }

        const modelData = [
          { id: 'S01', label: 'S01', value: eps[0].length },
          { id: 'S02', label: 'S02', value: eps[1].length },
        ]

        setLocations(local);
        setEpisodes(modelData);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <Header />
      <section className="banner">
        <Link
          to="graphic"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="portal"
        >
          <h3>Statistics</h3>
          <img src={PortalPng} alt="Graphics" />
        </Link>
        <img src={RickAndMortyPng} className="rick-morty" alt="Rick and Morty in a Portal" />
        <Link
          to="characters"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="portal"
        >
          <h3>Characters</h3>
          <img src={PortalPng} alt="Characters" />
        </Link>
      </section>
      {console.log(locations)}
      <section id="graphic" className="graphics">
        <div className="episodes-per-season">
          <h3>Total Episodes Per Season</h3>
          <ResponsivePie
            data={episodes}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            sortByValue={true}
            cornerRadius={5}
            colors={{ scheme: 'category10' }}
            borderWidth={2}
            borderColor={{ from: 'color', modifiers: [['darker', '0.2']] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: 'color' }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 30,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 0,
                symbolSize: 20,
                itemDirection: 'top-to-bottom'
              }
            ]}
          />
        </div>
      </section>
      <section className="graphics">
        <div className="characters-per-planets">
          <h3>Total Characters Per Planet</h3>
          <ResponsiveBar
            data={locations}
            keys={['population']}
            indexBy="planet"
            margin={{ top: 50, right: 130, bottom: 50, left: 350 }}
            padding={0.3}
            layout="horizontal"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'category10' }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            fill={[
              {
                match: {
                  id: 'fries'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'sandwich'
                },
                id: 'lines'
              }
            ]}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 10,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Planets',
              legendPosition: 'middle',
              legendOffset: 45
            }}
            axisLeft={{
              tickSize: 10,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Population',
              legendPosition: 'middle',
              legendOffset: -250
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </section>
      <CharacterList/>
    </main>
  );
}

export default Landing;
