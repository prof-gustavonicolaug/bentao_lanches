
// ============================
// Funções do Bentão Lanches
// ============================

// Calcula o total do carrinho
// carrinho = [{nome: "X-Burger", preco: 10}, ...]
// retorna um número (total)
export function calcularTotal(carrinho) {
  return carrinho.reduce((total, item) => total + item.preco, 0);
}
// Exemplo:
// calcularTotal([{nome: "X-Burger", preco: 10}, {nome: "Batata Frita", preco: 5}])
// retorna 15

// Aplica desconto percentual
// total = número, percentual = número (ex: 10 para 10%)
// retorna total com desconto
export function aplicarDesconto(total, percentual) {
  return total * (1 - percentual / 100);
}
// Exemplo:
// aplicarDesconto(100, 20) => 80

// Conta quantos itens com o mesmo nome existem no carrinho
// carrinho = array de itens, nomeItem = string
export function contarItens(carrinho, nomeItem) {
  return carrinho.filter(i => i.nome === nomeItem).length;
}
// Exemplo:
// contarItens([{nome: "X-Burger", preco: 10}, {nome: "X-Burger", preco: 10}], "X-Burger")
// retorna 2

// Adiciona um item ao carrinho
// carrinho = array de itens, item = {nome, preco}
// retorna novo array com o item adicionado
export function adicionarItem(carrinho, item) {
  return [...carrinho, item];
}
// Exemplo:
// adicionarItem([], {nome: "Refrigerante", preco: 7})
// retorna [{nome: "Refrigerante", preco: 7}]

// Remove um item pelo nome
// carrinho = array de itens, nomeItem = string
// retorna novo array sem o item removido
export function removerItem(carrinho, nomeItem) {
  return carrinho.filter(i => i.nome !== nomeItem);
}
// Exemplo:
// removerItem([{nome: "X-Burger", preco: 10}, {nome: "Batata Frita", preco: 5}], "X-Burger")
// retorna [{nome: "Batata Frita", preco: 5}]

