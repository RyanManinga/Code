const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Listening on port ${port}...`));

mongoose.connect('mongodb://localhost/Codewithryan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
