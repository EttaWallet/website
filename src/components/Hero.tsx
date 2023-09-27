import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';
import { SiReact, SiIos } from 'react-icons/si';
import {
  MdLaptopMac,
  MdAndroid,
  MdAccessibleForward,
  MdInvertColors,
} from 'react-icons/md';

const Home: React.FunctionComponent<{}> = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <section>
      <header>
        <div className="container padding-vert--xl">
          <div
            className="row"
            style={{ alignItems: 'center' }}
          >
            <div className="col col--6">
              <img src="/img/etta-preview.png" />
            </div>
            <div className="col col--6 summary">
              <h1 className="hero__title">
                <span className="gradient clip-text">EttaWallet</span>
              </h1>
              <p className="">
              A simple open-source non-custodial bitcoin/lightning wallet with a strong bias towards usability, accessibility and pretty good UX.
              </p>
              <div>
              <Link
                  to={'https://github.com/EttaWallet/EttaWallet'}
                >
                  Explore project on Github. 100% open source.
                </Link>
              </div>
              <div className='margin-top--lg'>
              <Link
                  to={'https://testflight.apple.com/join/vZaHZIi4'}
                  className={'padding-right--xs'}
                >
                  <img src="img/app_store.svg" height="50" />
                </Link>
                <Link
                  to={'https://play.google.com/store/apps/details?id=com.ettaln'}
                  className={'padding-right--xs'}
                >
                  <img src="img/play.svg" height="50" />
                </Link>
              </div>
              <div>
                <p>⚠️ This project is still in open beta. </p>
              </div>
              <div className="ball" style={{ left: 80, top: '20%' }}>
                <SiReact />
              </div>
              <div className="ball" style={{ bottom: 200, right: '5%' }}>
                <MdAccessibleForward />
              </div>
              <div className="ball" style={{ left: 20, top: '70%' }}>
                <MdInvertColors />
              </div>
              <div className="ball" style={{ right: '40%', bottom: 90 }}>
                <MdAndroid />
              </div>
              <div className="ball" style={{ left: '40%', top: 180 }}>
                <SiIos />
              </div>
              <div className="ball" style={{ right: 270, top: 140 }}>
                <MdLaptopMac />
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Home;
