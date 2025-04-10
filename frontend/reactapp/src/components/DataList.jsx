import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DataList = ({ data, setData }) => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  // Remove o usuário da base de dados e atualiza o estado local
  const handleDelete = async (id) => {
    const confirmacao = window.confirm("Deseja realmente remover este cadastro?");
    if (!confirmacao) return;

    try {
      await fetch(`http://localhost:8800/${id}`, {
        method: "DELETE",
      });
      setData((anterior) => anterior.filter((usuario) => usuario.id !== id));
    } catch (erro) {
      console.error("Erro ao remover o usuário:", erro);
    }
  };

  // Contador secreto de cliques para ativar o easter egg
  const handleEasterEgg = () => {
    setClickCount((anterior) => {
      const novo = anterior + 1;
      if (novo >= 10) {
        window.open("https://www.youtube.com/watch?v=i-S8kdVompo", "_blank");
      }
      return novo;
    });
  };

  return (
    <div>
      <div className="header">
        <h1 className="title">Painel de Usuários</h1>
        <div className="btn">
          <button className="btn-header" onClick={() => navigate("/list")}>Ver Todos</button>
          <button className="btn-header" onClick={() => navigate("/add")}>Novo Cadastro</button>
        </div>
      </div>

      <div className="back-list">
        <ul className="list">
          {data.map((item) => (
            <li key={item.id} className="li-list">
              <div className="card">
                <div className="left">
                  <div className="info"><span className="item-info">ID:</span> {item.id}</div>
                  <div className="info"><span className="item-info">Nome:</span> {item.nome}</div>
                  <div className="info"><span className="item-info">CPF:</span> {item.cpf}</div>
                </div>
                <div className="right">
                  <button className="btn-list-1" onClick={() => navigate(`/details/${item.id}`)}>Detalhes</button>
                  <button className="btn-list-2" onClick={() => navigate(`/edit/${item.id}`)}>Alterar</button>
                  <button className="btn-list-3" onClick={() => handleDelete(item.id)}>Excluir</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bottom">
        NESTOR GARRAZA SONDAHL
        <br />
        <button
          onClick={handleEasterEgg}
          style={{
            marginTop: "10px",
            fontSize: "0.75rem",
            background: "none",
            color: clickCount >= 9 ? "#dc3545" : "#6f42c1",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
            opacity: 0.6,
            transition: "color 0.3s ease",
          }}
        >
          toque aqui 👁️ ({clickCount})
        </button>
      </div>
    </div>
  );
};

export default DataList;
