// Should name the model in uppercase and singular
const Skill = require('../models/skill');
 
 module.exports = {
    index, 
    show,
    new: newSkill,
    create, 
    delete: deleteSkill, 
    edit, 
    update
  };
 
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

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

  function edit(req, res) {
    res.render('skills/edit', {
      title: 'Edit Skill',
      skill: Skill.getOne(req.params.id)
    });
  }

  function update(req, res) {
    Skill.updateOne(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`);
  }