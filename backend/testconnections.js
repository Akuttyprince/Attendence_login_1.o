const mongoose = require('mongoose');

const uri = "mongodb+srv://yuva:Yuva%402006@yuva.jkx9v.mongodb.net/";
mongoose.connect(uri, {

})
.then(() => {
  console.log('Connected to MongoDB successfully');
  process.exit(0);
})
.catch((err) => {
  console.error('Failed to connect to MongoDB:', err.message);
  process.exit(1);
});
