import PropTypes from 'prop-types';

import { useState } from 'react';
import { SearchForm, Field, SearchBtn } from './MovieSearchForm.styled';
import { FaSearchengin } from 'react-icons/fa';

export const MovieSearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <Field
        name="searchQuery"
        value={searchQuery}
        onChange={handleChange}
        placeholder="search here"
        required
        autoComplete="off"
      ></Field>
      <SearchBtn type="submit">
        <FaSearchengin size={30} />
      </SearchBtn>
    </SearchForm>
  );
};

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
