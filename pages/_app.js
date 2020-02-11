import React from 'react';
import App from 'next/app';
import Layout from '../components/layout';

import '../css/tailwind.css';

const MyApp = ({Component, pageProps}) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
