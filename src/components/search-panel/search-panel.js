import React from 'react';

import './search-panel.css';

const SearchPanel = (props) => {
    return (
        <input type="text"
            onChange={props.onSearch}
            className="form-control search-input"
            placeholder="type to search" />
    );
};

export default SearchPanel;
