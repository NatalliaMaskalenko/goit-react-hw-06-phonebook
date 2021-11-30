import PropTypes from 'prop-types';
import s from './ContactsList.module.css'
import ContactsItem from '../ContactsItem';


const ContactsList = ({ contacts, onDeleteContact }) => (
    <ul className={s.contacts__list}>
        {contacts.map(({id, name, number} ) => (
             <ContactsItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact} />
        ))}
    </ul>
);

ContactsList.propTypes = {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func,
};


export default ContactsList;