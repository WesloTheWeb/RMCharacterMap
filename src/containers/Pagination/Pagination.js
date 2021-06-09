import React from 'react';
import classes from './Pagination.module.css';

const { paginationButtons } = classes

const Pagination = ({ nextPage, prevPage, goToPage, pages }) => {
    let pageButtons = []
    // Loop through number of pages
    for (let i = 1; i <= pages; i++) {
        pageButtons.push(<button key={i} onClick={() => goToPage(i)}>{i}</button>)
    }
    return (
        <div className={paginationButtons}>
            {prevPage && (<button onClick={prevPage}>&laquo;</button>)}
            {pageButtons}
            {nextPage && (<button onClick={nextPage}>&raquo;</button>)}
        </div>
    )
}

export default Pagination;