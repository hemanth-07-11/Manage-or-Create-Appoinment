import React from 'react';

const ContactPicker = ({ contacts, handleContactChange }) => {
  return (
    <select onChange={handleContactChange} style={{ width: '50%' }}>
      <option defaultValue="selected" value="none">
        No contact selected
      </option>
      {contacts.map(({ name }) => {
        return (
          <option key={name} value={name}>
            {name}
          </option>
        );
      })}
    </select>
  );
};

export default ContactPicker;
