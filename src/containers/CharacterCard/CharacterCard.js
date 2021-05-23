import React from 'react';

const CharacterCard = (props) => {
    return (
        <div>
            name: {props.name},
            age: {props.age},
            status: {props.status}
        </div>
    );
};


export default CharacterCard;