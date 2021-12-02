import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { alert } from '@pnotify/core';

import '@pnotify/core/dist/BrightTheme.css';
import s from './App.module.css'
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import phonebookActions from './redux/phonebook/phonebook-actions';

const useLocalStorage = (key, defaultValue) => {
   const [state, setState] = useState(() => {
       return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
   });
    return [state, setState]
};

 function App() {
    const [contacts, setContacts] = useLocalStorage('contacts', [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
     
    const [filter, setFilter] = useState('');
 
    // const addContact = ({ name, number }) => {
    // const contact = {
    //   id: uuidv4(),
    //   name,
    //   number,
    // }

    // const normolizedName = name.toLowerCase();

    // if (contacts.find(contact => contact.name.toLowerCase() === normolizedName)) {
    //   return alert(`${name} is already in contacts`);
    //     };
        
    //     setContacts(prevContacts => [contact, ...prevContacts]
    //     );    
    // };   

    const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
    };
    
    // const deleteContact = (contactId) => {
    //     setContacts(prevContacts=>prevContacts.filter(contact => contact.id !== contactId))
    // };

   const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
       );
       return visibleContacts;
    };
    
    const visibleContacts = getVisibleContacts();
    
    // useEffect(() => {
    //     localStorage.setItem('contacts', JSON.stringify(contacts))
    // }, [contacts]);

    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <Form
          // onSubmit={addContact}
        />
        <h2>Contacts</h2>
        <Filter
          // value={filter} onChange={changeFilter}
        />
        <ContactsList
          // contacts={visibleContacts}
          // onDeleteContact={deleteContact}
        />
      </div>
   );
};

// const mapStateToProps = (state) => {
//   return {
//     contactsList: state.contact,
    
//   }
// }

// const mapDispatchtoProps = (dispatch) => {
//   return {
//     onAdd: () => dispatch(phonebookActions.addContact),
//   }
// }

export default connect(null, null)(App);