export default [
  {
    text: 'Default',
    prefix: 'default',
    link: '/default/',
    children: [
      {
        text: 'Links',
        prefix: 'links',
        link: '/default/links/',
        children: [],
      },
      {
        text: 'Tools',
        prefix: 'tools',
        link: '/default/tools/',
        children: [
          {
            text: 'Fiddler',
            prefix: 'fiddler',
            link: '/default/tools/fiddler/',
            children: [],
          },
          {
            text: 'Postman',
            prefix: 'postman',
            link: '/default/tools/postman/',
            children: [],
          },
        ],
      },
    ],
  },
];
