let info = window.prompt(
  "Por favor, digite F para Feminino ou M para Masculino"
);

if (info == "f" || info == "F") {
  window.alert(`Sexo: Feminino.`);
} else if (info == "m" || info == "M") {
  window.alert(`Sexo: Masculino.`);
} else {
  window.alert(`Sexo Inválido.`);
}
