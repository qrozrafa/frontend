/* exercicio 01 */
/* 10 + 15 = 25 (number)
“10” + 2 = "102" (string)
“10” * 2 = 20 (number)
“10” / 3 = 3.333..(number)
“10” % 3 = 1 (number)
10 + true = 11 (number)
10 == ”10” = true (boolean)
10 === “10” = false (boolean)
10 < 11 = true (boolean)
10 > 12 = false (boolean)
10 <= 10.1 = false (boolean)
10 > 9.99 = true (boolean)
10 != “dez” = true (boolean)
10 + true = 11 (number)
“dez” + true = "deztrue" (string)
10 + false = 10 (number)
10 * false = 0 (number)
true + true = 2 (number)
10++ = 11 (number)
10-- = 9 (number)
1 & 1 = 1 (number)
1 & 0 = 0 (number)
0 & 0 = 0 (number) 
1 & 0 = 0 (number)
0 / 1 = 0 (number)
5 + 5 == 10 = true (boolean)
“5” + ”5” == 10 = false (boolean)
“5” * 2 > 9 = true (boolean)
(10 + 10) * 2 = 40 (number)
10 + 10 * 2  = 30 (number)
*/ 


/* variaveis cores */
var branco = "preto";
var preto = "cinza";
var cinza = "branco";

/* variaveis carro */
var carro = "preto";
var valor = 30000;
var prestacao = 750;

/* teste das cores */
console.log(branco == "branco");
console.log(branco == cinza);
console.log(carro === branco);
 
/* if */
var cavalo = carro == "preto" ? "cinza" : "marron";
console.log(cavalo);

/* prestação do carro */
var entrada = 3000;
if(entrada = 3000)
	var soma = (valor - 3000) / prestacao;
else
	soma = valor / prestacao;

console.log(soma + ' prestações');

/* somando as string */
var palavra = (branco + preto + cinza);
console.log(palavra.length + ' caracteres');


/* exercicio media dos alunos*/

/* lista aluno */
var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
    [8, 8, 8, 8],
    [6, 6, 6, 6, 6]
]

var nota = 0;
/* calculo da media de cada aluno na array */
for (var i = 0; i < alunos.length; i++){

    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + parseInt(i+1));
    console.log("Notas: " + notasAluno);

    for( c = 0; c < notasAluno.length; c++ ){
        nota += notasAluno[c];
    }

    media = nota / 4;

    if(media >= 7) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }

    console.log("Media: " + media + " - " + resultado);

}
