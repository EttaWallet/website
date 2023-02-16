import React from 'react';
import '../../static/css/components.css';
import Link from '@docusaurus/Link';
import {
  MdOutlineDevices,
  MdCode,
  MdEdit,
  MdAccessibleForward,
  MdPeopleOutline,
} from 'react-icons/md';
import { IconTag } from './IconTag';

type FeatureTypes = {
  title: string;
  description: string;
  img?: ({ ...props }: React.SVGProps<SVGSVGElement>) => JSX.Element;
  color: string;
};

const features: FeatureTypes[] = [
  {
    title: 'Cross-Platform',
    description:
      'Consistent design across android, iOS, and web. 30+ components designed to save development time.',
    img: MdOutlineDevices,
    color: '#894cff',
  },
  {
    title: 'Easy to use',
    description:
      'Built completely in TypeScript. Starting your react native app has never been easier. Supports Expo too! ',
    img: MdCode,
    color: '#ff5381',
  },
  {
    title: 'Customizable',
    description: 'Easily style any of our components just the way you want.',
    img: MdEdit,
    color: '#00b85c',
  },
  {
    title: 'Community-Driven',
    description:
      "100% built by the community. We're here because we love open source.",
    img: MdPeopleOutline,
    color: '#328aff',
  },
];

const Home: React.FunctionComponent<{}> = () => {
  return (
    <section className="" id="why">
      <div className="container">
        <div className="row is-multiline">
          {features.map(({ title, description, img, color }, index) => (
            <div className="col col--3" key={index}>
              <Link className="card shadow--md" style={{ height: '100%' }}>
                <div className="card__body">
                  <h4 className="gradient clip-text inline-flex-center">
                    <IconTag
                      icon={img}
                      color={color}
                      style={{ marginRight: 8 }}
                    />
                    {title}
                  </h4>
                  <p
                    className="p--desc"
                    style={{ lineHeight: 1.4, fontSize: '0.8rem' }}
                  >
                    {description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
