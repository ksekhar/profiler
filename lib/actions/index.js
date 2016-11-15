'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bySkills = bySkills;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var exports = module.exports = {};

var SELECT_PROFILE = 'SELECT_PROFILE';
var SET_PROFILE_FILTER = 'SET_PROFILE_FILTER';


var ProfileFilter = {
  BY_SKILLS: 'BY_SKILLS'
};

function selectProfile(id) {
  return { type: SELECT_PROFILE, id: id };
}

function setProfileFilter(filter) {
  return { type: SET_PROFILE_FILTER, filter: filter };
}

function bySkills(skills, profileList, payload) {
  var currentFilterSkill = skills.find(function (skill) {
    return skill.name === payload;
  });
  var list = profileList.filter(function (profile) {
    return _lodash2.default.has(profile.skillExperience, currentFilterSkill.id);
  });
  return {
    type: 'BY_SKILLS',
    payload: list
  };
}

// exports.ProfileFilter = ProfileFilter
// export default ProfileFilter;