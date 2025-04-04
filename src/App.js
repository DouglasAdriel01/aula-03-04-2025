import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CriarAluno from "./Components/Criar-Aluno";
import EditarAluno from "./Components/Editar-Aluno";
import DeletarAluno from "./Components/Deletar-Aluno";
import ListarAlunos from "./Components/Listar-Alunos";

function App() {
  const [alunos, setAlunos] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/criar" element={<CriarAluno setAlunos={setAlunos} />} />
        <Route path="/listar" element={<ListarAlunos alunos={alunos} />} />
        <Route path="/editar/:id" element={<EditarAluno alunos={alunos} setAlunos={setAlunos} />} />
        <Route path="/deletar/:id" element={<DeletarAluno alunos={alunos} setAlunos={setAlunos} />} />
      </Routes>
    </Router>
  );
}

export default App;