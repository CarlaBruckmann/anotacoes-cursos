//<Dados canal = '' youtube = '' curso = ''/> ATRIBUTOS (podem ser nomes diferentes)-> podem ser variaveis ex: curso
import React from "react";
import Dados from "./Dados";

export default function Main() {
    //função
    const cnl = () => {
        return 'CBF'
    }
    //variavel
    const crs = 'React.js'

    //função - verificar Dados.js
    const somar= (v1,v2) => {
        return v1+v2
    }
    return (
        <main>
            <h2>Curso de React</h2>
            <img alt="ilustração" src="/img/imagem2.jpg" />
            <Dados canal={cnl} youtube="Link canal" curso={crs} somar={somar}/>
        </main>
    );
}
