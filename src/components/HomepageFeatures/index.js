import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: React.createElement(
      React.Fragment,
      null,
      'Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.'
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: React.createElement(
      React.Fragment,
      null,
      "Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",
      React.createElement('code', null, 'docs'),
      ' directory.'
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: React.createElement(
      React.Fragment,
      null,
      'Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.'
    ),
  },
];
function Feature({ title, Svg, description }) {
  return React.createElement(
    'div',
    { className: clsx('col col--4') },
    React.createElement(
      'div',
      { className: 'text--center' },
      React.createElement(Svg, { className: styles.featureSvg, role: 'img' })
    ),
    React.createElement(
      'div',
      { className: 'text--center padding-horiz--md' },
      React.createElement('h3', null, title),
      React.createElement('p', null, description)
    )
  );
}
export default function HomepageFeatures() {
  return React.createElement(
    'section',
    { className: styles.features },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'row' },
        FeatureList.map((props, idx) =>
          React.createElement(Feature, { key: idx, ...props })
        )
      )
    )
  );
}
