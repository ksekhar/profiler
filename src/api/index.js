const INITIAL_STATE = {
  skills: [
    {
      id: 1,
      name: 'ruby',
    },
    {
      id: 2,
      name: 'javascript',
    },
    {
      id: 3,
      name: 'angular',
    },
    {
      id: 4,
      name: 'back-end',
    },
    {
      id: 5,
      name: 'react',
    },
  ],
  profileList: [
    {
      id: 1,
      name: 'raj',
      skillExperience: { 1: 2, 2: 2, 3: 1 },
    },
    {
      id: 2,
      name: 'madhu',
      skillExperience: { 2: 1, 3: 2, 4: 2 },
    },
  ],
  profileFilter: 'BY_SKILLS',
  selectedProfiles: [1, 2],
};

export default INITIAL_STATE;
