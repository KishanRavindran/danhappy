
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const empSchema = new Schema({
   empname: String,
   empmailid: String
})

const empModel = mongoose.model('emp', empSchema, 'emp');
export default empModel;
