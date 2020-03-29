const express = require('express');
const cors = require ('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Method  HTTP:
 * 
 * GET: Pesquisar/Listar informacao do Backend
 * POST : Criar Informacao do Backend
 * PUT: Alterar informacao do Backend
 * DELETE: Apagar uma informacao do Backend
 */

 /**
  * Tipos de parametros
  * 
  * Query Params: Parametros nomeadados enviados nas apos "?" (Filtros, paginacao)
  * Route Params: Parametros utilizads  para identificar recursos  
  * Request Body: Corpo da requisicao utilizado para criar ou alterar recursos. 
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Tres formas de comunicar com o SQL
    * 
    * Driver: SELECT * FROM  users
    * Query Builder: table('users').select('*').where()
    */



