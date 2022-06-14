//---------------PRIMEIRO EXEMPLO: expressões, imgs e variaveis:------------------//
//JSX
//partes de JS no HTML, precisam ser inseridas com chaves {} expressão

/*import React from "react"; // importação da biblioteca react
import imagem1 from "./componentes/img/imagem1.jpg";

export default function App() {
  const canal = () => {
    return "CBF Cursos";
  };
  const curso = "Curso de React";
  return (
    <section>
      <header>
        <p>{'Canal: ' + canal()}</p>
        <p>{curso}</p>
      </header>
      <div>
        <img alt='ilustração' src={imagem1} />
        <img alt='ilustração' src="/img/imagem2.jpg" />
      </div>
    </section>
  );
}*/
// export default App() //exportação do App() -> pode estar lá em cima.

//------------SEGUNDO EXEMPLO: Criar componentes externos - state: ----------//
//verificar na pasta componentes -> criados lá e importados pra cá.

//<Dados canal = '' youtube = '' curso = ''/> ATRIBUTOS (podem ser nomes diferentes)-> podem ser variaveis ex: curso

import React, {useState} from "react";
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import Relogio from "./componentes/Relogio"



export default function App() {
  const [num, setNum] = useState(10);
  //state - num=nome do estado -> setName=função que vai alterar esse estado

  return (
    <>
      <Relogio/>
      <p>Valor do state num: {num} </p>
      <button onClick={()=>setNum(num+10)}>Clicar Soma 10</button>
      <Header />
      <Main />
    </>
  );
}
