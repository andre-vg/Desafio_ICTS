import React, { useState } from "react";
import Axios from "axios";
import "./styles.css";

function Insert() {
  const [nme_produto, setnme_produto] = useState("");
  const [dsc_produto, setdsc_produto] = useState("");
  const [preco_produto, setpreco_produto] = useState("");

  const submitProduto = () => {
    if (
      window.confirm("Deseja criar o produto: " + nme_produto + " ?") === false
    ) {
      return false;
    } else {
      Axios.post("http://localhost:3001/api/insert", {
        nme_produto: nme_produto,
        dsc_produto: dsc_produto,
        preco_produto: preco_produto,
      }).then(() => {
        window.alert("inserido");
      });
    }
  };

  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <div className="centerdiv">
        <h1>Adicionar</h1>
        <form className="crud-form">
          <label>Nome produto: </label>
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
          <br />
          <label>Descrição produto: </label>
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
          <br />
          <label>Preço : </label>
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
          <br />
          <button
            onClick={submitProduto}
            type="submit"
            className="btn btn-outline-success col-5"
          >
            Enviar
          </button>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Insert;
