export { 
	find,
    findById,
    create,
    findByIdAndDelete
}



const devskills = [
  {text: 'JavaScript', done: true, _id: 125223, image: "images/javascript.png"},
  {text: 'NodeJS', done: false, _id: 127904, image: "images/nodejs.jpg"},
  {text: 'HTML5', done: false, _id: 139608, image: "images/html.png"},
  {text: 'MongoDB', done: false, _id: 139608, image:"images/mongodb_thumbnail.png"},
  {text: 'Python', done: false, _id: 139608, image:"images/python.png"},
  {text: 'Java', done: false, _id: 139608, image:"images/java.png"},
  {text: 'CSS', done: false, _id: 139608, image:"images/css.png"},
  {text: 'PHP', done: false, _id: 139608, image:"images/php.png"},
  {text: 'PostgreSql', done: false, _id: 139608, image:"images/postgresql.png"},
  {text: 'SQL', done: false, _id: 139608, image:"images/sql.png"},
  {text: 'Typescript', done: false, _id: 139608, image:"images/typscript.png"},
  {text: 'C++', done: false, _id: 139608, image:"images/c++.png"},
  {text: 'C#', done: false, _id: 139608, image:"images/c-sharp-c-logo.png"}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the devskills
    if (Object.keys(conditions).length === 0) return callback(null, devskills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
    try {
      const devskill = devskills.find(devskill => devskill._id === parseInt(id))
      if (!devskill) throw new Error ('No devskill was found')
      return callback(null, devskill)
    } catch (error) {
      console.log(error)
      return callback(error, null)
    }
  }

function create(devskill, callback) {
  // Add the id
  devskill._id = Date.now() % 1000000
  // New devskills wouldn't be done
  devskill.done = false
  devskills.push(devskill)
  return callback(null, devskill)
}

function findByIdAndDelete(id, callback){
    try { 
        // Find the index based on the _id of the devskill object
        const idx = devskills.findIndex(devskill => devskill._id == parseInt(id))
        const deletedDevskill = devskills.splice(idx, 1)
        if (!deletedDevskill.length ) throw new Error ('No devskill was deleted')
        return callback(null, deletedDevskill[0])
    } catch(error) {
        return callback(error, null)
    }
    }