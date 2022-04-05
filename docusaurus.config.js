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
    favicon: 'img/Aura-logo-6.png',
    organizationName: 'aura-nw', // Usually your GitHub org/user name.
    projectName: 'Documentations', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
					id: 'docs',
					path: 'docs',
					routeBasePath: 'docs',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/aura-nw/docs/edit/main',
                },
                blog: {
                    path: 'blog',
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/aura-nw/docs/edit/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
	plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
		id: 'aura-safe',
		path: 'aura-safe',
		routeBasePath: 'aura-safe',
        sidebarPath: require.resolve('./sidebars.js'),
        // Please change this to your repo.
        editUrl: 'https://github.com/aura-nw/docs/edit/main',
      },
    ],
  ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'Aura.network',
            logo: {
                alt: 'My Site Logo',
                src: 'img/Aura-logo-6.png',
            },
            items: [
				{
                    type: 'doc',
					docId: 'intro',
                    position: 'left',
                    label: 'Docs',
                },
				{
                    to: 'aura-safe/safe',
                    position: 'left',
                    label: 'Aura Safe',
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left'
                }
            ],
        },
        footer: {
            links: [{
                    label: 'Github',
                    href: 'https://github.com/aura-nw',
                },
                {
                    label: 'Discord',
                    href: 'https://discord.gg/BAYUkN2hqp',
                },
                {
                    label: 'Twitter',
                    href: 'https://twitter.com/AuraNetworkHQ',
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Aura Network, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;