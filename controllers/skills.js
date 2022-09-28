 
 module.exports = {
    index
  };
 
  // Should name the model in uppercase and singular
 const Skill = require('../models/skill');
 
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }


