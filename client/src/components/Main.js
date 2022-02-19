import axios from "axios";
import React, { useEffect, useState } from "react";
import Produto from "./Produto";

function Main(props) {
  const { addCarrinho, listaProduto } = props;

  return (
    <main className="blocked coluna-2">
      <h3>Produtos</h3>
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
