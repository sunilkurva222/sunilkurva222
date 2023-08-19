var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Change the database connection URL with yours
mongoose.connect('mongodb+srv://ksunilmarolix:LQ5k27PTvFbCmO0i@cluster0.b5fk3cn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully!');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

module.exports = { mongoose };
