import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { changeFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleChange = event => {
    const filter = event.target.value;
    dispatch(changeFilter(filter));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleChange} />
    </Label>
  );
};

export default Filter;
