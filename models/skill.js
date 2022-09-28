const skills = [
    {id: 101, skill: 'HTML', expertise: 3},
    {id: 102, skill: 'CSS', expertise: 2},
    {id: 103, skill: 'JavaScript', expertise: 3},
    {id: 102, skill: 'Express', expertise: 1},
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }