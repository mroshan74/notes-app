const mongoose = require('mongoose')

const configureDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/notes-app-jan', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log('connected to db-->notes-app-jan')
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = configureDB  // export the file -> export default

// module.exports = { configureDB } -> single export -> export const