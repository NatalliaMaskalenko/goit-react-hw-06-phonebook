import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    // const value = useSelector(state => state.contacts.filter);

    <label className={s.filter__label}>
        Find contacts by name
        <input className={s.filter__input} type="text" value={value} onChange={onChange} placeholder="Jacob Mercer" />
    </label>
);

const mapStateToProps = state => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(phonebookActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};