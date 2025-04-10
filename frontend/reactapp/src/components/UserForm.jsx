import React, { useEffect, useState } from "react";

// Componente reutilizável que controla tanto o cadastro quanto a edição de usuários
const UserForm = ({ user, onClose }) => {
  const [formValues, setFormValues] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    genero: "",
    anoNascimento: "",
    cpf: "",
  });

  // Se o componente for chamado com dados de um usuário, inicializa os campos com esses valores
  useEffect(() => {
    if (user) {
      setFormValues({
        nome: user.nome || "",
        sobrenome: user.sobrenome || "",
        email: user.email || "",
        genero: user.genero || "",
        anoNascimento: user.anoNascimento || "",
        cpf: user.cpf || "",
      });
    }
  }, [user]);

  // Trata mudanças em qualquer campo do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cpf") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length > 11) return;
      setFormValues((prev) => ({ ...prev, cpf: digitsOnly }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Valida os dados preenchidos antes de enviar
  const validateForm = () => {
    const { nome, sobrenome, email, genero, anoNascimento, cpf } = formValues;

    if (!nome.trim() || !sobrenome.trim()) {
      alert("Preencha os campos obrigatórios: nome e sobrenome.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Formato de e-mail inválido.");
      return false;
    }

    const ano = parseInt(anoNascimento);
    const atual = new Date().getFullYear();
    if (isNaN(ano) || ano < 1900 || ano > atual - 10) {
      alert("Ano de nascimento inválido.");
      return false;
    }

    if (cpf.length !== 11) {
      alert("CPF deve conter exatamente 11 números.");
      return false;
    }

    return true;
  };

  // Responsável por enviar os dados para o backend (criação ou atualização)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const url = user ? `http://localhost:8800/${user.id}` : "http://localhost:8800";
    const method = user ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      onClose();
    } catch (err) {
      console.error("Erro ao enviar os dados para o servidor:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="top">
        <input
          name="nome"
          placeholder="Nome"
          value={formValues.nome}
          onChange={handleInputChange}
        />
        <input
          name="sobrenome"
          placeholder="Sobrenome"
          value={formValues.sobrenome}
          onChange={handleInputChange}
        />
        <input
          name="genero"
          placeholder="Gênero"
          value={formValues.genero}
          onChange={handleInputChange}
        />
        <input
          name="email"
          placeholder="E-mail"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <input
          name="anoNascimento"
          placeholder="Ano de Nascimento"
          value={formValues.anoNascimento}
          onChange={handleInputChange}
        />
        <input
          name="cpf"
          placeholder="CPF (apenas números)"
          value={formValues.cpf}
          onChange={handleInputChange}
          maxLength={11}
        />
      </div>

      <div className="botton">
        <button type="submit">Finalizar</button>
        <button type="button" onClick={onClose}>Voltar</button>
      </div>
    </form>
  );
};

export default UserForm;
