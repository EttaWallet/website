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
        <div className="container  padding-vert--xl">
          <div
            className="row padding-vert--md"
            style={{ alignItems: 'center' }}
          >
            <div className="col col--6">
              <img src="/img/wallet.png" />
            </div>
            <div className="col col--5 col--offset-1">
              <h1 className="hero__title">
                Open source <br />
                <span className="gradient clip-text">Lightning</span> wallet
              </h1>
              <p className="">
                A working open-source implementation of the Daily Spending Wallet.
              </p>
              <div>
              <Link
                  className={
                    'button button--primary margin-vert--sm heroButton margin-right--md '
                  }
                  to={'https://github.com/EttaWallet/EttaWallet'}
                >
                  GitHub
                </Link>
                <Link
                  className={
                    'button button--secondary button--outline margin-vert--sm margin-right--md '
                  }
                  style={{ color: 'black' }}
                  to={useBaseUrl('/docs/intro')}
                >Explore UI components
                </Link>

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
