import express from "express";
import bodyParser from "body-parser";
import mysql  from "mysql";
import myConnection from "express-myconnection";

const optionBD= {
    host: 'mysql-projetbenabas.alwaysdata.net',
    user: '311910_fruit',
    password: '31&sfaz*6435sfF5sfef*é',
    port: 3306,
    database: 'projetbenabas_fruits',
    multipleStatements: true,
    connectionLimit: 10
};

// demander pour garder sql 

const port =process.env.PORT || 3000;
const app = express();
app.use(myConnection(mysql,optionBD,'pool'));
app.use("/", express.static("public"));
app.use( express.json( { limit: '30mb' } ) );
app.use( express.urlencoded( { limit: '30mb', extended: true } ) );
// 
app.route('/register')
.post(function(req, res) {
    const b= req.body;
    const data = {
        login: b.login,
        mdp: b.mdp
    }
    const sql=`insert into user (login, mdp) VALUES (?, ?)`;
    //console.log(sql);
    connectDB(req,res,sql,data);

});
app.route('/login')
.get( function(req, res) {
    const sql=`select * from user`;
    
    connectDB(req, res,sql);
})
.post(function(req, res) {
    const b= req.body;
    const data = {
        login: b.login,
        mdp: b.mdp
    }
    const sql=`select admin from user where login= ? and mdp= ?`;
    //console.log(sql);
    succed(req,res,sql,data);

});

app.route('/fruit/:Id')
.get( async function(req, res) {
    const data = {
        id: req.params.Id
    }
    const sql=`select * from fruit where id= ?`;
    connectDB(req, res,sql,data);
})
.put(function(req, res) {
    const b= req.body;
    let sql;
    let data;
    if(b.verif!=undefined){
        data = {
            verif: b.verif,
            id: req.params.Id
        };
        sql=`UPDATE fruit SET verif = ? WHERE id = ?`;
    
    }else{
        data = {
            nom: b.nom,
            description: b.description,
            lien_img:b.lien_img,
            poid:b.poid,
            id: req.params.Id
        };
        sql=`UPDATE fruit SET nom = ?, description = ?,lien_img =?, poid = ? WHERE id = ?`;
    }
    connectDB(req, res,sql,data);
})
.delete(function(req, res) {
    const data = {
        id: req.params.Id
    };
    const sql=`DELETE FROM fruit WHERE id = ?`;
    connectDB(req, res,sql,data);
});

app.route('/fruit')
.post(function(req, res) {
    const b= req.body;
    let sql;
    let data;
    if(b.nom==undefined){
        data = {
            verif: b.verif
        };
        sql=`select * from fruit where verif= ?`;
    }else{
        data = {
            nom: b.nom,
            description: b.description,
            lien_img:b.lien_img,
            poid:b.poid,
            verif:b.verif
        }
        sql=`INSERT INTO fruit (nom, description, lien_img, poid, verif) 
        VALUES (?,?,?,?,?)`;
    }
    connectDB(req, res,sql,data);
});


function succed(req,res,sql,data){

    req.getConnection((erreur,connection)=>{
        if(erreur){
            return res.status(404).json({error:erreur,succed:false});
        }else{
            connection.query(sql,Object.values(data),(erreur,resultat)=>{
                if(erreur){
                    return res.status(404).json({error:erreur,succed:false});
                }else{
                    let t;
                 //   console.log(resultat);
                    if(resultat.length==0){
                        t={succed:false,admin:false};
                    }else{
                        t={succed:true,admin:resultat[0].admin};
                    }
                 //   console.log(t)
                    return res.json(t); 
                }
            });
        }
    });

}

function connectDB(req,res,sql,data){
    req.getConnection((erreur,connection)=>{
        if(erreur){
            return res.status(404).json({error:erreur});
        }else{
            connection.query(sql,Object.values(data),(erreur,resultat)=>{
                if(erreur){
                    return res.status(404).json({error:erreur});
                }else{
                    return res.json(resultat); 
                }
            });
        }
    });
}
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});