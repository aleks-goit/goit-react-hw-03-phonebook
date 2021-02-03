import React from 'react';
import styled from 'styled-components';
import PropTypes, { func } from 'prop-types';

const ContactItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactButton = styled.button`
  padding: 5px;
  background-color: #E74C3C;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`;

function ContactListItem({ id, name, number, onDelete }) {
  return (
    <ContactItem>
      <span>
        {name}: {number}
      </span>
      <ContactButton type="button" onClick={onDelete}>
        Delete
      </ContactButton>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: func,
}

export default ContactListItem;
