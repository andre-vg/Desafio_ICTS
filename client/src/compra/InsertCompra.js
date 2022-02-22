import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/compras.css";

function InsertCompra() {
  const [carrinho, setCarrinho] = useState([]);
  const [listaProduto, setListaProduto] = useState([]);
  const precoTotal = carrinho.reduce((a, c) => a + c.preco_produto * c.qtd, 0);

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

  const submitCompra = () => {
    if (
      window.confirm("Confirmar compra no valor de: " + precoTotal + " ?") ===
      false
    ) {
      return false;
    } else {
      axios
        .post("http://localhost:3001/api/insertTBCompra", {
          precoTotal: precoTotal,
        })
        .then(() => {
          console.log("Inserido");
        });

      for (const val of carrinho) {
        axios
          .post("http://localhost:3001/api/insertCompra", {
            id_produto: val.id_produto,
            qtd: val.qtd,
          })
          .then(() => {
            console.log("Inserido");
          });
      }
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      setListaProduto(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="linha blocked center">
        <div>
          <h1>Compras</h1>
        </div>
      </header>
      <div className="linha">
        <main className="blocked coluna-2">
          <h2>Produtos</h2>
          {listaProduto.map((val) => (
            <div className="linha alinhado">
              <div className="boxProduto">
                <h5>{val.nme_produto}</h5>
                <div>R${val.preco_produto}</div>
                <div>
                  <button
                    onClick={() => addCarrinho(val)}
                    class="btn btn-warning btn-sm"
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
        <aside className="blocked coluna-1">
          <h2>Items Carrinho</h2>
          <div>
            {carrinho.length === 0 && <div>Sem itens no carrinho.</div>}
          </div>
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
                <div className="coluna-2 total">
                  <strong>Preço Total</strong>
                </div>
                <div className="coluna-1">
                  <strong>R$ {precoTotal.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="linha">
                <div className="coluna-2">
                  <button
                    onClick={submitCompra}
                    className="btn btn-warning center"
                  >
                    <strong>Efetuar Compra</strong>
                  </button>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

export default InsertCompra;
