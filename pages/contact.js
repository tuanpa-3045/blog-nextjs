import { Fragment } from 'react';
import Head from 'next/head';

import { getData } from './api/contact';

import Header from '../components/Header';
import ContactForm from '../components/ContactPage';
import ListComment from '../components/ContactPage/components/ListComment';

function Contact(props) {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <Header />
      <ContactForm />
      <ListComment posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = await getData();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default Contact;
