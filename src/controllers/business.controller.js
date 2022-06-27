const request = require('request');
const { InsertRegistros } = require('../database/db.dataaccess');
const conf = require('../settings/configuration');
const business = {}

business.InsertarRegistro = async(nombre, categoria, requisito) =>{
    return new Promise(async (resolve, reject) => {
        try {
            const result = await InsertRegistros(nombre, categoria, requisito);
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    })
}
module.exports = business;