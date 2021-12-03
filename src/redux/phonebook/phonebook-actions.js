import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import types from "./phonebook-types";

export const addContact = createAction('contact/Add', ({name, number}) => ({    
    payload: {
        id: uuidv4(),
        name,
        number,
    }
}));

export const deleteContact = createAction('contact/Delete');
export const changeFilter = createAction('contact/cgangeFilter');

// const addContact = ({name, number}) => ({
//     type: types.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     }
// });

// const deleteContact = (contactId) => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// const changeFilter = (value) => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });

// export default { addContact, deleteContact, changeFilter };