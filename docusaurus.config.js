// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs',
  tagline: 'Aura Network',
  url: 'https://docs.aura.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Logo1.svg',
  organizationName: 'aura-nw', // Usually your GitHub org/user name.
  projectName: 'Documentations', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aura-nw/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/aura-nw/docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Aura.network',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Logo1.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        // links: [{
        //     title: 'Docs',
        //     items: [{
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     }, ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [{
        //         label: 'Twitter',
        //         href: '//twitter.com/aura_nw',
        //       },
        //       {
        //         label: 'Linkedin',
        //         href: '//www.linkedin.com/company/auranetwork/about/',
        //       },
        //       {
        //         label: 'Facebook',
        //         href: '//www.facebook.com/nwaura',
        //       },
        //       {
        //         label: 'Github',
        //         href: '//github.com/aura-nw',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Aura Network Document, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;