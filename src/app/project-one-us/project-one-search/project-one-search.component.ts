import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-project-one-search',
  templateUrl: './project-one-search.component.html',
  styleUrls: ['./project-one-search.component.css']
})
export class ProjectOneSearchComponent implements OnInit {

  searchType: SelectItem[];

  constructor() { }

  ngOnInit() {
    this.searchType = [
      {label: 'Accounts', value: null}
  ];
  }

}
