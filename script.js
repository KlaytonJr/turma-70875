// // console.log("Isso é uma mensagem")
// // console.log(`Isso é uma mensagem`) // Template string

// // Declaração
// var aluno; // undefined -> não foi definido

// // console.log("aluno -> ", aluno);

// // Declarando e atribuindo
// var cliente = "Klayton"; // string
// let quantidade = 10; // inteiro
// var preco = 50.5; // float
// var ehNovo = true; // boolean
// var mensagem = "Então ele disse 'abra a porta'"; // string

// // console.log("cliente -> ", cliente)
// // console.log("quantidade -> ", quantidade)

// // Atribuindo
// quantidade = 25;

// // console.log("quantidade -> ", quantidade)
// // console.log(mensagem)

// // console.log(`Meu cliente é ${cliente} e comprou ${quantidade} celulares e o total ficou ${preco * quantidade}`)

// const PI = 3.1415;

// // console.log(PI)

// let mensagem2 = "Ola pessoal. " + cliente + " ! Você tem " + quantidade;
// // console.log(mensagem2);

// const idade = "60"; // texto

// // texto é igual a numero ?
// // if (Number(idade) === 60) {
// //     console.log("60 anos")
// // }

// /**
//  * < e <=
//  * > e >=
//  * == -> compara valor
//  * === -> comparar valor e tipo
//  *
//  *
//  */

// // if (idade <= 12) { // true
// //     console.log("É uma criança");
// // } else if (idade <= 18) {
// //     console.log("É um adolescente");
// // } else if (idade <= 60) {
// //     console.log("É um adulto");
// // } else {
// //     // Quando não satisfas a condição
// //     console.log("É um idoso");
// // }

// // const igualdade = (umNumero == 5)
// // if (igualdade) {
// //     console.log('é igual')
// // }

// // const peso = 150
// // const altura = 1.60

// // const IMC = peso / (altura ** 2)

// // if (IMC < 18.5) {
// //     console.log('MAGREZA');
// // } else if (IMC >= 18.5 && IMC <= 24.9) {
// //     console.log('NORMAL');
// // } else if (IMC <= 29.9) {
// //     console.log('SOBREPESO');
// // } else if (IMC <= 39.9) {
// //     console.log('OBESIDADE');
// // } else {
// //     console.log('OBESIDADE GRAVE');
// //     // Capturar as medidas percentual de gordura
// //     const percentual = 30;

// //     if (percentual > 30) {
// //         console.log("Positivo")
// //     } else {
// //         console.log("Falso-Positivo")
// //     }
// // }

// // console.log("Final")

// // var nomeUsuario = prompt("Inserir nome de usuário"); // pedir entrada do usuário
// // // função => nomeDaFuncao()

// // if (nomeUsuario == "") {
// //     alert("O nome de usuário não foi inserido");
// // }
// // else {
// //     alert("Nome de usuário inserido: " + nomeUsuario);
// // }

// // const peso = prompt("Inserir peso do paciente"); // 57.6 -> 57
// // const altura = prompt("Inserir altura do paciente");

// // console.log(typeof peso, " -> ", peso)
// // console.log(typeof parseFloat(peso), " -> ", parseFloat(peso))
// // console.log(typeof parseInt(peso), " -> ", parseInt(peso))

// // // parseFloat -> transforma em real  // "50.5" -> 50.5
// // // parseInt -> força a ser inteiro  // "1.77" -> 1

// // const IMC = parseFloat(peso) / (parseFloat(altura) ** 2)

// // console.log(IMC)

// // if (IMC < 18.5) {
// //     console.log('MAGREZA');
// // } else if (IMC >= 18.5 && IMC <= 24.9) {
// //     console.log('NORMAL');
// // } else if (IMC <= 29.9) {
// //     console.log('SOBREPESO');
// // } else if (IMC <= 39.9) {
// //     console.log('OBESIDADE');
// // } else {
// //     console.log('OBESIDADE GRAVE');
// //     // Capturar as medidas percentual de gordura
// //     const percentual = 30;

// //     if (percentual > 30) {
// //         console.log("Positivo")
// //     } else {
// //         console.log("Falso-Positivo")
// //     }
// // }

// // var numeroRecebido = prompt("Inserir um numero de um a cinco"); // pedir entrada do usuário

// // if (numeroRecebido >= 1 && numeroRecebido <= 5) {
// //     if (numeroRecebido == "1" || numeroRecebido == "um" ) {
// //         alert("O numero inserido foi 1.");
// //     }else if (numeroRecebido == "2" || numeroRecebido == "dois" ) {
// //         alert("O numero inserido foi 2.");
// //     }else if (numeroRecebido == "3" || numeroRecebido == "três" ) {
// //         alert("O numero inserido foi 3.");
// //     }else if (numeroRecebido == "4" || numeroRecebido == "quatro" ) {
// //         alert("O numero inserido foi 4.");
// //     }else {
// //         alert("O numero inserido foi 5.");
// //     }
// // } else {
// //     alert("O numero inserido não válido");
// // }

// // let numero = prompt("Insira um numero de 1 a 5:");
// // if (numero == 1) {
// //     alert("O número inserido foi um.");
// // } else if (numero == 2) {
// //     alert("O número inserido foi dois.");
// // } else if (numero == 3) {
// //     alert("O número inserido foi três.");
// // } else if (numero == 4) {
// //     alert("O número inserido foi quatro");
// // } else if (numero == 5) {
// //     alert("O número inserido foi cinco");
// // } else {
// //     alert("Numero incorreto.")
// // }

// // let numero = prompt("Digite um número de 1 a 5:");

// // numero = parseInt(numero);

// // if (numero === 1) {
// //     alert("Um");
// // } else if (numero === 2) {
// //     alert("Dois");
// // } else if (numero === 3) {
// //     alert("Três");
// // } else if (numero === 4) {
// //     alert("Quatro");
// // } else if (numero === 5) {
// //     alert("Cinco");
// // } else {
// //     alert("Número inválido! Digite um número entre 1 e 5.");
// // }

// // var input = prompt("Insira um número de 1 a 5: ");

// // if (input >= 1 && input <= 5) {
// //     if (input == 1) {
// //         alert("Um");
// //     } else if (input == 2) {
// //         alert("Dois");
// //     } else if (input == 3) {
// //         alert("Três");
// //     } else if (input == 4) {
// //         alert("Quatro");
// //     } else if (input == 5) {
// //         alert("Cinco");
// //     } else {
// //         alert("Número inválido");
// //     }
// // }else{
// //     alert("Número inválido");
// // }

// // let numero = prompt ("escolha um número de 1 a 5")
// // if (numero == 1) {alert ("o número digitado foi UM");}
// // else if (numero == 2) {alert ("o número digitado foi DOIS");}
// // else if (numero == 3) {alert ("o número digitado foi TRÊS");}
// // else if (numero == 4) {alert ("o número digitado foi QUATRO");}
// // else if (numero == 5) {alert ("o número digitado foi CINCO");}
// // else {alert ("o número digitado é INVÁLIDO");}

// // != e !==

// // const numero = 12;

// // const ehDez = (numero === 10)
// // const ehMenorQueVinte = (numero < 20)

// // console.log("ehDez -> ", ehDez)
// // console.log("ehMenorQueVinte -> ", ehMenorQueVinte)

// // console.log("ehDez && ehMenorQueVinte -> ", ehDez && ehMenorQueVinte)
// // console.log("ehDez && ehMenorQueVinte -> ", ehDez || ehMenorQueVinte)

// // if (ehDez && ehMenorQueVinte) {
// //     console.log("Número legal")
// // } else {
// //     console.log("Número fora padrão")
// // }

// // const ehMulher = true
// // const gestante = false
// // const menorDeIdade = false

// // console.log("gestante -> ", gestante)
// // console.log("!gestante -> ", !gestante)

// // if (ehMulher && !gestante && !menorDeIdade) {
// //     console.log(`Pode fazer o exame\nliberado`)
// // } else {
// //     console.log("Não pode fazer")
// // }

// // function verificaFamilia30(numero) {
// //     if (numero >= 30 && numero < 40) {
// //         console.log(numero, "-> Família numérica do 30");
// //     } else {
// //         console.log(numero, "-> Família não identificada");
// //     }
// // }

// // verificaFamilia30(30)
// // verificaFamilia30(35)
// // verificaFamilia30(20)
// // verificaFamilia30(50)

// // Variaveis chumbadas
// // const peso = 150;
// // const altura = 1.6;

// // let IMC;

// // calculaIMC(50, 1.34);
// // mostrarResultado();

// // calculaIMC(70, 1.57);
// // mostrarResultado();

// // calculaIMC(90, 1.89);
// // mostrarResultado();

// // calculaIMC(120, 1.9);
// // calculaIMC(35, 2.1);

// // function mostrarResultado() {
// //   console.log(IMC);
// // }

// // // Função para calcular
// // // Declaração -> criação
// // function calculaIMC(peso, altura) {
// //   IMC = peso / altura ** 2;
// // }

// // Função mostrar o resultado
// // if (IMC < 18.5) {
// //   console.log("MAGREZA");
// // } else if (IMC >= 18.5 && IMC <= 24.9) {
// //   console.log("NORMAL");
// // } else if (IMC <= 29.9) {
// //   console.log("SOBREPESO");
// // } else if (IMC <= 39.9) {
// //   console.log("OBESIDADE");
// // } else {
// //   console.log("OBESIDADE GRAVE");
// //   // Capturar as medidas percentual de gordura
// //   const percentual = 30;

// //   if (percentual > 30) {
// //     console.log("Positivo");
// //   } else {
// //     console.log("Falso-Positivo");
// //   }
// // }

// // function ehImparOuPar() {
// //   // Receba número do usuário
// //   // Prompt
// //   let numero = prompt("Digite um número: ");

// //   numero = parseInt(numero); // Extraindo o inteiro e transformar o texto em número

// //   // Verificar se é par
// //   let resultado;

// //   // 4 / 2 = 2 e resto = 0 => é par
// //   // 3 / 2 = 1 e resto = 1

// //   if (numero % 2 === 0) {
// //     resultado = "PAR";
// //   } else {
// //     resultado = "IMPAR";
// //   }
// //   // Operação ternária
// //   //   alert(numero % 2 === 0 ? 'PAR' : 'IMPAR');

// //   // Exibir resultado
// //   alert(resultado);
// // }

// // verificarDigitoParOuImpar();

// // function pegarNumero() {
// //   let numero = prompt("Digite um número: "); // "7.5"
// //   numero = parseInt(numero); // 7 (número)
// //   return numero; // 7
// // }

// // function ehParOuImpar(numero) {
// //   if (numero % 2 === 0) {
// //     return "PAR";
// //   } else {
// //     return "IMPAR";
// //   }

// //   // let resultado;

// //   // if (numero % 2 === 0) {
// //   //     resultado = "PAR";
// //   // } else {
// //   //     resultado = "IMPAR";
// //   // }

// //   // return resultado;
// // }

// // function verificarDigitoParOuImpar() {
// //   const numero = pegarNumero();

// //   const resultado = ehParOuImpar(numero);

// //   // Exibir resultado
// //   alert(resultado);
// // }

// // function verificarDigitoMaiorQue10() {
// //   const numero = pegarNumero();

// //   const resultado = maiorQue10(numero);

// //   // Exibir resultado
// //   alert(resultado);
// // }

// // function maiorQue10(numero) {
// //   return numero > 10;
// // }

// // verificarDigitoMaiorQue10();

// // function unirPalavras(palavra1, palavra2, palavra3 = "legal") {
// //   return palavra1 + " " + palavra2 + " -> " + palavra3;
// // }

// // const resultado1 = unirPalavras("Olá", "Coder"); // -> “Olá Coder”
// // console.log(resultado1);

// // console.log(unirPalavras("Cursando", "JS")); // -> “Cursando JS”
// // unirPalavras("Klayton", "Junior", "Professor");

// // function calculadora(primeiroNumero, segundoNumero, operacao) {
// //   if (operacao == "+") {
// //     return primeiroNumero + segundoNumero;
// //   } else if (operacao == "-") {
// //     return primeiroNumero - segundoNumero;
// //   } else if (operacao == "*") {
// //     return primeiroNumero * segundoNumero;
// //   } else if (operacao == "/") {
// //     return primeiroNumero / segundoNumero;
// //   } else {
// //     return 0;
// //   }
// // }
// // console.log(calculadora(10, 5, "*"));

// // FUNÇÃO SIMPLES
// // function subtrair(numero1, numero2) {
// //   if (numero1 >= numero2) {
// //     return numero1 - numero2;
// //   } else {
// //     return numero2 - numero1;
// //   }
// // }

// // FUNÇÃO ANÔNIMA
// // const subtrair = function (numero1, numero2) {
// //   if (numero1 >= numero2) {
// //     return numero1 - numero2;
// //   } else {
// //     return numero2 - numero1;
// //   }
// // };

// // FUNÇÃO SETA
// // const subtrair = (numero1, numero2) => numero1 - numero2;

// // console.log(subtrair(6, 2));
// // console.log(subtrair(4, 8));
// // console.log(subtrair(4, 4));

// // let lista = [2, 4, 6];

// // function dobrar(numero) {
// //   return numero * 2;
// // }

// // const dobro = lista.map(dobrar);
// // console.log(dobro);

// // const canetaBic = {
// //   material: "Transparente",
// //   valor: "Barata",
// //   cor: "Azul",
// // };

// // const canetaStabilo = {
// //   material: "Opaco",
// //   valor: "Cara",
// //   cor: "Roxa",
// // };

// const banana = {
//   nome: "Banana",
//   cor: "Amarela",
//   peso: 150,
//   tipo: "fruta",
//   status: function () {
//     console.log("Banana");
//   },
// };

// banana.cor = "Roxa";

// banana.status();

// console.log(banana);

// function fruta(nome, cor, peso) {
//   // Escopo da função
//   this.cor = cor;
//   this.nome = nome;
//   this.peso = peso;
//   this.tipo = "fruta";
// }

// const maca = new fruta("Maça", "Vermelha", 100);
// const pera = new fruta("Pêra", "Verde", 110);

// console.log(maca);
// console.log(pera);

// function usuario(nome, email, senha) {
//   this.id = Math.random() * 1000; // UUID
//   this.nome = nome;
//   this.email = email;
//   this.senha = senha;
//   this.session = false;

//   this.login = function () {
//     console.warn("Login feito por ", this.nome);
//     this.session = true;
//   };

//   this.logout = function () {
//     console.error("Logout feito");
//     this.session = false;
//   };
// }

// const user1 = new usuario("Klayton", "klayton@test.com", "123456");
// const user2 = new usuario("Leticia", "leticia@test.com", "123456");

// console.log(user1);

// user1.login();
// user1.logout();

// user2.login();
// user2.telefone = "83 1234-1234";

// for (const propriedade in user1) {
//   console.log("------------------------------------");
//   console.log("propriedade -> ", propriedade);
//   console.log(`valor -> user1[${propriedade}] -> `, user1[propriedade]);
// }
// console.log("---------------$$$$$----------------");

// // let pessoa = {
// //     nome: "Mariana",
// //     idade: 25,
// //     informacoes: function () {
// //         return this.nome + " tem " + this.idade + " anos"
// //     }
// // }
// // console.log(pessoa.informacoes())

// // function informacoes() {
// //   return pessoa.nome + " tem " + pessoa.idade + " anos";
// // }
// // console.log(informacoes())

// let texto = "Olá, Coder";

// //Propriedade: Comprimento da texto.
// console.log(texto.length);

// //Método: Converter para minúscula.
// console.log(texto.toLowerCase());

// //Método: Converter para maiúscula.
// console.log(texto.toUpperCase());

// const lista = ["Melancia", "Macarrão", "Pizza", "Hamburguer"];

// console.log(lista);
// console.log(lista.length);

// for (let index = 0; index < lista.length; index++) {
//   console.log("index -> ", index);
//   console.log(lista[index]);
// }

// lista.push("Salada");
// lista.unshift("Morango");
// console.log(lista);

// lista.pop();
// lista.shift();

// console.log(lista);

// console.log(lista.join(","));

// const reversa = [...lista, "Hotpocket"];

// reversa.reverse();

// console.log(lista);
// console.log(reversa);

// const produtos = [
//   {
//     nome: "Camisa",
//     preco: 150,
//     tamanhos: ["P", "M", "G", "GG"],
//     setor: {
//       endereco: "Rua tal",
//       galpao: 32,
//       corredor: 5,
//     },
//   },
//   {
//     nome: "Bermuda",
//     preco: 150,
//     tamanhos: ["P", "M", "G"],
//   },
//   {
//     nome: "Calça",
//     preco: 150,
//     tamanhos: ["G", "GG"],
//   },
// ];

// console.log(produtos[0].nome);
// console.log(produtos[0].setor.endereco);
// console.log(produtos[0].tamanhos[1]);

// for (const produto of produtos) {
//   console.log(produto.preco, produto.nome);
// }

// for (const item of lista) {
//   console.log(item);
// }

// class Carro {
//   constructor(marca, modelo, ano) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.ano = ano;
//   }

//   // Método da classe
//   exibirInfo() {
//     return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
//   }
// }

// const carro1 = new Carro("Toyota", "Corolla", 2022);
// console.log(carro1.exibirInfo()); // "Toyota Corolla, Ano: 2022"

// class Ferrari extends Carro {
//   constructor(marca, modelo, ano, preco) {
//     super(marca, modelo, ano);
//     this.preco = preco;
//   }
// }

// const ferrari = new Ferrari("Spider", "Ferrari", 2025, 1000);
// console.log(ferrari);
// console.log(ferrari.exibirInfo());

function Carro(nome, ano) {
  this.nome = nome;
  this.ano = ano;
}

const carro = new Carro("Ferrari", 2024);
console.log(carro);

class ContaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    // this.saldo = this.saldo + valor;
    this.saldo += valor;
  }

  sacar(valor) {
    this.saldo -= valor;
  }

  extrato() {
    return `Olá ${this.titular}, seu saldo é R$ ${this.saldo}`;
  }
}

const conta1 = new ContaBancaria("Klayton");
conta1.depositar(150);
conta1.depositar(100);
console.log(conta1.extrato());

conta1.saldo = 50;

conta1.sacar(50);
console.log(conta1.extrato());
