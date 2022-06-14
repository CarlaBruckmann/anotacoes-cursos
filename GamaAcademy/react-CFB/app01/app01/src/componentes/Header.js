import React from "react";
import '../App.css' //importa o css externo
import imagem1 from "./img/imagem1.jpg";

export default function Header() {
    const textoDestaque = {
        color: 'blue',
        fontSize: '15px'
    }

    
  return (
    <header className='wrapper-header'>
      <img alt="ilustração" src={imagem1} />
      <h1 style={{color: 'red', fontSize: '30px'}}>CFB Cursos</h1>
      <h2 style={textoDestaque}>Canal no youtube</h2>
      <h3 className='obs'>Cara chato, curso legal</h3>
    </header>
  );
}
//css estilo inline - h1
//css estilo incorporado - h2 
//css externo - h3