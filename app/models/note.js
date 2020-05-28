const mongoose = require('mongoose')
const Schema = mongoose.Schema
const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false
  },
  pictures: [{
    originalName: String,
    name: String,
    path: String,
    url: String
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})
const Note = mongoose.model('Note', noteSchema)

module.exports = Note
