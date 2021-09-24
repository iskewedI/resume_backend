const express = require('express');
const router = express.Router();
// const _ = require('lodash');
// const bcrypt = require('bcrypt');
const { Project } = require('../models/project');
// const validateBody = require('../middleware/validateBody');
// const admin = require('../middleware/admin');
// const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const dbProjects = await Project.find().sort('order');

  res.send(dbProjects);
});

module.exports = router;
