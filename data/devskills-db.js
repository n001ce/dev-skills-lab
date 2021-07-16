export { 
	find,
    findById,
    create,
    findByIdAndDelete
}



const devskills = [
  {text: 'JavaScript', done: true, _id: 125223},
  {text: 'NodeJS', done: true, _id: 127904},
  {text: 'HTML5', done: true, _id: 139608},
  {text: 'MongoDB', done: true, _id: 139665},
  {text: 'Python', done: true, _id: 139456},
  {text: 'Java', done: true, _id: 139345},
  {text: 'CSS', done: true, _id: 139234},
  {text: 'PHP', done: true, _id: 139123},
  {text: 'PostgreSql', done: true, _id: 139543},
  {text: 'SQL', done: true, _id: 139767},
  {text: 'Typescript', done: true, _id: 139789},
  {text: 'C++', done: true, _id: 139097},
  {text: 'C#', done: true, _id: 139789}
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
  devskill._id = Date.now() % 1000000
  devskill.done = true
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