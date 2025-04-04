import { Link } from "react-router-dom";

function ListarAlunos({ alunos }) {
  return (
    <div>
      <h1 className="text-xl font-bold">Lista de Alunos</h1>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index} className="border p-2 mb-2 flex justify-between">
            {aluno.nome} - {aluno.idade} anos
            <div>
              <Link to={`/editar/${index}`} className="text-blue-500 mr-2">Editar</Link>
              <Link to={`/deletar/${index}`} className="text-red-500">Deletar</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarAlunos;