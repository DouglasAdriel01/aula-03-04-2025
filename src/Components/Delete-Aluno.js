import { useParams, useNavigate } from "react-router-dom";

export default function DeletarAluno({ alunos, setAlunos }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    setAlunos(alunos.filter((_, index) => index !== parseInt(id)));
    navigate("/listar");
  };

  return (
    <div>
      <p>Tem certeza que deseja excluir o aluno?</p>
      <button className="bg-red-500 text-white p-2" onClick={handleDelete}>Deletar</button>
      <button className="bg-gray-500 text-white p-2 ml-2" onClick={() => navigate("/listar")}>Cancelar</button>
    </div>
  );
}