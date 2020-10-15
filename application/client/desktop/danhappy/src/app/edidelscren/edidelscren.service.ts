import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class EdidelscrenService {

  constructor(
private http: HttpClient,
private sharedService: SharedService
  ) { }

GpGetNounById(empId: string): Observable<any> {
 return this.http.get(this.sharedService.DESKTOP_API + `/emp/${empId}`);
}
GpUpdate(emp: any): Observable<any> {
 return this.http.put(this.sharedService.DESKTOP_API + '/emp', emp);
}
GpDelete(empId: string): Observable<any> {
 return this.http.delete(this.sharedService.DESKTOP_API + `/emp/${empId}`);
}

}