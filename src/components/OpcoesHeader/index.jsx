import "../OpcoesHeader/styles.css";

const opcoes = ["CATEGORIAS", "ESTANTE", "FAVORITOS"];

function OpcoesHeader() {
  return (
    // usando map para array opcoes , atribuindo cada item do array para o parametro
    // , entao criando um item da lista para cada opcao inserindo o parametro passado pelo map
    <ul className="opcoes">
      {opcoes.map((opcao) => (
        <li className="opcao">{opcao}</li>
      ))}
    </ul>
  );
}

export default OpcoesHeader;
