import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Form.module.css'

class Form extends Component{
state = {
  name: '',
  number: ''
    }

     handleChange = e => {
    const { name, value } = e.currentTarget;
      this.setState({[name]: value})
    }
    
    handelSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset()
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    }

    render() {
        return (
    <form
        className={s.form}
        onSubmit={this.handelSubmit}>
        <label className={s.form__label}>
          Name
           <input
               className={s.form__input}
               value={this.state.name}
               type="text"
               name="name"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
               required
               onChange = {this.handleChange}
/>
        </label>
  
        <label className={s.form__label}>
          Number
            <input
               className={s.form__input}         
               value={this.state.number}
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
               required
               onChange = {this.handleChange}
/>
          </label>
            <button className={s.form__button} type="submit">Add contact</button>
    </form>
        
    )
}
};

Form.propTypes = {
    onSubmit: PropTypes.func,
};

export default Form;