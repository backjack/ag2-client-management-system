import { Component } from '@angular/core';
import {GridOptions} from "ag-grid";

@Component({
  selector: 'app-datagrid',
  template: `
  <div style="width: 200px;">
  <ag-grid-angular #agGrid style="width: 100%; height: 200px;" class="ag-theme-fresh"
               [gridOptions]="gridOptions">
  </ag-grid-angular>
  </div>`,
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent  {

  private gridOptions: GridOptions = {};

  constructor() { 
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
        {
            headerName: "ID",
            field: "id",
            width: 100
        },
        {
            headerName: "Value",
            field: "value",
            width: 100
        },

    ];
    this.gridOptions.rowData = [
        {id: 5, value: 10},
        {id: 10, value: 15},
        {id: 15, value: 20}
    ]
}

}
