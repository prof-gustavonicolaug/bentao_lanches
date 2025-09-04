// ================================
// Teste de exemplo - Bentão Lanches
// ================================

/*
Este é o formato de testes utilizando JEST:

describe("Descrição do conjunto de testes", () => {
  test("Descrição do teste específico", () => {
    // código do teste
    expect(resultado).toBe(valorEsperado);
  });
});

----------------
--- describe ---
----------------
-> A função describe serve para agrupamento de testes relacionados.
    - Ela não executa o teste em si, mas organiza visualmente e ajuda a dar contexto aos testes no terminal.
    - É opcional, mas recomendado quando tem mais de um teste ou quer deixar o código mais legível.
    - Quando vamos fazer vários testes, podemos, dentro de describe, criar variáveis globais para os testes (setup)

------------
--- test ---
------------
-> A função test é a responsável pela execução do teste em si. Ela pode ser dividida em duas partes principais:
    - primeiro temos a ação do teste, ou seja, a chamada da função que será testada
    - segundo temos a comparação do resultado da função com um valor esperado
*/

// Importa a função que vamos testar
import { calcularTotal } from "../utils/carrinho";

// Agrupa testes relacionados ao carrinho
describe("Exemplo de Teste de Carrinho", () => {

  // ================================
  // Setup: cenário de teste
  // ================================
  // Aqui definimos o carrinho inicial
  const carrinhoBase = [
    { nome: "X-Burger", preco: 10 },
    { nome: "Batata Frita", preco: 5 },
  ];

  // ================================
  // Teste único: calcular total
  // ================================
  test("Deve calcular o total de um carrinho simples", () => {
    // Ação: chama a função que estamos testando
    const total = calcularTotal(carrinhoBase);

    // Verificação: compara resultado obtido com o esperado
    expect(total).toBe(15); // 10 + 5 = 15
  });
});
