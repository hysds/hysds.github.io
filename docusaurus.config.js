// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  deploymentBranch: 'develop',
  title: 'HySDS',
  tagline: 'Process Anywhere, Scale Everywhere: The Science Data Solution',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hysds.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hysds', // Usually your GitHub org/user name.
  projectName: 'hysds.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add markdown and themes configuration
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'HySDS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
            href: '/docs/'
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API',
            href: '/docs/api/',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'showcaseSidebar',
            position: 'left',
            label: 'Showcase',
            href: '/docs/showcase/',
          },
          {
            type: 'docSidebar',
            sidebarId: 'communitySidebar',
            position: 'left',
            label: 'Community',
            href: '/docs/community/',
          },        
          {
            href: 'https://github.com/hysds/hysds',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Docs',
                to: '/docs/',
              },
              {
                label: 'API',
                to: '/docs/api/',
              },
              {
                label: 'Showcase',
                to: '/docs/showcase',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/hysds/hysds/issues',
              },
              //{
              //  label: 'Discord',
              //  href: 'https://discordapp.com/invite/docusaurus',
              //},
              //{
              //  label: 'Twitter',
              //  href: 'https://twitter.com/docusaurus',
              //},
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hysds/hysds',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} California Institute of Technology. U.S. Government sponsorship acknowledged. Contents licensed under Apache License Version 2.0.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
