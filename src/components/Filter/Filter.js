import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const FilterContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const InputLabel = styled.label`
  font-size: 18px;
`;

const FilterInput = styled.input`
  border: 2px solid #797d7f;
  border-radius: 5px;
  height: 30px;
`;

function Filter({ value, onChangeFilter }) {
  return (
    <FilterContainer>
      <InputLabel>
        Search contacts by name
        <FilterInput
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </InputLabel>
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
}

export default Filter;
