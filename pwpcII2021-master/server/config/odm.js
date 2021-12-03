//Importando biblioteca ODM
import mongoose from 'mongoose';
//Importando script para el log
import winston from 'winston';

class MongooseODM {
  //Constructor
  constructor(url) {
    this.url = url;
  }
  //Método de conexión
  async connect() {
    //Sustituyendo el sistema de promesas de mongoose por el js
    mongoose.Promise = global.Promise;
    winston.info(`Conectando a la base de datos en: ${this.url}`);
    try {
      await mongoose.connect(this.url);
      return true;
    } catch (error) {
      winston.error(
        `Error al conectarse a la base de datos en: ${error.message}`,
      );
      //Se retorna false en caso de que no se realice una conexión exitosa
      return false;
    }
  }
}
export default MongooseODM;
