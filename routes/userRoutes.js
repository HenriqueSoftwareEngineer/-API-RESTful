const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

// Rotas de usuários
router.get('/', authenticateToken, getUsers);   // Pega todos os usuários, requer autenticação
router.post('/', createUser);                   // Cria um novo usuário

module.exports = router;
