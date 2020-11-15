require('dotenv').config();
const math = require('remark-math');
const katex = require('rehype-katex');
const toc = require('remark-toc');
module.exports = {
  title: 'Math for Fun',
  tagline: 'Celebrate, study, and enjoy Math',
  url: 'https://mathforfun.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/smooth-curve-1x.png',
  organizationName: 'TheodoreChu', // Usually your GitHub org/user name.
  projectName: 'Math', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'supportus',
      content:
        '⭐ Math is Fun 😄 If you see any issues or need help, please <a target="_blank" rel="noopener noreferrer" href="https://github.com/TheodoreChu/Math/issues">open an issue on GitHub</a>. 👋🏼', //
    },
    image: 'img/smooth-curve-512h.png',
    algolia: {
      appId: process.env.APPLICATION_ID,
      apiKey: process.env.API_KEY,
      indexName: process.env.INDEX_NAME,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Math',
      logo: {
        alt: 'My Site Logo',
        src: 'img/smooth-curve.svg',
      },
      items: [
        {
          label: 'Topics',
          position: 'left',
          items: [
            { to: '/algebra/', label: 'Algebra', position: 'left' },
            {
              to: '/algebra/linear/',
              label: 'Linear Algbra',
              position: 'right',
            },
            {
              to: '/algebra/abstract/',
              label: 'Abstract Algbra',
              position: 'right',
            },
          ],
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/TheodoreChu/Math',
          //label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          title: 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Math',
          items: [
            {
              label: 'Linear Algebra',
              to: 'algebra/linear/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Source Code',
              href: 'https://github.com/TheodoreChu/Math',
            },
            {
              label: 'Issues',
              href: 'https://github.com/TheodoreChu/Math/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Contact',
              href: 'https://theochu.com/contact/',
            },
          ],
        },
      ],
      copyright: `Math for Fun is a project by <a href="https://theochu.com/contact/">Theodore Chu.</a> 👋🏼 Copyright © ${new Date().getFullYear()}. All rights reserved. 🙂`,
    },
  },
  stylesheets: [
    {
      href: '/katex/v0.12.0/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  scripts: [
    // Plausible Analytics: https://plausible.io/mathforfun.org
    {
      'data-domain': 'mathforfun.org',
      src: 'https://whz9ruftvh4pxz8fc7vh.mathforfun.org/js/index.js',
      async: true,
      defer: true,
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'math',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/TheodoreChu/Math/edit/main/',
          routeBasePath: '/',
          remarkPlugins: [toc, math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/TheodoreChu/Math/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
