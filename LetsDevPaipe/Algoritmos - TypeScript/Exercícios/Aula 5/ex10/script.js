let num1 = Number(window.prompt(`Por favor, digite o primeiro número:`));
let num2 = Number(window.prompt(`Por favor, digite o segundo número:`));
let operação = Number(
  window.prompt(
    `Por favor, informe a operação que deseja realizar conforme orientações abaixo:\nSoma: digite 1\nSubtração: digite 2\nDivisão: digite 3\nMultiplicação: digite 4.`
  )
);

switch (operação) {
  case 1:
    window.alert(num1 + num2);
    break;
  case 2:
    window.alert(num1 - num2);
    break;
  case 3:
    window.alert(num1 / num2);
    break;
  case 4:
    window.alert(num1 * num2);
    break;
  default:
    window.alert("Dados inválidos");
    break;
}
