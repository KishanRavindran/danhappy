import { Component, OnInit } from '@angular/core';

import { CreatescrenService } from './createscren.service';



@Component({
  selector: 'app-createscren',
  templateUrl: './createscren.component.html',
  styleUrls: ['./createscren.component.scss'],
})
export class CreatescrenComponent implements OnInit {

emp = {
   empname: '',
   empmailid: ''
};

  constructor(
private createscrenService: CreatescrenService
  ) { }

  ngOnInit() {
    
  }

GpCreate() {
 this.createscrenService.GpCreate(this.emp)
  .subscribe(
    data => {
       console.log('data created successfully');
this.emp.empname = '';

this.emp.empmailid = '';

    },
    error => {
       console.log('cannot able to create the data');
    }
    );
}

}