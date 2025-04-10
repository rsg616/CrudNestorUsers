import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = ({ onSaved }) => {
  const { id } = useParams();            // Extrai o parâmetro da URL (id do usuário)
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Estado que armazena os dados do usuário buscado

  useEffect(() => {
    // Função assíncrona para obter os dados do usuário por ID
    const carregarUsuario = async () => {
      try {
        const resposta = await fetch(`http://localhost:8800/${id}`);
        const dados = await resposta.json();
        setUser(dados); // Salva os dados retornados no estado
      } catch (erro) {
        console.error("Erro ao carregar dados do usuário:", erro);
      }
    };

    carregarUsuario();
  }, [id]); // Executa a busca sempre que o ID mudar

  // Função chamada após salvar ou cancelar
  const handleClose = () => {
    onSaved();        // Atualiza a lista de usuários no componente principal
    navigate("/");    // Retorna para a tela inicial
  };

  // Enquanto os dados ainda não chegaram, mostra mensagem de carregamento
  if (!user) return <p>Carregando dados do usuário...</p>;

  return (
    <div className="crud-user">
      <div className="modal-content">
        <h1>Atualizar Usuário</h1>
        {/* Formulário que recebe os dados preenchidos para edição */}
        <UserForm user={user} onClose={handleClose} />
      </div>
    </div>
  );
};

export default EditUser;
