const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const { query } = require('express')


const db =mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vendas'
});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api/get', (req, res)=>{
    const sqlSelect = "SELECT id_produto, nme_produto, dsc_produto, preco_produto, DATE_FORMAT(dta_cad_produto,'%d/%m/%Y %h:%i:%s')as dta_cad_produto, DATE_FORMAT(dta_mod_produto,'%d/%m/%Y %h:%i:%s')as dta_mod_produto from tb_produto ;"
    db.query(sqlSelect, (err, result)=>{
        res.send(result);
    });
});



app.post('/api/getID', (req, res)=>{
    const newNme_produto = req.body.newNme_produto
    let test = 'teste'
    console.log(newNme_produto, test);
    const sqlSelect = "select id_produto, nme_produto, dsc_produto, preco_produto, DATE_FORMAT(dta_cad_produto,'%d/%m/%Y %h:%i:%s')as dta_cad_produto, DATE_FORMAT(dta_mod_produto,'%d/%m/%Y %h:%i:%s')as dta_mod_produto from tb_produto where nme_produto like '%" + newNme_produto + "%';"
    
    db.query(sqlSelect, (err, result)=>{
        if (err){
            console.log(err);
        } else{
            res.send(result);
            console.log(result);
        }
    });
});

app.post("/api/update", (req, res)=>{

    const nme_produto = req.body.newNme_produto
    const dsc_produto = req.body.dsc_produto
    const preco_produto = req.body.preco_produto
    const id_produto = req.body.id_produto

    const sqlInsert = "UPDATE tb_produto SET nme_produto = ?, dsc_produto = ?, preco_produto = ?, dta_mod_produto = now() WHERE id_produto = ?;"
    db.query(sqlInsert, [nme_produto, dsc_produto, preco_produto, id_produto], (err, result)=>{
        if (err){
            console.log(err);
        } else{
            console.log(result);
        }
    });
});


app.post("/api/insert", (req, res)=>{

    const nme_produto = req.body.nme_produto
    const dsc_produto = req.body.dsc_produto
    const preco_produto = req.body.preco_produto

    const sqlInsert = "INSERT INTO tb_produto (nme_produto, dsc_produto, preco_produto, dta_cad_produto, dta_mod_produto) VALUES (?, ?, ?, now(), now());"
    db.query(sqlInsert, [nme_produto, dsc_produto, preco_produto], (err, result)=>{
        if (err){
            console.log(err);
        } else{
            console.log(result);
        }
    });
});


app.listen(3001, () => {
    console.log("roda 3001");
});