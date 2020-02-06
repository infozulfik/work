import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';
import { DmtService } from 'src/app/dmt.service';

@Component({
  selector: 'app-dmt-tree',
  templateUrl: './dmt-tree.component.html',
  styleUrls: ['./dmt-tree.component.css']
})
export class DmtTreeComponent implements OnInit {
  selectedNode: any;
  data: TreeNode[];
  selectedFiles: TreeNode[];
  datas: any;
  cols: any[];

  constructor(private dmtService: DmtService) { }

  ngOnInit() {
    this.data = [
        {
            "label": "DMT",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
            "children": [
              {"label": "Employees", "data": "Expenses Document"},
              {"label": "Selected resource", "data": "Resume Document"}
          ]
        }
    ];
  }

  getEmployee() {
    this.dmtService.getEmpDatas().subscribe(data => {
      this.datas = data;
    });
    this.dmtService.getEmpCols().subscribe(data => {
      this.cols = data;
    });
  }

  getSelectedResources() {
    this.dmtService.getSelDatas().subscribe(data => {
      this.datas = data;
    });
    this.dmtService.getSelCols().subscribe(data => {
      this.cols = data;
    });
  }

  nodeSelect(event) {
    this.selectedNode = event.node.label;
    if (this.selectedNode === 'Employees') {
      this.getEmployee();
      console.log(this.cols);
    } else if (this.selectedNode === 'Selected resource') {
      this.getSelectedResources();
      console.log(this.cols);
    }
}
}
