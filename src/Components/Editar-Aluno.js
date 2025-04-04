import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditarAluno({ alunos, setAlunos }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const aluno = alunos[id];
  const [nome, setNome] = useState(aluno.nome);
  const [idade, setIdade] = useState(aluno.idade);

  const handleEdit = () => {
    const novosAlunos = [...alunos];
    novosAlunos[id] = { nome, idade };
    setAlunos(novosAlunos);
    navigate("/listar");
  };

  return (
    <form className="flex flex-col" onSubmit={(e) => { e.preventDefault(); handleEdit(); }}>
      <input className="border p-2 mb-2" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input className="border p-2 mb-2" type="number" value={idade} onChange={(e) => setIdade(e.target.value)} required />
      <button className="bg-green-500 text-white p-2" type="submit">Salvar</button>
    </form>
  );
}