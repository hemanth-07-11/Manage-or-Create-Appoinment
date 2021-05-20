import React, { useState, useRef, useEffect } from 'react';
import ContactForm from '../../components/contactForm/ContactForm';
import TileList from '../../components/tileList/TileList';

const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const isDuplicate = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate.current) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert('Duplicate detected. Entry already exists.');
    }
  };

  useEffect(() => {
    if (
      contacts.filter(
        (contact) => contact.phone === phone || contact.email === email
      ).length
    ) {
      isDuplicate.current = true;
    } else {
      isDuplicate.current = false;
    }
  }, [name, phone, email, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} type="contacts" />
      </section>
    </div>
  );
};

export default ContactsPage;
