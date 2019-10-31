const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB =
  'mongodb+srv://harun:0CL1Tywg6ib3AXGG@cluster0-cp8im.mongodb.net/blog-app?retryWrites=true&w=majority';
//connect database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connect successful!'))
  .catch(err => console.log('DB connection failed!'));

//Start the server
const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Listening on port ${port}`);
});
