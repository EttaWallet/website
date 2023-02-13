import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return React.createElement(
    'header',
    { className: clsx('hero hero--primary', styles.heroBanner) },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement('h1', { className: 'hero__title' }, siteConfig.title),
      React.createElement(
        'p',
        { className: 'hero__subtitle' },
        siteConfig.tagline
      ),
      React.createElement(
        'div',
        { className: styles.buttons },
        React.createElement(
          Link,
          {
            className: 'button button--secondary button--lg',
            to: '/docs/intro',
          },
          'Docusaurus Tutorial - 5min \u23F1\uFE0F'
        )
      )
    )
  );
}
export default function Home() {
  return React.createElement(
    Layout,
    {
      title: 'EttaUI',
      description:
        'EttaUI is an open-source, opinionated React Native component library for building quality, beautiful, accessible bitcoin apps.',
    },
    React.createElement(HomepageHeader, null),
    React.createElement(
      'main',
      null,
      React.createElement(HomepageFeatures, null)
    )
  );
}
