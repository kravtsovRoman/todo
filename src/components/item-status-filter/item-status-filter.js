import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {

    const { filter, onChangeFilter } = this.props;


    const btns = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;

      return (
        <button type="button"
          key={name}
          className={`btn ${isActive ? 'btn-info' : 'btn-outline-secondary'}`}
          onClick={() => onChangeFilter(name)
          }>
          {label}
        </button >
      );
    })
    return (
      <div className="btn-group" >
        {btns}
      </div>
    );
  }
};