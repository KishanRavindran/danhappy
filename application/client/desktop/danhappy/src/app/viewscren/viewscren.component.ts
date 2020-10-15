import { Component, OnInit } from '@angular/core';

import { ViewscrenService } from './viewscren.service';



@Component({
  selector: 'app-viewscren',
  templateUrl: './viewscren.component.html',
  styleUrls: ['./viewscren.component.scss'],
})
export class ViewscrenComponent implements OnInit {

columnDefs = [
{headerName: 'Name', field: 'empname'},
{headerName: 'MailId', field: 'empmailid'}];
emp = {
   empname: '',
   empmailid: ''
};
gridApi: any;
gridColumnApi: any;
rowSelection = 'single';
defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
paginationPageSize = 10;
rowData: any = [];

  constructor(
private viewscrenService: ViewscrenService
  ) { }

  ngOnInit() {
    this.GpGetAllValues();
  }

onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}
GpGetAllValues() {
 this.viewscrenService.GpGetAllValues()
  .subscribe(
    data => {
       console.log('successfully get all data --- ', data);
       this.rowData = data;
    },
    error => {
       console.log('cannot able to get all data --- ', error);
    }
    );
}

}