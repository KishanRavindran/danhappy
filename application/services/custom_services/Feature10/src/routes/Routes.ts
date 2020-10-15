import { Request, Response, NextFunction } from "express";
import { empController } from '../controller/empController';


export class Routes {
    private emp: empController = new empController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/emp/:id').get(this.emp.GpGetNounById);
app.route('/emp/get/update').put(this.emp.GpSearchForUpdate);
app.route('/emp').put(this.emp.GpUpdate);
app.route('/emp').get(this.emp.GpGetAllValues);
app.route('/emp').post(this.emp.GpCreate);
app.route('/emp/:id').delete(this.emp.GpDelete);
app.route('/emp/get/search').get(this.emp.GpSearch);
     }

}