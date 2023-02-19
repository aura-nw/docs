// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

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
    staticDirectories: ['public', 'static'],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/aura-nw/docs/edit/main',
                    docLayoutComponent: '@theme/DocPage',
                    docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi-docs
                    sidebarCollapsed: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: 'apiDocs',
                docsPluginId: 'classic',
                config: {
                    horoscope: {
                        // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
                        specPath: 'openAPI/horoscope-swagger-trimed.json', // Path to designated spec file
                        outputDir: 'docs/horoscope', // Output directory for generated .mdx docs
                        sidebarOptions: {
                            groupPathsBy: 'tag',
                        },
                    },
                },
            },
        ],
    ],
    themes: ['docusaurus-theme-openapi-docs'],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/aura-logo-2.png',
                    srcDark: 'img/aura-logo.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'overview',
                        position: 'left',
                        label: 'Overview',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'developer',
                        position: 'left',
                        label: 'Developers',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorials',
                        position: 'left',
                        label: 'Tutorials',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'validator',
                        position: 'left',
                        label: 'Validators',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'integrate',
                        position: 'left',
                        label: 'Integrate',
                    },
                    {
                        type: 'dropdown',
                        sidebarId: 'product',
                        position: 'left',
                        label: 'Ecosystem',
                        items: [
                            {
                                type: 'doc',
                                docId: 'product/pyxis-safe/index',
                                label: 'Pyxis Safe',
                            },
                            {
                                type: 'doc',
                                docId: 'product/aurascan/index',
                                label: 'Aurascan',
                            },
                            {
                                type: 'doc',
                                docId: 'product/horoscope/index',
                                label: 'Horoscope',
                            },
                        ],
                    },
                ],
            },
            footer: {
                logo: {
                    alt: '',
                    src: 'img/aura-logo-2.png',
                    srcDark: 'img/aura-logo.png',
                    href: 'https://docs.aura.network.com',
                },
                links: [
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Learn',
                                to: '/',
                            },
                            {
                                label: 'Developers',
                                to: '/',
                            },
                            {
                                label: 'Validators',
                                to: '/',
                            },
                            {
                                label: 'Command Line',
                                to: '/',
                            },
                            {
                                label: 'Archiecture',
                                to: '/',
                            },
                        ],
                    },
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Learn',
                                to: '/',
                            },
                            {
                                label: 'Developers',
                                to: '/',
                            },
                            {
                                label: 'Validators',
                                to: '/',
                            },
                            {
                                label: 'Command Line',
                                to: '/',
                            },
                            {
                                label: 'Archiecture',
                                to: '/',
                            },
                        ],
                    },
                    {
                        title: 'Documentation',
                        items: [
                            {
                                label: 'Learn',
                                to: '/',
                            },
                            {
                                label: 'Developers',
                                to: '/',
                            },
                            {
                                label: 'Validators',
                                to: '/',
                            },
                            {
                                label: 'Command Line',
                                to: '/',
                            },
                            {
                                label: 'Archiecture',
                                to: '/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Aura Network, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['go', 'rust', 'json', 'bash'],
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: false,
                    hideable: true,
                },
            },
            sidebar: {
                autoCollapseCategories: true,
            },
            algolia: {
                // The application ID provided by Algolia
                appId: 'HOCNVW2214',

                // Public API key: it is safe to commit it
                apiKey: '20b61b3938252c99491f51f430f7d75b',

                indexName: 'aura',

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                // externalUrlRegex: 'external\\.com|domain\\.com',

                // Optional: Algolia search parameters
                searchParameters: {},

                // Optional: path for search page that enabled by default (`false` to disable it)
                searchPagePath: 'search',

                //... other Algolia params
            },
        }),
}

module.exports = config
