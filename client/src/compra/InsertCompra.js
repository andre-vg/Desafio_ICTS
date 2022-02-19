import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../components/compras.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Basket from "../components/Basket";
import axios from "axios";

function InsertCompra() {
  const [carrinho, setCarrinho] = useState([]);
  const [listaProduto, setListaProduto] = useState([]);

  const addCarrinho = (val) => {
    const existe = carrinho.find((x) => x.id_produto === val.id_produto);
    if (existe) {
      setCarrinho(
        carrinho.map((x) =>
          x.id_produto === val.id_produto
            ? { ...existe, qtd: existe.qtd + 1 }
            : x
        )
      );
    } else {
      setCarrinho([...carrinho, { ...val, qtd: 1 }]);
    }
  };

  const removeCarrinho = (val) => {
    const existe = carrinho.find((x) => x.id_produto === val.id_produto);
    if (existe.qtd === 1) {
      setCarrinho(carrinho.filter((x) => x.id_produto !== val.id_produto));
    } else {
      setCarrinho(
        carrinho.map((x) =>
          x.id_produto === val.id_produto
            ? { ...existe, qtd: existe.qtd - 1 }
            : x
        )
      );
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      setListaProduto(response.data);
    });
  });

  return (
    <div className="Compra">
      <Header></Header>
      <div className="linha">
        <Main addCarrinho={addCarrinho} listaProduto={listaProduto}></Main>
        <Basket
          addCarrinho={addCarrinho}
          removeCarrinho={removeCarrinho}
          carrinho={carrinho}
        ></Basket>
      </div>
    </div>
  );
}

export default InsertCompra;
