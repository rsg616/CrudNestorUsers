import express from "express";
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
} from "../Controllers/users.js";

const router = express.Router(); // instancia um agrupador de rotas do Express

// Define os endpoints da API relacionados a usuários
router.get("/", getUsers);           // Retorna todos os usuários
router.get("/:id", getUserById);     // Busca um usuário específico por ID
router.post("/", addUser);           // Adiciona um novo registro de usuário
router.put("/:id", updateUser);      // Altera os dados de um usuário existente
router.delete("/:id", deleteUser);   // Remove um usuário do banco pelo ID

export default router;
