import { Axios } from "axios";
import React from "react";

function Basket(props) {
  const { carrinho, addCarrinho, removeCarrinho } = props;
  const precoTotal = carrinho.reduce((a, c) => a + c.preco_produto * c.qtd, 0);

  const submitCompra = () => {
    Axios.post("http://localhost:3001/api/insertCompra", {
      precoTotal: carrinho.precoTotal,
    }).then(() => {
      alert("inserido");
    });
  };

  return (
    <aside className="blocked coluna-1">
      <h2>Items Carrinho</h2>
      <div>{carrinho.length === 0 && <div>Sem itens no carrinho.</div>}</div>
      {carrinho.map((item) => (
        <div key={item.id_produto} className="linha">
          <div className="coluna-2">{item.nme_produto}</div>
          <div className="coluna-2">
            <button
              onClick={() => addCarrinho(item)}
              className="btn btn-primary btn-sm"
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => removeCarrinho(item)}
              className="btn btn-danger btn-sm"
            >
              -
            </button>
          </div>
          <div className="coluna-2">
            {item.qtd} x R$ {item.preco_produto.toFixed(2)}
          </div>
        </div>
      ))}
      {carrinho.length !== 0 && (
        <>
          <hr></hr>
          <div className="linha">
            <div className="coluna-2">
              <strong>Preço Total</strong>
            </div>
            <div className="coluna-1">
              <strong>R$ {precoTotal.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="linha">
            <div className="coluna-2">
              <button onClick={submitCompra} className="btn btn-warning center">
                <strong>Efetuar Compra</strong>
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}

export default Basket;
