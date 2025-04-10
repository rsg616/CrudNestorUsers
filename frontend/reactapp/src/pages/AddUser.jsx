import React from "react";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

const AddUser = ({ onSaved }) => {
  const navigate = useNavigate();

  // Dispara quando o formulário for encerrado (salvo ou cancelado)
  const finalizarCadastro = () => {
    onSaved();        // Atualiza a lista principal com os novos dados
    navigate("/");     // Redireciona para a página principal após a ação
  };

  return (
    <section className="crud-user">
      <div className="modal-content">
        <header>
          <h1 className="form-title">Novo Cadastro</h1>
        </header>
        {/* Formulário que recebe função de callback ao finalizar */}
        <UserForm onClose={finalizarCadastro} />
      </div>
    </section>
  );
};

export default AddUser;
