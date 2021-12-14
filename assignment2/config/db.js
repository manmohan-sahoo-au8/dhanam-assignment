const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://manmohan:manmohan@cluster0.js1qu.mongodb.net/dhanam?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((error) => {
    console.log(error);
  });
