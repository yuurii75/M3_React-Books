import { Link } from "react-router-dom";

const Boteos = () => {
  return (
    <div className="botoeslivros">
        <Link to="/adicionar">
          <button id="botaoamarelo"> ADICIONAR LIVRO </button>
        </Link>
        <Link to="/editar">
          <button id="botaoamarelo"> EDITAR LIVRO </button>
        </Link>
        <Link to="/remover">
          <button id="botaovermelho"> REMOVER LIVRO </button>
        </Link>
    </div>
  );
};

export default Boteos;