import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //importa o arquivo

function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
      {/* O que será carregado */}
    </React.StrictMode>,
    document.getElementById("root")
    // Onde será carregado
  );
}
setInterval(tick, 1000);//atualiza a pagina (somente o que foi alterado - relogio)
