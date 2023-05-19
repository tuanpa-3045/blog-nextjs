import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';

import PageLoading from '../components/PageLoader';
import Header from '../components/Header';
import { loadingSelector } from '../stores/contactSlice';

export default function Home() {
  const loading = useSelector(loadingSelector);

  return (
    <Fragment>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="blog post Anh Tuan" />
      </Head>
      <Header />
      {loading && <PageLoading />}
    </Fragment>
  );
}
