import { db } from "../db.js"; 

// Funções para realizar o CRUD

export const getUsers = (_, res) => { // Retorna todos os usuários
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => { // Envia query para o database
    if (err) return res.json(err); // Caso contrário ele retorna erro
    return res.status(200).json(data); 
  });
};

export const getUserById = (req, res) => { // Retorna o usuário de acordo com o id
  const id = req.params.id;
  const q = "SELECT * FROM users WHERE id = ?";

  db.query(q, [id], (err, data) => { // Envia query para o database
    if (err) return res.status(500).json(err); // Caso contrário retorna erro
    if (data.length === 0) return res.status(404).json({ error: "Usuário não encontrado" });
    return res.status(200).json(data[0]);
  });
};

export const addUser = (req, res) => { // Adiciona o usuário 
  const { nome, sobrenome, email, genero, anoNascimento, cpf } = req.body;
  const q = "INSERT INTO users (nome, sobrenome, email, genero, anoNascimento, cpf) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(q, [nome, sobrenome, email, genero, anoNascimento, cpf], (err, data) => { // Envia query para o database
    if (err) { // Caso contrário retorna erro
      console.error("Erro ao inserir usuário:", err);
      return res.status(500).json(err);
    }
    return res.status(201).json(data);
  });
};

export const updateUser = (req, res) => { // Atualiza o usuário
  const { nome, sobrenome, email, genero, anoNascimento, cpf } = req.body;
  const id = req.params.id;
  const q = "UPDATE users SET nome = ?, sobrenome = ?, email = ?, genero = ?, anoNascimento = ?, cpf = ? WHERE id = ?";

  db.query(q, [nome, sobrenome, email, genero, anoNascimento, cpf, id], (err, data) => { // Envia query para o database
    if (err) return res.status(500).json(err); // Caso contrário retorna erro
    return res.status(200).json(data);
  });
};


export const deleteUser = (req, res) => { // Deleta de acordo com o id do usuário
  const id = req.params.id;
  const q = "DELETE FROM users WHERE id = ?";

  db.query(q, [id], (err, data) => { // Envia query para o database
    if (err) return res.status(500).json(err); // Caso contrário retorna erro
    return res.status(200).json({ message: "Usuário deletado com sucesso" });
  });
};
