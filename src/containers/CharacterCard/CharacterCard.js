import React from 'react';
import classes from './CharacterCard.module.css';

const { cardContainer, cardInfo, cardDetails } = classes;

const CharacterCard = (props) => {

    return (
        <div className={cardContainer}>
            <section className={cardInfo}>
                <img src={props.chars.image} alt="character" />
                <div className={cardDetails}>
                    <span><label>Name:</label> {props.chars.name}</span>
                    <span><label>Species:</label> {props.chars.species}</span>
                    <span><label>Status:</label> {props.chars.status}</span>
                </div>
            </section>
        </div>
    );
};

export default CharacterCard;