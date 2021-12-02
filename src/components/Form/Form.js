import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useState } from 'react';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import s from './Form.module.css'

function Form({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeName = e => {
        setName(e.currentTarget.value);        
    };

     const handleChangeNumber = e => {
        setNumber(e.currentTarget.value);        
    };

    const handelSubmit = e => {
        e.preventDefault();
        onSubmit({name, number});
        reset()
    };

    const reset = () => {
        setName('');
        setNumber('');
    }
    
    return (
       <form
        className={s.form}
        onSubmit={handelSubmit}>
        <label className={s.form__label}>
          Name
           <input
               className={s.form__input}
               value={name}
               type="text"
               name="name"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
               required
               onChange = {handleChangeName}
/>
        </label>
  
        <label className={s.form__label}>
          Number
            <input
               className={s.form__input}         
               value={number}
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
               required
               onChange = {handleChangeNumber}
/>
          </label>
            <button className={s.form__button} type="submit">Add contact</button>
    </form>
  )  
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(phonebookActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);

Form.propTypes = {
    onSubmit: PropTypes.func,
};