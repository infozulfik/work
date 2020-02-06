import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dmt-table',
  templateUrl: './dmt-table.component.html',
  styleUrls: ['./dmt-table.component.css']
})
export class DmtTableComponent implements OnInit {
  @Input() selectedNode: any;
  @Input() datas: any;
  clickedData: any;
  header: any;
  @Input() cols: any[];
  @Input() selectedColumns: any[];

  constructor() { }

  ngOnInit() {
  }

  clickedOnData(name: any) {
    this.clickedData = this.datas.filter((data: any) => {
      if (data.name === name) {
        return data;
      }
    });
    this.clickedData = this.clickedData[0];
    console.log(name);
    console.log(this.selectedColumns);
    console.log(this.header);
    console.log(this.clickedData);
  }

}
