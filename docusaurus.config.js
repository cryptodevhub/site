const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CryptoDevHub',
  tagline: 'The place where Blockchain- and Crypto developers learn, meet and grow',
  url: 'https://cryptodevhub.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'cryptodevhub',
  projectName: 'site',
  themeConfig: {
    navbar: {
      title: 'CryptoDevHub',
      logo: {
        alt: 'CryptoDevHub Logo',
        src: 'img/logo.svg'
      },
      items: [
        { type: 'doc', docId: 'welcome', position: 'left', label: 'Wiki' },
        { to: '/blockchain-development-tutorials', label: 'Tutorials', position: 'left' },
        { to: '/blockchain-development-tools', label: 'Tools', position: 'left' },
        { to: '/blockchain-developer-jobs', label: 'Jobs', position: 'left' },
        {
          href: 'https://cryptodevhub.io/discord',
          label: 'Discord',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Wiki',
          items: [
            {
              label: 'Solidity Tutorial',
              to: '/wiki/solidity-tutorial'
            },
            {
              label: 'Tutorials',
              to: '/blockchain-development-tutorials'
            },
            {
              label: 'Tools',
              to: '/blockchain-development-tools'
            },
            {
              label: 'Jobs',
              to: '/blockchain-developer-jobs'
            },
            {
              label: 'Testnet Faucets',
              to: '/blockchain-testnet-faucets'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://cryptodevhub.io/discord'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cryptodevhub'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cryptodevhub'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CryptoDevHub`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'wiki',
          routeBasePath: '/wiki',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/cryptodevhub/site/edit/master/docs/'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/cryptodevhub/site/edit/master/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsDir: 'wiki',
        docsRouteBasePath: '/wiki'
      }
    ]
  ]
}
