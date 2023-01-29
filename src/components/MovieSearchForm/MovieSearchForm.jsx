import { useState } from 'react';
import { SearchForm, Field, SearchBtn } from './MovieSearchForm.styled';

export const MovieSearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchQuery(value);
    console.log('value in change');
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('value in form', searchQuery);

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
      ></Field>
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
