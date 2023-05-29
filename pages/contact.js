import { Fragment } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";

import { getData } from "./api/contact";

import { loadingSelector } from "../stores/contactSlice";
import PageLoading from '../components/PageLoader'
import ContactForm from "../components/ContactPage";
import ListComment from "../components/ContactPage/components/ListComment";
import Layout from "../components/Layout";

function Contact(props) {
  const loading = useSelector(loadingSelector);

  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <Layout>
        <ContactForm />
        <ListComment posts={props.posts} />
        {loading && <PageLoading />}
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = await getData();
  return {
    props: {
      posts: allPosts
    }
  };
}

export default Contact;
