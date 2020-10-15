import { Request, Response } from 'express';
import {empDao} from '../dao/empDao';
import { CustomLogger } from '../config/Logger'
let emp = new empDao();

export class empService {
    
    constructor() { }
    
    public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into empService.ts: GpGetNounById')
     const  empId = req.params.id;
     emp.GpGetNounById(empId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from empService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into empService.ts: GpSearchForUpdate')
     const  empData = req.body;
     emp.GpSearchForUpdate(empData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from empService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into empService.ts: GpUpdate')
     const  empData = req.body;
     emp.GpUpdate(empData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from empService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into empService.ts: GpGetAllValues')
     
     emp.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from empService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into empService.ts: GpCreate')
     const  empData = req.body;
     emp.GpCreate(empData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from empService.ts: GpCreate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into empService.ts: GpDelete')
     const  empId = req.params.id;
     emp.GpDelete(empId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from empService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into empService.ts: GpSearch')
     const  empData = req.query;
     emp.GpSearch(empData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from empService.ts: GpSearch')
         callback(response);
         });
    }


}