import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '../components/Hero';

import '../../static/css/components.css';

const About: React.FunctionComponent<{}> = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <div className='container'>
        <div className="row padding-vert--md" style={{ alignItems: 'center' }}>
          <p className=''>Coming soon</p>
        </div>
      </div>
    </Layout>
  );
}

export default About;