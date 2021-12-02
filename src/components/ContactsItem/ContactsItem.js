import PropTypes from 'prop-types';
import s from './ContactsItem.module.css'

const ContactsItem = ({ name, number, onDeleteContact }) => (
     <li className={s.item}>
        <p className={s.text}>{name}</p>
        <p className={s.text}>{number}</p>
        <button className={s.button} onClick = {onDeleteContact}>Delete</button>
    </li>
);

ContactsItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDeleteContact: PropTypes.func,
};

export default ContactsItem;