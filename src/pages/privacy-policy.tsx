import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '../components/Hero';

import '../../static/css/components.css';

const PrivacyPolicy: React.FunctionComponent<{}> = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <div className='container'>
        <div className="row padding-vert--md" style={{ alignItems: 'center' }}>
          <p>This Privacy Notice describes the privacy practices that are applicable to your use of the EttaWallet mobile application (the "App") provided by Collin Rukundo (the "Author").</p>
          <h4>A. Privacy Practices</h4>
          <p>The Author intends for users to be able to use the functionality of the App on a decentralized, anonymous basis. The Author therefore does not collect, use, maintain or share any personal information about you when you use the App, and the Author does not use any tracking technology to track your use of the App. The Author also does not allow third parties to collect personal information about you when you use the App, or to use tracking technology to track your use of the App. Any information that you provide to us when you communicate with our customer or technical support departments will only be used for purposes of addressing your specific support request.</p>
            <h4>B. Third Party App Stores</h4>
            <p>If you purchase or access the App through a third party app store, such as iTunes or Google Play (an "App Store"), you will have a separate, additional account relationship with that App Store and the information you provide to that App Store will be handled in accordance with the privacy practices of the applicable App Store. App Stores are not partners or representatives of the Author and the Author is not responsible for the acts or omissions of an App Store with regard to the collection, use, maintenance or disclosure of your information. If you want to change your preferences with regard to how an applicable App Store collects or uses your information, you should review the privacy practices of the applicable App Store and adjust your privacy or other settings directly through the applicable App Store. The Author will not receive or have access to any of the information you provide to, or that is collected by, an applicable App Store.</p>
            <h4>C. No Use by Children</h4>
            <p>The App is not intended for use by children under the age of thirteen (13). If you are under the age of thirteen (13), please do not use the App.</p>
            <h4>D. Modifications to this Privacy Notice</h4>
            <p>We will notify you of material changes to this Privacy Notice, including changes regarding how we collect, use, maintain or share your information, by posting the modified privacy notice on the App at least thirty (30) days before the effective date of the changes. If you do not agree to the changes, you should discontinue your use of the App prior to the time the modified privacy notice takes effect. If you continue using the App after the modified privacy notice takes effect, you will be bound by the modified privacy notice.</p>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;