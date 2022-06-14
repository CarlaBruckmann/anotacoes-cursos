/*
Exercício 4

Você deverá criar um código com dois enumeradores e mostrar o valores deles na tela.

Um enumerador deve contar os dias da semana: Lembrando que domingo é o dia 1 e sábado é o dia 7.

O outro enumerador deve representar a dificuldade de um jogo e o peso que essa dificuldade tem:
	“Easy” 		tem peso 10
	“Medium” 	tem peso 40
	“Hard” 		tem peso 90
 */

enum DayOfWeek {
	Sunday = 1,
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
}
console.log(DayOfWeek)

enum gameDifficulty {
	Easy = 10,
	Medium = 40,
	Hard = 90,
}
console.log(gameDifficulty)