import { Request, Response } from 'express';
import { empService } from '../service/empService';
import { CustomLogger } from '../config/Logger'
let emp = new empService();

export class empController {
    
    constructor() { }
    
    public (req: Request, res: Response) {
emp.(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into empController.ts: ');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from empController.ts: ');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
emp.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into empController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from empController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
emp.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into empController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from empController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
emp.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into empController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from empController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
emp.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into empController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from empController.ts: GpCreate');
    })}
public GpDelete(req: Request, res: Response) {
emp.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into empController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from empController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
emp.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into empController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from empController.ts: GpSearch');
    })}


}