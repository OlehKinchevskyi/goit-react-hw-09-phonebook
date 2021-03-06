import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/phoneBook/phoneBook-operations'
import selectors from '../../redux/phoneBook/phoneBook-selectors';
import Notification from '../../components/Notification/Notification';
import PropTypes from 'prop-types';
import './ContactForm.scss';

export default function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState(null);

    const contacts = useSelector(selectors.getAllContacts);
    const onSubmit = (name, number) => dispatch(operations.addContact(name, number));

    const saveMessage = (note) => {
        setMessage(note);
        setTimeout(() => {
            setMessage(null);
        }, 2500);
    }
    
    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                console.warn(`Тип поля name - ${name} не обрабатывается!`);
        }
    };

        const handleSubmit = e => {
            e.preventDefault();

            if (name === '') {
                saveMessage('Enter contact name, please!');
                return;
            }
            if (number === '') {
                saveMessage('Enter concact phone, please!');
                return;
            }
            if (contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())) {
                saveMessage('Contact already exists!');
                return;
            }

            onSubmit(name, number);
            setName('');
            setNumber('');
        };
        
        return (
            <div>
                <Notification
                    message={message} />
                <form
                    className="Form"
                    onSubmit={handleSubmit}
                    autoComplete="off">
                    <label
                        htmlFor="name"
                        className="Label">Name</label>
                    <input
                        type="text"
                        value={name}
                        id="name"
                        className="Input"
                        onChange={handleChange}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        
                    />
            
                    <label
                        htmlFor="number"
                        className="Label">Number</label>
                    <input
                        type="tel"
                        value={number}
                        id="number"
                        className="Input"
                        onChange={handleChange}
                        name="number"
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        required
                        />
                    
                    <button
                        type="submit"
                        className="Button">
                        Add contact
                    </button>
                </form>
            </div>
        );
 };

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onSubmit: PropTypes.func,
};