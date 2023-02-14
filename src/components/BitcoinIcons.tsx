import React from 'react';
import Head from '@docusaurus/Head';
// @ts-ignore
import iconFamily from '../fonts/Bitcoin.ttf';

export const IconsStyle = () => {
  return (
    <Head>
      <style type="text/css">{`
          @font-face {
            font-family: 'Bitcoin';
            src: url(${iconFamily}) format('truetype');
          }
        `}</style>
    </Head>
  );
};
