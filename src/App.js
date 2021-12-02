import '@pnotify/core/dist/BrightTheme.css';
import s from './App.module.css'
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

// const useLocalStorage = (key, defaultValue) => {
//    const [state, setState] = useState(() => {
//        return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
//    });
//     return [state, setState]
// };

export default function App() {
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <Form/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactsList/>
      </div>
   );
};