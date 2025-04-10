import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Componente responsável por exibir informações detalhadas de um único usuário
const UserDetails = () => {
  const { id } = useParams(); // Extrai o ID da URL
  const navigate = useNavigate(); // Hook para redirecionamento de páginas

  const [user, setUser] = useState(null); // Estado que armazenará os dados do usuário

  useEffect(() => {
    // Função assíncrona para buscar os dados do usuário na API
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8800/${id}`);
        const data = await response.json();
        setUser(data); // Salva os dados retornados no estado
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
      }
    };

    fetchUser(); // Executa a busca ao carregar o componente
  }, [id]); // Executa sempre que o ID mudar

  // Exibe mensagem temporária enquanto os dados estão sendo buscados
  if (!user) return <p>Carregando dados do usuário...</p>;

  return (
    <div className="crud-user">
      <div className="modal-content">
        <h1>Informações do Usuário</h1>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Nome:</strong> {user.nome}</p>
        <p><strong>Sobrenome:</strong> {user.sobrenome}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Identidade de Gênero:</strong> {user.genero}</p>
        <p><strong>Ano de Nascimento:</strong> {user.anoNascimento}</p>
        <p><strong>CPF:</strong> {user.cpf}</p>

        {/* Botão para voltar à página inicial */}
        <button onClick={() => navigate("/")}>Voltar para Início</button>
      </div>
    </div>
  );
};

export default UserDetails;
