// var exports = module.exports = {};
import _ from 'lodash';

// const SELECT_PROFILE = 'SELECT_PROFILE';
// const SET_PROFILE_FILTER = 'SET_PROFILE_FILTER';

// function selectProfile(id) {
//   return { type: SELECT_PROFILE, id };
// }

// function setProfileFilter(filter) {
//   return { type: SET_PROFILE_FILTER, filter };
// }

export default function bySkills(skills, profileList, payload) {
  const currentFilterSkill = skills.find(skill =>
    skill.name === payload,
  );
  const profileIds = [];
  profileList.forEach((profile) => {
    if (_.has(profile.skillExperience, currentFilterSkill.id)) {
      profileIds.push(profile.id);
    }
  });
  return {
    type: 'BY_SKILLS',
    payload: profileIds,
  };
}


// exports.ProfileFilter = ProfileFilter
// export default ProfileFilter;
