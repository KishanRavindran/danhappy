import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EdidelscrenService } from './edidelscren.service';



@Component({
  selector: 'app-edidelscren',
  templateUrl: './edidelscren.component.html',
  styleUrls: ['./edidelscren.component.scss'],
})
export class EdidelscrenComponent implements OnInit {

queryId: string;
emp = {
   empname: '',
   empmailid: ''
};

  constructor(
private activatedRoute: ActivatedRoute,
private edidelscrenService: EdidelscrenService
  ) { }

  ngOnInit() {
    this.activatedRoute
 .queryParams
 .subscribe(params => {
 this.queryId = params.id;
 this.GpUpdate();
});
this.GpGetNounById();
  }

GpGetNounById() {
 this.edidelscrenService.GpGetNounById(this.queryId)
  .subscribe(
    data => {
       console.log('successfully get the data by id --- ', data);
       this.emp = data;
    },
    error => {
       console.log('cannot able to get the data using its id--- ', error);
    }
    );
}
GpUpdate() {
 this.edidelscrenService.GpUpdate(this.emp)
  .subscribe(
    data => {
 this.emp.empname = '';

 this.emp.empmailid = '';

       console.log('data updated successfully --- ', data);
    },
    error => {
       console.log('cannot able to update the data --- ', error);
    }
    );
}
GpDelete() {
 this.edidelscrenService.GpDelete(this.queryId)
  .subscribe(
    data => {
       console.log('data deleted successfully --- ', data);
    },
    error => {
       console.log('cannot able to delete the data --- ', error);
    }
    );
}

}