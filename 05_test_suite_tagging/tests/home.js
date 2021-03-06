var path = require('path');

module.exports = {
  tags: ['sanity', 'regression'],

  'Load Wikipedia': function (client) {
    require('nightwatch-pages')(client, path.resolve(__dirname, '..', 'pages'));
    client
      .page.homepage.load()
      .page.homepage.assertTitle('Wikipedia')
      .end();
  }
};
