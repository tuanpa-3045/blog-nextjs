import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../stores/contactSlice';

import classes from './contact.module.css';
import { setFlashMessage } from '../../stores/notificationSlice';
import { flashMessageStatus } from '../../utils/constants';

function ContactPage() {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const onChangeInfo = (e) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const resetForm = () => {
    setUserInfo({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const fullName = `${userInfo.firstName} ${userInfo.lastName}`;
    dispatch(setFlashMessage({
      status: flashMessageStatus.PENDING,
      title: 'Sending message...',
      message: 'Your message is on its way!',
    }))
    dispatch(
      addContact({
        name: fullName,
        email: userInfo.email,
        message: userInfo.message,
      })
    );
    resetForm();
  };

  return (
    <section className={classes.contact}>
      <form onSubmit={onSubmit} className={classes.form}>
        <label htmlFor="firstName">
          Name: <span className={classes.required}>*</span>
        </label>
        <div className={classes.flex}>
          <input
            placeholder="First Name"
            aria-required
            type="text"
            id="firstsName"
            name="firstName"
            required
            value={userInfo.firstName}
            onChange={(e) => onChangeInfo(e)}
          />
          <input
            placeholder="Last Name ..."
            aria-required
            type="text"
            id="lastName"
            name="lastName"
            required
            value={userInfo.lastName}
            onChange={(e) => onChangeInfo(e)}
          />
        </div>
        <label htmlFor="email">
          Your email: <span className={classes.required}>*</span>
        </label>
        <input
          width="100px"
          placeholder="Your email ..."
          aria-required
          type="email"
          id="email"
          name="email"
          required
          value={userInfo.email}
          onChange={(e) => onChangeInfo(e)}
        />

        <label htmlFor="message">Your comment: </label>
        <textarea
          placeholder="Your message ..."
          id="message"
          name="message"
          rows={5}
          value={userInfo.message}
          onChange={(e) => onChangeInfo(e)}
        ></textarea>
        <div className={classes.buttonRight}>
          <div className={classes.flex}>
            <button type="button" className={classes.button} onClick={resetForm}>
              Reset
            </button>
            <button type="submit" role="submit" className={classes.button}>
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactPage;
