'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bySkills;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const SELECT_PROFILE = 'SELECT_PROFILE';
// const SET_PROFILE_FILTER = 'SET_PROFILE_FILTER';

// function selectProfile(id) {
//   return { type: SELECT_PROFILE, id };
// }

// function setProfileFilter(filter) {
//   return { type: SET_PROFILE_FILTER, filter };
// }

function bySkills(skills, profileList, payload) {
  var currentFilterSkill = skills.find(function (skill) {
    return skill.name === payload;
  });
  var profileIds = [];
  profileList.forEach(function (profile) {
    if (_lodash2.default.has(profile.skillExperience, currentFilterSkill.id)) {
      profileIds.push(profile.id);
    }
  });
  return {
    type: 'BY_SKILLS',
    payload: profileIds
  };
}

// exports.ProfileFilter = ProfileFilter
// export default ProfileFilter;
// var exports = module.exports = {};