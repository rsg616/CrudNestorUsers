import React from "react";

// Componente que exibe a lista completa de usuários com todos os dados
const ListUser = ({ data }) => {

  return (
    <div>
      {/* Cabeçalho da página de listagem */}
      <div className="header-listUser">
        <h1 className="title-listUser">Listagem Completa de Usuários</h1>
      </div>

      {/* Área onde os usuários são renderizados */}
      <div className="back-list">
        <ul className="list">
          {data.map((usuario) => (
            <li key={usuario.id} className="li-listUser">
              <div className="card-listUser">
                <p><strong>ID:</strong> {usuario.id}</p>
                <p><strong>Nome:</strong> {usuario.nome}</p>
                <p><strong>Sobrenome:</strong> {usuario.sobrenome}</p>
                <p><strong>Email:</strong> {usuario.email}</p>
                <p><strong>Identidade de Gênero:</strong> {usuario.genero}</p>
                <p><strong>Nascimento:</strong> {usuario.anoNascimento}</p>
                <p><strong>CPF:</strong> {usuario.cpf}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListUser;
