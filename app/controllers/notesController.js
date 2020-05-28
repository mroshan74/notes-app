const Note = require('../models/note')

// get notes
module.exports.list = (req, res) => {
  Note.find({ user : req.user._id })
    .then((notes) => {
      res.json(notes)
    })
    .catch((err) => {
      res.json(err)
    })
}

// post
module.exports.create = (req, res) => {
  const url = req.protocol + '://' + req.get('host')
  //console.log(url, req.get('host'))
  //console.log(req.files)
  const img = req.files
  // const pictures = {
  //   name: img.filename,
  //   originalName: img.originalname,
  //   path: img.path,
  // }
  const pictures = []
  for(const pic of img){
    pictures.push({
      name: pic.filename,
      originalName: pic.originalname,
      path: pic.path,
      url: url + pic.path.replace('public', ''),
    })
  }
  const body = req.body
  const dataPack = Object.assign({},body,{pictures})
  //console.log(dataPack)
  // console.log('body---------->>',body)
  const note = new Note(dataPack)
  note.user = req.user._id
  // note.url = url + img.path.replace('public','')
  note
    .save()
    .then((note) => {
      res.json(note)
    })
    .catch((err) => {
      res.json(err)
    })
}

// show note
module.exports.show = (req, res) => {
  const id = req.params.id
  Note.findOne({_id: id, user: req.user._id})
  .then((note) => {
    if (note) {
      res.json(note)
    } else {
      res.json({})
    }
  })
}

// update note
module.exports.update = (req, res) => {
  const id = req.params.id
  const body = req.body
  Note.findOneAndUpdate({ _id: id, user: req.user._id }, body, {
    new: true,
    runValidators: true,
  })
    .then((note) => {
      res.json(note)
    })
    .catch((err) => {
      res.json(err)
    })
}

// delete a note
module.exports.destroy = (req, res) => {
  const id = req.params.id
  Note.findOneAndDelete({ _id: id, user: req.user._id })
    .then((task) => {
      res.json(task)
    })
    .catch((err) => {
      res.json(err)
    })
}
