import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';
import classes from './CharacterGrid.module.css';

const {gridContainer} = classes;

const CharacterGrid = (props) => {
    const [characterList, setCharacterList] = useState([]); // array of JSON API Data as state.
    useEffect(() => {
        axios
        .get("https://rickandmortyapi.com/api/character")
        .then(res => {
            setCharacterList(res.data.results);
        }).catch(err => {
            console.log('error:' + err);
        })
      }, []);

    return (
        <section className={gridContainer}>
            {characterList.map((chars, id) => {
                return <CharacterCard chars={chars} key={id} />
            })}
        </section>
    );
};

export default CharacterGrid;