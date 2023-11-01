require('dotenv').config();

const app = require('./server');
require('./database');

// Server is listening and running
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
  console.log('Environment:', process.env.NODE_ENV);
});