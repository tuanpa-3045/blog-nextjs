import { Fragment } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import ContactForm from '../components/Contact';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <Header />
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
