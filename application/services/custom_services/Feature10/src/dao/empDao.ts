import * as mongoose from 'mongoose';
import empModel from '../models/emp';
import { CustomLogger } from '../config/Logger'


export class empDao {
    private emp = empModel;
    constructor() { }
public GpGetNounById(empId, callback){
new CustomLogger().showLogger('info', 'Enter into empDao.ts: GpGetNounById')

this.emp.findById(empId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from empDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(empData, callback){
new CustomLogger().showLogger('info', 'Enter into empDao.ts: GpSearchForUpdate')

this.emp.findOneAndUpdate({ _id: empData._id }, empData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from empDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(empData, callback){
new CustomLogger().showLogger('info', 'Enter into empDao.ts: GpUpdate')

this.emp.findOneAndUpdate({ _id: empData._id }, empData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from empDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into empDao.ts: GpGetAllValues')

this.emp.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from empDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(empData, callback){
new CustomLogger().showLogger('info', 'Enter into empDao.ts: GpCreate')
let temp = new empModel(empData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from empDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(empId, callback){
new CustomLogger().showLogger('info', 'Enter into empDao.ts: GpDelete')

this.emp.findByIdAndRemove(empId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from empDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(empData, callback){
new CustomLogger().showLogger('info', 'Enter into empDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(empData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.emp.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from empDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}


}