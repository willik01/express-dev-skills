 
 module.exports = {
    index, 
    show,
    new: newSkill,
    create
  };
 
  // Should name the model in uppercase and singular
 const Skill = require('../models/skill');
 
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(), 
      title: 'Express Skills'
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Express show Skill',
    });
  }

  function newSkill(req, res) {
    res.render('skills/new', {
      title: 'Express New Skill'
    })
  }

  function create(req, res) {
    console.log('req body: ',req.body);
    Skill.create(req.body);
    res.redirect('/skills');
  }

