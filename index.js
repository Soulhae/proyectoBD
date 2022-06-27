const app = require('./server');
const conf = require('./src/settings/configuration')
const { InsertarRegistro } = require('./src/controllers/business.controller')

const port = conf.port || 9010


app.listen(port, () => {
  console.log(`The application is connected to port: ${port}`);
});

async function Insertar(){
  const result = InsertarRegistro("El guardian de la furia" ,"Caza","Mata 3 veces al guardian Urnil y consume su alma")
}

Insertar();




