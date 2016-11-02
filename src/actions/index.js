var exports = module.exports = {};

const SELECT_PROFILE = 'SELECT_PROFILE'
const SET_PROFILE_FILTER = 'SET_PROFILE_FILTER'

const ProfileFilter = {
  BY_SKILLS: 'BY_SKILLS'
}

function selectProfile(id) {
  return { type: SELECT_PROFILE, id }
}

function setProfileFilter(filter) {
  return { type: SET_PROFILE_FILTER, filter }
}
exports.ProfileFilter = ProfileFilter
