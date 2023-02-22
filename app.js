require('dotenv').config();

// IMPORTAMOS EL MODELO
const Server = require('./models/server');

// INSTANCIAMOS EL SERVIDOR O LA CLASE
const server = new Server();

// PONGO A ESCUCHAR MI SERVIDOR
server.listen();
