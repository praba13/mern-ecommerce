const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((con) => {
      console.log(`MongoDB is connected...`);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
