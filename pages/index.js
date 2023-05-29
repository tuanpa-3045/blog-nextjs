import { Fragment } from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

export default function Home() {

  return (
    <Fragment>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="blog post Anh Tuan" />
      </Head>
      <Layout>
      </Layout>
    </Fragment>
  );
}
