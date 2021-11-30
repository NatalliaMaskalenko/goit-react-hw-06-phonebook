import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { alert} from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import s from './App.module.css'

import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';


class App extends Component{
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter:'',
  }
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevProps.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    }

    const normolizedName = name.toLowerCase();

    if (this.state.contacts.find(contact => contact.name.toLowerCase() === normolizedName)) {
      return alert(`${name} is already in contacts`);
    };  
    
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normolizedFitres = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFitres),
    );    
  };

    
  render() {
    const {filter} = this.state;
    const { addContact, deleteContact, changeFilter} = this;
    const visibleContacts = this.getVisibleContacts();
        
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <Form
          onSubmit={addContact}
        />
        <h2>Contacts</h2>
        <Filter  value={filter} onChange={changeFilter}/>
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact} />
      </div>
   );
 }

}

export default App;
