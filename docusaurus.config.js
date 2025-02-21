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
  favicon: 'img/aura-doc-favicon.svg',
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
          editUrl: ({ docPath }) => `https://github.com/aura-nw/docs/edit/main/docs/${docPath}`,
          //docLayoutComponent: '@theme/DocPage',
          //docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi-docs
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.js'),
          sidebarCollapsed: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'apiDocs',
        docsPluginId: 'classic',
        config: {
          horoscopeV2_block: {
            specPath: 'openAPI/horoscope-v2/block.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_transaction: {
            specPath: 'openAPI/horoscope-v2/transaction.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_proposal: {
            specPath: 'openAPI/horoscope-v2/proposal.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_validator: {
            specPath: 'openAPI/horoscope-v2/validator.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_vote: {
            specPath: 'openAPI/horoscope-v2/vote.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_cw721_token: {
            specPath: 'openAPI/horoscope-v2/cw721-token.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_cw721_activity: {
            specPath: 'openAPI/horoscope-v2/cw721-activity.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_cw20_holder: {
            specPath: 'openAPI/horoscope-v2/cw20-holder.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_cw20_activity: {
            specPath: 'openAPI/horoscope-v2/cw20-activity.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_account: {
            specPath: 'openAPI/horoscope-v2/account.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_contract: {
            specPath: 'openAPI/horoscope-v2/smart-contract.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_codeid: {
            specPath: 'openAPI/horoscope-v2/codeid.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_evm_transaction: {
            specPath: 'openAPI/horoscope-v2/evm-transaction.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_evm_contract: {
            specPath: 'openAPI/horoscope-v2/evm-contract.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_erc20_activity: {
            specPath: 'openAPI/horoscope-v2/erc20-activity.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_erc20_holder: {
            specPath: 'openAPI/horoscope-v2/erc20-holder.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_erc721_activity: {
            specPath: 'openAPI/horoscope-v2/erc721-activity.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
          horoscopeV2_erc721_token: {
            specPath: 'openAPI/horoscope-v2/erc721-token.yaml', // Path to designated spec file
            outputDir: 'docs/horoscope-v2', // Output directory for generated .mdx docs
          },
        },
      },
    ],
  ],
  markdown: {
    mermaid: true
  },
  themes: ['docusaurus-theme-openapi-docs', '@docusaurus/theme-mermaid'],
  themeConfig:
  {
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/aura-logo-3-light.png',
        srcDark: 'img/aura-logo-3.png',
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
              docId: 'product/aurascan/index',
              label: 'Aurascan',
            },
            {
              type: 'doc',
              docId: 'product/pyxis-safe/index',
              label: 'Pyxis Safe',
            },
            {
              type: 'doc',
              docId: 'product/pyxis-mobile/index',
              label: 'Pyxis Smart Wallet',
            },
            {
              type: 'doc',
              docId: 'product/horoscope/index',
              label: 'Horoscope',
            }
          ],
        },
      ],
    },
    footer: {},
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
    prism: {
      additionalLanguages: ['rust'],
    },
  }
}

module.exports = config
