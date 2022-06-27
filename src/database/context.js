var mysql = require('mysql');
const databaseContext = {}

const sql = mysql.createConnection({
    host     : '168.232.165.245',
    user     : 'ici0031',
    password : 'BD6576',
    database : 'ici0031'
  });

databaseContext.getConnection = async () => {
  try {
    sql.connect()
    return sql;
  } catch (error) {
    console.log(error)
  }
    
}

module.exports = databaseContext



