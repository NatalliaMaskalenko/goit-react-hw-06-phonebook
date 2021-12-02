import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import s from './ContactsList.module.css'
import ContactsItem from '../ContactsItem';


const ContactsList = ({ contacts, onDeleteContact }) => (
    <ul className={s.contacts__list}>
        {contacts.map(({id, name, number} ) => (
             <ContactsItem
                key={id}
                name={name}
                number={number}
                onDeleteContact={()=> onDeleteContact(id)}
            />
        ))}
    </ul>
);

const mapStateToProps = (state) => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = items.filter(item =>
        item.name.toLowerCase().includes(normalizedFilter)
    );
    
    return {
    contacts: visibleContacts,
    }
};

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func,
};