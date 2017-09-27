
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  // getProfiles: getProfiles,
  // getProfile: getProfile
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

// function getProfiles (connection) {
//   return connection('profiles').select()
// }

// function getProfile (id, connection) {
//   return connection('profile').where('id', id)
// }
