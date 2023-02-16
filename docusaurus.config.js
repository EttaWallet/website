// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EttaWallet UI Library',
  tagline:
    'Open-source, opinionated React Native component library for building quality, beautiful, accessible bitcoin apps',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ettawallet.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  clientModules: [require.resolve('./plugins/snackPlayerInitializer.js')],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EttaWallet', // Usually your GitHub org/user name.
  projectName: 'etta-ui', // Usually your repo name.

  baseUrlIssueBanner: false,
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  staticDirectories: ['static'],

  scripts: [{ src: 'https://snack.expo.dev/embed.js', defer: true }],
  plugins: ['./plugins/etta-web.js'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EttaWallet/website/edit/main',

          remarkPlugins: [require('./plugins/remark-snackplayer')],
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'EttaWallet',
        logo: {
          alt: 'EttaWallet Logo',
          src: 'img/bitcoin-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Components',
          },
          {
            to: 'about',
            position: 'left',
            label: 'About',
          },
          {
            href: 'https://github.com/EttaWallet',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://twitter.com/ettawallet',
            label: 'Twitter',
            position: 'right',
          },
          {
            href: 'https://bitcoin.design',
            label: 'Bitcoin Design Guide',
            position: 'right',
          },
        ],
      },
      footer: {},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
