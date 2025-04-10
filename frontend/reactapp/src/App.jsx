import "./App.css";
import DataList from "./components/DataList";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import UserDetails from "./pages/UserDetails";
import ListUser from "./pages/ListUser";

function App() {
  const [users, setUsers] = useState([]); // Estado principal com a lista de usuários

  // Recupera os dados da API
  const loadUsers = async () => {
    try {
      const response = await fetch("http://localhost:8800");
      const result = await response.json();
      setUsers(result); // Atualiza os dados no estado
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  };

  // Carregamento inicial dos usuários
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataList data={users} setData={setUsers} />} />
        <Route path="/list" element={<ListUser data={users} setData={setUsers} />} />
        <Route path="/add" element={<AddUser onSaved={loadUsers} />} />
        <Route path="/edit/:id" element={<EditUser onSaved={loadUsers} />} />
        <Route path="/details/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
