import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./styles.css";

function Insert() {
  const [nme_produto, setnme_produto] = useState("");
  const [dsc_produto, setdsc_produto] = useState("");
  const [preco_produto, setpreco_produto] = useState("");
  const [listaProduto, setListaProduto] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setListaProduto(response.data);
    });
  }, []);

  const submitProduto = () => {
    Axios.post("http://localhost:3001/api/insert", {
      nme_produto: nme_produto,
      dsc_produto: dsc_produto,
      preco_produto: preco_produto,
    }).then(() => {
      alert("inserido");
    });
  };

  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <h1>CRUD</h1>
      <form className="crud-form">
        <input
          type="text"
          name="nme_produto"
          placeholder="Nome do Produto"
          onChange={(e) => {
            setnme_produto(e.target.value);
          }}
          required
        />
        <br />
        <textarea
          type="text"
          className="dsc_produto_box"
          name="dsc_produto"
          placeholder="Descrição max(2000)"
          onChange={(e) => {
            setdsc_produto(e.target.value);
          }}
          required
        />
        <br />
        <input
          type="text"
          name="preco_produto"
          placeholder="0000.00"
          onChange={(e) => {
            setpreco_produto(e.target.value);
          }}
          required
        />
        <br />
        <button
          onClick={submitProduto}
          type="submit"
          className="btn btn-outline-dark"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Insert;
