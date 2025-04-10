import express from "express";
import userRoutes from "./Routes/users.js";
import cors from "cors";

const app = express(); // instancia a aplicação com o framework Express

app.use(express.json()); // permite o tratamento de dados no formato JSON
app.use(cors()); // habilita o compartilhamento entre origens diferentes (CORS)

app.use("/", userRoutes); // define o prefixo raiz para acessar as rotas de usuário

app.listen(8800, () => {
  console.log("Servidor ativo na porta 8800");
});
