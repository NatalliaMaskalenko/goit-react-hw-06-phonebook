import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer  from './phonebook/phonebook-reducer';

const rootReduser = combineReducers({
    contacts: phonebookReducer,
});

const store = createStore(rootReduser, composeWithDevTools());
export default store;