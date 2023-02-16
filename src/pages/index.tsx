import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';

import '../../static/css/components.css';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
}
