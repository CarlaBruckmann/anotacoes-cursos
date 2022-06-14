let turno = String(
  window.prompt(
    `Por favor, informe o turno em que você estuda conforme orientações abaixo:\nMatutino: digite M\nVespertino: digite V\nNoturno: digite N`
  )
);

if (turno == "M" || turno == "m") {
  window.alert(`Bom dia!`);
} else if (turno == "V" || turno == "v") {
  window.alert(`Boa tarde!`);
} else if (turno == "N" || turno == "n") {
  window.alert(`Boa Noite!`);
} else {
  window.alert(`Valor inválido!`);
}
