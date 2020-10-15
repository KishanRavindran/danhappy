import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SearchscrenService } from './searchscren.service';



@Component({
  selector: 'app-searchscren',
  templateUrl: './searchscren.component.html',
  styleUrls: ['./searchscren.component.scss'],
})
export class SearchscrenComponent implements OnInit {

emp = {
   empname: '',
   empmailid: ''
};
columnDefs = [
{headerName: 'Name', field: 'empname'},
{headerName: 'MailId', field: 'empmailid'}];
gridApi: any;
gridColumnApi: any;
rowSelection = 'single';
defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
paginationPageSize = 10;
rowData: any = [];

  constructor(
private router: Router,
private searchscrenService: SearchscrenService
  ) { }

  ngOnInit() {
    this.GpSearch();
  }

GpRoute(queryId) {
this.router.navigate(['/edidelscren'], { queryParams: { 'id': queryId } });
}
onSelectionChanged(event) {
  const selectedRows = this.gridApi.getSelectedRows();
  this.GpRoute(selectedRows[0]._id);
}
onGridReady(params) {
this.gridApi = params.api;
this.gridApi.sizeColumnsToFit();
this.gridColumnApi = params.columnApi;
}
GpSearch() {
 this.searchscrenService.GpSearch(this.emp)
  .subscribe(
    data => {
       console.log('data searched successfully --- ', data);
       this.rowData = data;
    },
    error => {
       console.log('cannot able to search the data --- ', error);
    }
    );
}

}