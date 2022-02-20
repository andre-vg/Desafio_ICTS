const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const { query } = require("express");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vendas",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect =
    "SELECT id_produto, nme_produto, left(dsc_produto,100) as dsc_produto, preco_produto, DATE_FORMAT(dta_cad_produto,'%d/%m/%Y %H:%i:%s')as dta_cad_produto, DATE_FORMAT(dta_mod_produto,'%d/%m/%Y %h:%i:%s')as dta_mod_produto from tb_produto ;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/ReadCompras", (req, res) => {
  const sqlSelect =
    "select tc.id_compra, tc.total, sum(qtd_produto) as 'qtd_produtos', DATE_FORMAT(tc.dta_cad_compra,'%d/%m/%Y') as dta_cad_compra, tc.tipo_pagamento, tc.status from tb_compra tc join ta_compra_produto tcp on tc.id_compra = tcp.cod_compra group by cod_compra;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/getID", (req, res) => {
  const newNme_produto = req.body.newNme_produto;
  console.log(newNme_produto);
  const sqlSelect =
    "select id_produto, nme_produto, dsc_produto, preco_produto, DATE_FORMAT(dta_cad_produto,'%d/%m/%Y %H:%i:%s')as dta_cad_produto, DATE_FORMAT(dta_mod_produto,'%d/%m/%Y %H:%i:%s')as dta_mod_produto from tb_produto where nme_produto like '%" +
    newNme_produto +
    "%';";

  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.post("/api/ReadComprasID", (req, res) => {
  const id_compra = req.body.id_compra;
  const teste = "1";
  console.log(id_compra);
  const sqlSelect =
    "select cod_compra, nme_produto, dsc_produto, preco_produto, tcp.qtd_produto from ta_compra_produto tcp join tb_produto tp on tcp.cod_produto = tp.id_produto where cod_compra = ?;";

  db.query(sqlSelect, [id_compra], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.post("/api/delete", (req, res) => {
  const id_produto = req.body.id_produto;
  console.log(id_produto);
  const sqlSelect = "delete from tb_produto where id_produto = ?;";

  db.query(sqlSelect, [id_produto], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.post("/api/deleteCompra", (req, res) => {
  const id_compra = req.body.id_compra;
  console.log(id_compra);
  const sqlSelect = "delete from tb_compra where id_compra = ?;";

  db.query(sqlSelect, [id_compra], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.post("/api/insertCompra", (req, res) => {
  const id_produto = req.body.id_produto;
  const qtd = req.body.qtd;
  const precoTotal = req.body.precoTotal;
  console.log(id_produto);
  console.log(qtd);

  const sqlInsert =
    "INSERT INTO `vendas`.`ta_compra_produto` (`cod_compra`, `cod_produto`, `qtd_produto`) VALUES (last_insert_id(), ?, ?);";
  db.query(sqlInsert, [id_produto, qtd], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

app.post("/api/insertTBCompra", (req, res) => {
  const precoTotal = req.body.precoTotal;
  const sqlInsert =
    "INSERT INTO tb_compra(total, dta_cad_compra, tipo_pagamento, status) VALUES ( ?,now(), 'Crédito', 'teste');";
  db.query(sqlInsert, [precoTotal], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});

app.post("/api/update", (req, res) => {
  const nme_produto = req.body.newNme_produto;
  const dsc_produto = req.body.dsc_produto;
  const preco_produto = req.body.preco_produto;
  const id_produto = req.body.id_produto;

  const sqlInsert =
    "UPDATE tb_produto SET nme_produto = ?, dsc_produto = ?, preco_produto = ?, dta_mod_produto = now() WHERE id_produto = ?;";
  db.query(
    sqlInsert,
    [nme_produto, dsc_produto, preco_produto, id_produto],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.post("/api/insert", (req, res) => {
  const nme_produto = req.body.nme_produto;
  const dsc_produto = req.body.dsc_produto;
  const preco_produto = req.body.preco_produto;

  const sqlInsert =
    "INSERT INTO tb_produto (nme_produto, dsc_produto, preco_produto, dta_cad_produto, dta_mod_produto) VALUES (?, ?, ?, now(), now());";
  db.query(
    sqlInsert,
    [nme_produto, dsc_produto, preco_produto],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("roda 3001");
});
