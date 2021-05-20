import React from 'react';
import Tile from '../tile/Tile';

const TileList = ({ data, type }) => {
  return (
    <>
      {type === 'contacts' &&
        data.map(({ name, phone, email }) => {
          return (
            <Tile
              type={type}
              key={name}
              name={name}
              phone={phone}
              email={email}
            />
          );
        })}
      {type === 'appointments' &&
        data.map(({ title, contact, date, time }) => {
          return (
            <Tile
              type={type}
              key={title}
              title={title}
              contact={contact}
              date={date}
              time={time}
            />
          );
        })}
    </>
  );
};

export default TileList;
