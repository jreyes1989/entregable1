const { Router } = require('express');
const {
  createUsers,
  enterDataUSers,
  getAllDataUsers,
  updateUsers,
  deleteUser,
} = require('../controllers/users.controller');

const router = Router();

router.get('/', getAllDataUsers);

router.get('/:id', enterDataUSers);

router.post('/', createUsers);

router.patch('/:id', updateUsers);

router.delete('/:id', deleteUser);

module.exports = {
  usersRouter: router,
};
