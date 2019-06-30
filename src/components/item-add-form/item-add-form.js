import React from 'react';

import './item-add-form.css';

const ItemAddForm = (props) => {

    const { onItemAdd } = props;

    return (
        <div className={'item-add-form'}>
            <input type="text" name="add-item" />
            <button
                className={'btn btn-outline-secondary'}
                type="button"
                onClick={() => onItemAdd('text')}
            >Add Item</button>
        </div >
    );
}

export default ItemAddForm;