import React from 'react';
import classes from './Textbox.module.css';
import { worriedMorty } from '../../assets/index.js';

const { guidedText, guidedTextContainer } = classes;
 console.log(worriedMorty);
const Textbox = (props) => {
    return (
        <section className={guidedTextContainer}>
            <div className={guidedText}>
                <img src={worriedMorty}  alt="Morty" />
                <p>{props.children}</p>
            </div> 
        </section>
    );
};

export default Textbox;