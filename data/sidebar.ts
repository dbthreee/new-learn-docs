export default [
  {
    text: 'Default',
    link: '/default/',
    prefix: 'default',
    children: [
      {
        text: 'links',
        link: '/default/links/',
        prefix: 'links',
        children: [],
        collapsible: true,
      },
      {
        text: 'tools',
        link: '/default/tools/',
        prefix: 'tools',
        children: [
          {
            text: 'fiddler',
            link: '/default/tools/fiddler/',
            prefix: 'fiddler',
            children: [],
            collapsible: true,
          },
          {
            text: 'postman',
            link: '/default/tools/postman/',
            prefix: 'postman',
            children: [],
            collapsible: true,
          },
        ],
        collapsible: true,
      },
    ],
    collapsible: true,
  },
];
