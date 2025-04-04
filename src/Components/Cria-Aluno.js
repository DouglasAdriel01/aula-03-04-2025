import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CriarAluno({ setAlunos }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/alunos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, idade }),
      });

      const data = await response.json();
      if (response.ok) {
        setAlunos((prev) => [...prev, data]);
        navigate("/listar");
      } else {
        console.error("Erro ao criar aluno", data);
      }
    } catch (error) {
      console.error("Erro na requisição", error);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input className="border p-2 mb-2" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input className="border p-2 mb-2" placeholder="Idade" type="number" value={idade} onChange={(e) => setIdade(e.target.value)} required />
      <button className="bg-blue-500 text-white p-2" type="submit">Cadastrar</button>
    </form>
  );
}