import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';
import { DmtService } from 'src/app/dmt/service/dmt.service';

@Component({
  selector: 'app-dmt-tree',
  templateUrl: './dmt-tree.component.html',
  styleUrls: ['./dmt-tree.component.css']
})
export class DmtTreeComponent implements OnInit {
  selectedNode: any;
  data: TreeNode[];
  selectedFiles: TreeNode[];
  jsonDatas: any;
  datas: any;
  cols: any[];

  constructor(private dmtService: DmtService) { }

  ngOnInit() {
    this.data = [
      {
        label: 'DMT',
        data: 'Documents Folder',
        expandedIcon: 'fa fa-folder-open',
        collapsedIcon: 'fa fa-folder',
        children: [
          { label: 'Employees', data: 'Expenses Document' },
          { label: 'Selected resource', data: 'Resume Document' }
        ]
      }
    ];
    this.dmtService.getDatas().subscribe(data => this.jsonDatas = data);
  }

  getEmployee() {
    this.datas = this.jsonDatas.empDatas;
    this.cols = this.jsonDatas.empCols;
  }

  getSelectedResources() {
    this.datas = this.jsonDatas.selDatas;
    this.cols = this.jsonDatas.selCols;
  }

  nodeSelect(event) {
    this.selectedNode = event.node.label;
    if (this.selectedNode === 'Employees') {
      this.getEmployee();
    } else if (this.selectedNode === 'Selected resource') {
      this.getSelectedResources();
    }
  }
}
