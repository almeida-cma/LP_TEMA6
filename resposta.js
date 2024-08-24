// Passo 1: Criação do Array
let listaDeCompras = ["pão", "leite", "ovos", "queijo", "frutas"];

// Passo 2: Adicionar Itens
listaDeCompras.push("café");
listaDeCompras.unshift("manteiga");
console.log("Lista após adições:", listaDeCompras);

// Passo 3: Remover Itens
let itemRemovido = listaDeCompras.pop();
let primeiroItemRemovido = listaDeCompras.shift();
console.log("Item removido:", itemRemovido);
console.log("Primeiro item removido:", primeiroItemRemovido);
console.log("Lista após remoções:", listaDeCompras);

// Passo 4: Modificar Itens
listaDeCompras.splice(1, 1, "chocolate");
listaDeCompras.splice(2, 1, "biscoitos", "suco");
console.log("Lista após modificações:", listaDeCompras);

// Passo 5: Visualizar a Lista
console.log("Lista final:", listaDeCompras);

// Desafio Adicional
let itemBuscado = "frutas";
let indice = listaDeCompras.indexOf(itemBuscado);
if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
} else {
    listaDeCompras.push(itemBuscado);
}
console.log("Lista após o desafio:", listaDeCompras);
