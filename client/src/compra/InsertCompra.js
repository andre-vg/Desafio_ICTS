import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../rotas/styles.css";
function InsertCompra() {
  const [nme_produto, setnme_produto] = useState("");
  const [dsc_produto, setdsc_produto] = useState("");
  const [preco_produto, setpreco_produto] = useState("");
  const [listaProduto, setListaProduto] = useState([]);

  return <div>Insert</div>;
}

export default InsertCompra;
