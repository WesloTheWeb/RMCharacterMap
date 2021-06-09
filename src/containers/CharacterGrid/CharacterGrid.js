import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';
import Pagination from '../Pagination/Pagination';

import classes from './CharacterGrid.module.css';

const { gridContainer } = classes;

const CharacterGrid = (props) => {
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [pages, setPages] = useState()
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [characterList, setCharacterList] = useState([]); // array of JSON API Data as state.
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then(res => {
                console.log(res.data.results);
                setCharacterList(res.data.results);
                setNextPageUrl(res.data.info.next);
                setPrevPageUrl(res.data.info.prev);
                setPages(res.data.info.pages)
            }).catch(err => {
                console.log('error:' + err);
            })
    }, []);


    function nextPage() {
        setCurrentPageUrl(nextPageUrl)
    }

    function prevPage() {
        setCurrentPageUrl(prevPageUrl)
    }

    function goToPage(num) {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
    }

    return (
        <>
            <section className={gridContainer}>
                {characterList.map((chars, id) => {
                    return <CharacterCard chars={chars} key={id} />
                })}
            </section>
            <Pagination nextPage={nextPageUrl ? nextPage : null}
                prevPage={prevPageUrl ? prevPage : null}
                goToPage={goToPage}
                pages={pages} />
        </>
    );
};

export default CharacterGrid;