import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filterHandler }) => (
  <div className="filter">
    <span>Filter by name:</span>
    <input type="text" id="filter-input" onChange={(event) => filterHandler(event.target.value)} />
  </div>
);
Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default Filter;
