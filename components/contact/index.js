import { useState, useEffect } from 'react';

function Contact() {

  const [enteredEmail, setEnteredEmail] =useState('');
  const [enteredName, setEnteredName] =useState('');

  return (
    <section>
      <form>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          required
          value={enteredEmail}
          onChange={(event) => setEnteredEmail(event.target.value)}
        />
        <label htmlFor="email">Your name</label>
        <input
          type="text"
          id="name"
          required
          value={enteredName}
          onChange={(event) => setEnteredName(event.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </section>
  );
}
