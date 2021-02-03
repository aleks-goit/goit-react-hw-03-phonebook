import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Layout from '../Layout/Layout';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactFrom';
import ContactsList from '../ContactsList/ContactsList';

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  text-align: center;
`;

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount(){
    const savedContacts = localStorage.getItem('contacts');

    if(savedContacts){
      this.setState({contacts: JSON.parse(savedContacts)});
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleContactAdd = contact => {
    const { contacts } = this.state;

    const isIncludes = contacts.some(item => item.name === contact.name);
    if (isIncludes) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const contactData = {
      id: uuidv4(),
      name: contact.name,
      number: contact.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactData],
    }));
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeFilter = filter => {
    this.setState({ filter });
  };

  handleDeleteContact = contactId =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;

    const contacts = this.filterContacts();
    return (
      <Layout>
        <Title>Phonebook</Title>
        <ContactForm onAddContact={this.handleContactAdd} />

        <Title>Contacts</Title>
        <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Layout>
    );
  }
}
