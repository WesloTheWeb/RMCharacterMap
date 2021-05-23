import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import classes from './CharacterGrid.module.css';

const {characterGrid} = classes;

const CharacterGrid = (props) => {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        CharacterCard
    );

    return (
        <section className={characterGrid}>
            {listItems}
        </section>
    );
};


export default CharacterGrid;