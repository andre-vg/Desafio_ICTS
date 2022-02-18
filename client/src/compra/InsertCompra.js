import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../components/compras.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Basket from "../components/Basket";
function InsertCompra() {
  const [nme_produto, setnme_produto] = useState("");
  const [dsc_produto, setdsc_produto] = useState("");
  const [preco_produto, setpreco_produto] = useState("");
  const [listaProduto, setListaProduto] = useState([]);

  return (
    <div className="Compra">
      <Header></Header>
      <div className="linha">
        <Main></Main>
        <Basket></Basket>
      </div>
    </div>
  );
}

export default InsertCompra;
