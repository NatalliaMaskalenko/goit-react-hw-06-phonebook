import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import {changeFilter} from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

export default function Filter () {
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();
    const onChangeFilter = (event) => dispatch(changeFilter(event.target.value));

    return (<label className={s.filter__label}>
        Find contacts by name
        <input className={s.filter__input} type="text" value={value} onChange={onChangeFilter} placeholder="Jacob Mercer" />
    </label>)
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

// const mapStateToProps = state => ({
//     value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: (event) => dispatch(phonebookActions.changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

