import { useState } from "react";
import { calcularTotal, aplicarDesconto, adicionarItem, removerItem } from "./utils/carrinho";

export default function App() {
  // Lista inicial de produtos disponíveis
  const produtosDisponiveis = [
    { nome: "X-Bentão", preco: 10 },
    { nome: "X-Bentão Tudo", preco: 12 },
    { nome: "Batata Frita", preco: 5 },
    { nome: "Refrigerante", preco: 7 },
    { nome: "Milkshake", preco: 8 },
  ];

  const [carrinho, setCarrinho] = useState([]);

  const total = calcularTotal(carrinho);
  const totalComDesconto = aplicarDesconto(total, 10);

  // Adicionar produto ao carrinho
  const handleAdicionar = (produto) => {
    setCarrinho(adicionarItem(carrinho, produto));
  };

  // Remover produto do carrinho pelo nome
  const handleRemover = (nomeProduto) => {
    setCarrinho(removerItem(carrinho, nomeProduto));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Bentão Lanches</h1>

      <h2>Produtos Disponíveis:</h2>
      <ul>
        {produtosDisponiveis.map((produto, i) => (
          <li key={i}>
            {produto.nome} - R$ {produto.preco}{" "}
            <button onClick={() => handleAdicionar(produto)}>Adicionar</button>
          </li>
        ))}
      </ul>

      <h2>Carrinho:</h2>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <ul>
          {carrinho.map((item, i) => (
            <li key={i}>
              {item.nome} - R$ {item.preco}{" "}
              <button onClick={() => handleRemover(item.nome)}>Remover</button>
            </li>
          ))}
        </ul>
      )}

      <p><strong>Total:</strong> R$ {total}</p>
      <p><strong>Total com 10% de desconto:</strong> R$ {totalComDesconto.toFixed(2)}</p>
    </div>
  );
}
