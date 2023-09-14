import React from 'react';

const Genre = ({genre}) => {
    const {name, id} = genre
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export default Genre;