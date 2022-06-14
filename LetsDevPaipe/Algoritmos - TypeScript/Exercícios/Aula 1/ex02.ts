/* 
Exercício 2

Neste exercício você deverá criar um software que gere uma carta de intenção de contratação. Ela segue o molde a seguir. Onde existem os elementos entre colchetes, você deverá inserir os dados que o usuário digitar. Você pode utilizar quantos comandos achar necessários.

Modelo de carta de intenção de contratação:

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
CARTA DE INTENÇÃO DE CONTRATAÇÃO

A empresa Let’s Dev Soluções Educacionais, inscrita no CNPJ sob o número 50.167.508/0001-57, com sede à Rua das Hortênsias, número 12345, Bairro Centro, Porto Alegre - RS, declara para os devidos fins que tem a intenção de contratar o(a) Sr(a) [NOME DA PESSOA QUE SER CONTRATADA], inscrito(a) no CPF sob o número [CPF DA PESSOA A SER CONTRATADA] e da CTPS número [NÚMERO DA CARTEIRA DE TRABALHO], para desempenhar o cargo [INFORMAR O CARGO QUE A PESSOA IRÁ TER] com início das atividades em [DATA PREVISTA PARA INÍCIO].

Porto Alegre, março de 2022.

João Cândido Amaral
Diretor de Educação - Let’s Dev

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
*/

let informations : string[] = ["Carla Bruckmann", "123.456.789-10", "12345678910", "Desenvolvedora FrontEnd", "01/03/2022"]
console.log(`Modelo de carta de intenção de contratação:\nCARTA DE INTENÇÃO DE CONTRATAÇÃO\n\nA empresa Let’s Dev Soluções Educacionais, inscrita no CNPJ sob o número 50.167.508/0001-57, com sede à Rua das Hortênsias, número 12345, Bairro Centro, Porto Alegre - RS, declara para os devidos fins que tem a intenção de contratar o(a) Sr(a) ${informations[0]}, inscrito(a) no CPF sob o número ${informations[1]} e da CTPS número ${informations[2]}, para desempenhar o cargo ${informations[3]} com início das atividades em ${informations[4]}.\n
Porto Alegre, março de 2022\n\nJoão Cândido Amaral\nDiretor de Educação - Let’s Dev `)
