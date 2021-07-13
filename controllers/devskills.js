import * as devskillsDb from '../data/devskills-db.js'

export {
    index,
    show,
    newDevskill as new,
    create,
    deleteDevskill as delete
}

function index(req, res){
  devskillsDb.find({}, function(error, devskills) {
    res.render('devskills/index', {
      devskills: devskills,
      error: error,
      time: req.time
    })
  })
}

function show(req, res) {
  devskillsDb.findById(req.params.id, function(error, devskill) {
    res.render('devskills/show', {
      devskill: devskill,
      error: error
    })
  })
}

function newDevskill(req, res) {
  res.render('devskills/new')
}

function create(req, res) {
  console.log(req.body)
  devskillsDb.create(req.body, function(error, devskill) {
		// Notice we are doing a redirect here!
    res.redirect('/devskills')
  })
}

function deleteDevskill(req, res) {
  devskillsDb.findByIdAndDelete(req.params.id, function(error, devskill) {
    res.redirect('/devskills')
  })
}