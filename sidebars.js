module.exports = {
  someSidebar: {
    Welcome: ['welcome', 'algebra'],
    'Linear Algebra': [
      'algebra/linear',
      {
        type: 'category',
        label: 'Axler',
        items: [
          'algebra/linear/axler/introduction',
          'algebra/linear/axler/chapter-1',
          'algebra/linear/axler/chapter-2',
        ],
      },
    ],
    'Abstract Algebra': [
      'algebra/abstract',
      {
        type: 'category',
        label: 'Nicholson',
        items: [
          'algebra/abstract/nicholson/introduction',
          'algebra/abstract/nicholson/chapter-1',
        ],
      },
    ],
  },
};
