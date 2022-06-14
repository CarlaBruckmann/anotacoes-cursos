/*
Exercício 1

Neste exercício, utilizando o comando console.log(), você deverá criar a seguintes “figuras”:

Figura 1

 /\_/\
( o.o )
 > ^ <

Figura 2
          __     __
         /  \~~~/  \
   ,----(     ..	)
  /      \__ 	__/
 /|         (\  |(
^ \   /___\  /\ |
   |__|   |__| -
*/

const figure1 = [" \/\\_\/\\","\( \o\.\o \)", " \> \^ \<"]
figure1.forEach(function(linha) {
   console.log(linha)
});

const figure2 = ["          __     __", "         /  \\~~~/  \\", "   ,----(     ..	)", "  /      \\__ 	__/", " /|         (\\  |(", "^ \\   /___\\  /\\ |", "   |__|   |__| -"]
figure2.forEach(function(linha) {
   console.log(linha)
});

