import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PhonebookForm = styled.form`
  text-align: center;
  margin-bottom: 20px;
`;

const PhonebookInput = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 95%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid #797D7F;
`;

const PhonebookButton = styled.button`
  padding: 5px;
  background-color: #2ECC71;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  outline: none;
`;

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
  }

  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <PhonebookForm onSubmit={this.handleFormSubmit}>
        <label>
          Name
          <PhonebookInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label>
          Number
          <PhonebookInput
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <PhonebookButton type="submit">Add contact</PhonebookButton>
      </PhonebookForm>
    );
  }
}
