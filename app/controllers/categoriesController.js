const Category = require('../models/category')

// get all categories
module.exports.list = (req, res) => {
  Category.find({user: req.user._id})
    .then((categories) => {
      res.json(categories)
    })
    .catch((err) => {
      res.json(err)
    })
}

// post a create 
module.exports.create = (req, res) => {
    const body = req.body 
    const category = new Category(body)
    category.user = req.user._id 
    category.save()
        .then((category) => { 
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}

// show a category
module.exports.show = (req, res) => {
    const id = req.params.id 
    Category.findOne({ _id: id, user: req.user._id }).then((category) => {
      if (category) {
        res.json(category)
      } else {
        res.json({})
      }
    }).catch(err => res.json(err))
}

// update a category
module.exports.update = (req,res) => {
  const id = req.params.id
  const body = req.body
  Category.findOneAndUpdate({ _id: id, user: req.user._id }, body, {
    new: true,
    runValidators: true,
  })
    .then((category) => {
      res.json(category)
    })
    .catch((err) => {
      res.json(err)
    })
}

// delete a category
module.exports.destroy = (req, res) => {
  const id = req.params.id
  Category.findOneAndDelete({ _id: id, user: req.user._id })
    .then((task) => {
      res.json(task)
    })
    .catch((err) => {
      res.json(err)
    })
}