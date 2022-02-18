import React from "react";
import Produto from "./Produto";

function Main(props) {
  const { listaProduto, addCarrinho } = props;
  return (
    <main className="blocked coluna-2">
      <h2>Produtos</h2>
      <div className="linha">
        {listaProduto.map((val) => (
          <Produto
            key={val.id_produto}
            val={val}
            addCarrinho={addCarrinho}
          ></Produto>
        ))}
      </div>
    </main>
  );
}

export default Main;
