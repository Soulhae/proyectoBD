const mysql = require('mysql');
const database_context = require('./context');
const dbLayer = {}

dbLayer.InsertRegistros = async(nombre, categoria, requisito) =>{
    return new Promise(async (resolve, reject) => {
        try {
            const context = await database_context.getConnection();
            console.log(context)
            context.query(`INSERT INTO mision ( nombre, categoria, requisito) VALUES('${nombre}','${categoria}','${requisito}')`, 
            function (error, results, fields) {
                if (error){
                    console.log('Ha ocurrido un error: ', error);
                    reject(error)
                } 
                console.log('The solution is: ', results);
                resolve(results);
              });
        } catch (error) {
            console.log('Ha ocurrido una excepcion: ',error)
            reject(error);
        }
    });
}

module.exports = dbLayer;


