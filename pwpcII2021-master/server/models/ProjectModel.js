//Importar librería mongoose
import * as mongoose from 'mongoose';
//Destructuración para obtener Squema
import { Schema } from 'mongoose';
//Creando el Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('project', ProjectSchema);
