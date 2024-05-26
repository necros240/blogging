
import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';


const Search = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className='search-form' onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by keyword or tag"
      />
      <button type="submit">Search</button>
    </form>
  );
};

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

export default Search;
