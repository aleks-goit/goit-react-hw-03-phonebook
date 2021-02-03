import React from 'react';
import ContactListItem from '../ContactsListItem/ContactListItem';
import PropTypes, { object } from 'prop-types';

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(object),
  onDeleteContact: PropTypes.func,
}

export default ContactsList;
