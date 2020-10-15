import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class SearchscrenService {

  constructor(
private http: HttpClient,
private sharedService: SharedService
  ) { }

GpSearch(emp: any): Observable<any> {
 const temp = [];
 const objectKeyPair = Object.entries(emp);
 objectKeyPair.forEach((element, index) => {
   if (element[1]) {
      temp.push(`${element[0]}=${element[1]}`);
   }
  });
 return this.http.get(this.sharedService.DESKTOP_API + `/emp/get/search${temp.length > 0 ? `?${temp.join('&')}` : ''}`);
}

}