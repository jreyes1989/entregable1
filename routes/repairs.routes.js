const { Router } = require('express');
const {
  allPendingRepairs,
  enterDataRepairs,
  createRepairs,
  updateRepairs,
  deleteRepairs,
} = require('../controllers/repairs.controller');

const router = Router();

router.get('/', allPendingRepairs);

router.get('/:id', enterDataRepairs);

router.post('/', createRepairs);

router.patch('/:id', updateRepairs);

router.delete('/:id', deleteRepairs);

module.exports = {
  repairsRouter: router,
};
