import React from "react";

function Produto(props) {
  const { val, addCarrinho } = props;
  return (
    <div>
      <h4>{val.nme_produto}</h4>
      <div>R${val.preco_produto}</div>
      <div>
        <button onClick={() => addCarrinho(val)}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

export default Produto;
