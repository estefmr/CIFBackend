const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler} = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hey');
});

app.get('/nuevaruta', (req, res) => {
  res.json({
    name: 'rutanueva',
    price: 6000
  });
});

routerApi(app);
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('puerto se escucha ' + port);
});


