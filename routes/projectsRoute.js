const express = require('express');
const router = express.Router();
// const _ = require('lodash');
// const bcrypt = require('bcrypt');
const { Project, validate } = require('../models/project');
// const validateBody = require('../middleware/validateBody');
// const admin = require('../middleware/admin');
// const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  //   const users = await User.find().sort('username');
  res.send('Worked');
});

module.exports = router;
