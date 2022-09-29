const skills = [
    {id: 101, skill: 'HTML', expertise: 3},
    {id: 102, skill: 'CSS', expertise: 2},
    {id: 103, skill: 'JavaScript', expertise: 3},
    {id: 102, skill: 'Express', expertise: 1},
  ];
  
  module.exports = {
    getAll, 
    getOne, 
    create, 
    deleteOne,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skill wouldn't be done :)
    skill.expertise = 0;
    skills.push(skill);
  }
  	
  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }