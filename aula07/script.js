// some
var empregados = [
  {nome: 'Carlos', idade: 24},
  {nome: 'Valdir', idade: 22},
  {nome: 'Barbara', idade: 21},
  {nome: 'Suzana', idade: 34},
]

function verificaIdade(empregado) {
  return empregado.idade > 20 && empregado.idade < 30;
}

let verificaEmpregado = empregados.some(verificaIdade);
console.log(verificaEmpregado);

// reduce
var numeros = [3, 5, 12, 42, 55, 11, 4]


var somarTodosOsElementos = numeros.reduce(soma, 0);
console.log(somarTodosOsElementos);

function soma(acumulador, num) {
  return acumulador + num;
} 

// classe
class Ponto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `[x=${this.x}, y=${this.y}]`;
  }
}

class PintarPonto extends Ponto {
  static default() {
    return new PintarPonto(0, 0, 'azul');
  }

  constructor(x, y, cor) {
    super(x, y);
    this.cor = cor;
  }

  toString() {
    return `[x=${this.x}, y=${this.y}, cor=${this.cor}]`;
  }
}

console.log("" + (new Ponto(12, 4)));
console.log("" + (new PintarPonto(12, 4, 'azul')));