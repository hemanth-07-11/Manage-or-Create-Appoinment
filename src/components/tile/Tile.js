import React from 'react';

const Tile = (props) => {
  return (
    <>
      {props.type === 'contacts' && (
        <article className="tile-container">
          <section className="tile">
            <h3 className="tile-title">Name</h3>
            <p>{props.name}</p>
          </section>
          <section className="tile">
            <h3 className="tile-title">Phone Number</h3>
            <p>{props.phone}</p>
          </section>
          <section className="tile">
            <h3 className="tile-title">Email</h3>
            <p>{props.email}</p>
          </section>
        </article>
      )}
      {props.type === 'appointments' && (
        <article className="tile-container">
          <section className="tile">
            <h3 className="tile-title">Title</h3>
            <p>{props.title}</p>
          </section>
          <section className="tile">
            <h3 className="tile-title">Contact</h3>
            <p>{props.contact}</p>
          </section>
          <section className="tile">
            <h3 className="tile-title">Date</h3>
            <p>{props.date}</p>
          </section>
          <section className="tile">
            <h3 className="tile-title">Time</h3>
            <p>{props.time}</p>
          </section>
        </article>
      )}
    </>
  );
};

export default Tile;
