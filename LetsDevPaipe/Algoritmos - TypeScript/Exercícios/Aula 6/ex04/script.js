let num = window.prompt("Por favor, digite um número.");
for (let i = 1; i <= 10; i++) {
  let res = num * i;
  if (res % 2 == 0) {
    document.write(`${num} x ${i} = ${res}<br>`);
  }
}
