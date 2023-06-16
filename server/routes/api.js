const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validateUser = require('../models/validation/validate');
const _ = require('lodash');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validateUser(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  let user = await new User(_.pick(req.body, ['name', 'email', 'password']));
  if(user) return res.status(400).send('User already Exists!!');

  user = await user.save();

});

module.exports = router;