const express = require('express');
const bodyParser = require('body-parser');
//const { sequelize } = require('./models');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use('/api', routes);

const PORT = 5222;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
