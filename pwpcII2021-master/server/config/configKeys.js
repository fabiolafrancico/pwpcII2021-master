//Importar paquete DotEnv
import dotenv from 'dotenv';

//Cargar variables de entorno
dotenv.config();

//Exportar valores de configuración
export default {
  homeUrl: `${process.env.APP_URL}:${process.env.PORT}`,
  port: process.env.PORT,
  ip: process.env.IP,
  databaseUrl: process.env.DATABASE_URL,
};
