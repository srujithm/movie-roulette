import React from 'react';
import './search-box.css';

const SearchBox = props => {
    return (
        <input className="search" type="search" placeholder={props.placeholder} onChange={props.handleChange}></input>
    );
}

export default SearchBox;