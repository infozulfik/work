import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dmt-form',
  templateUrl: './dmt-form.component.html',
  styleUrls: ['./dmt-form.component.css']
})
export class DmtFormComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
