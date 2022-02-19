import React from "react";

function Produto(props) {
  const { val, addCarrinho } = props;
  return (
    <div>
      <h5>{val.nme_produto}</h5>
      <div>R${val.preco_produto}</div>
      <div>
        <button onClick={() => addCarrinho(val)} class="btn btn-warning btn-sm">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default Produto;
