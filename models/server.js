const express = require('express');
const cors = require('cors');
const { repairsRouter } = require('../routes/repairs.routes');
const { usersRouter } = require('../routes/users.routes');
const { db } = require('../database/db');

//CREAMOS UNA CLASE
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.Port || 5000;

    this.paths = {
      users: '/api/v1/users',
      repairs: '/api/v1/repairs',
    };
    // llamo el metodo de conexion a la base de datos
    this.database();

    // invocamos el metodo middlewares
    this.middlewares();

    // invocamos el metodo routes
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  // RUTAS
  routes() {
    this.app.use(this.paths.repairs, repairsRouter);

    this.app.use(this.paths.users, usersRouter);
  }

  database() {
    db.authenticate()
      .then(() => console.log('Database authenticated'))
      .catch(err => console.log(err));

    //relations

    db.sync()
      .then(() => console.log('Database synced'))
      .catch(err => console.log(err));
  }
  // METODOS PARA ESCUCHAR SOLICITUDES EN EL PUERTO
  listen() {
    this.app.listen(this.port, () => {
      console.log(` Server listening on port ${this.port}`);
    });
  }
}
// EXPORTAMOS EL SERVIDOR
module.exports = Server;
