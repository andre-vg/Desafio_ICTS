const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')


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
    const sqlSelect = "select * from tb_produto;"
    db.query(sqlSelect, (err, result)=>{
        res.send(result)
    });
})


app.post("/api/insert", (req, res)=>{

    const nme_produto = req.body.nme_produto
    const dsc_produto = req.body.dsc_produto
    const preco_produto = req.body.preco_produto

    const sqlInsert = "INSERT INTO tb_produto (nme_produto, dsc_produto, preco_produto, dta_cad_produto, dta_mod_produto) VALUES (?, ?, ?, now(), now());"
    db.query(sqlInsert, [nme_produto, dsc_produto, preco_produto], (err, result)=>{
        console.log(result);
    });
});


app.listen(3001, () => {
    console.log("roda 3001");
});