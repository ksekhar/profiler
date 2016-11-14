'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
// exports.ProfileFilter = ProfileFilter
exports.default = ProfileFilter;