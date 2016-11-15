// var exports = module.exports = {};

const SELECT_PROFILE = 'SELECT_PROFILE'
const SET_PROFILE_FILTER = 'SET_PROFILE_FILTER'
import _ from 'lodash'

const ProfileFilter = {
  BY_SKILLS: 'BY_SKILLS'
}

function selectProfile(id) {
  return { type: SELECT_PROFILE, id }
}

function setProfileFilter(filter) {
  return { type: SET_PROFILE_FILTER, filter }
}

export function bySkills(skills, profileList, payload) {
    var currentFilterSkill = skills.find(function(skill){
      return skill.name === payload;
    });
    var list = profileList.filter(function(profile) {
      return _.has(profile.skillExperience, currentFilterSkill.id);
    });
    return {
      type: 'BY_SKILLS',
      payload: list
    }
}


// exports.ProfileFilter = ProfileFilter
// export default ProfileFilter;
