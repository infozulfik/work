import { Component, OnInit } from '@angular/core';
import { ProjectOneService } from '../../services/project-one.service';

@Component({
  selector: 'app-loan-tab',
  templateUrl: './loan-tab.component.html',
  styleUrls: ['./loan-tab.component.css']
})
export class LoanTabComponent implements OnInit {
loan: any;

  constructor(private serivce: ProjectOneService) { }

  ngOnInit() {
    this.serivce.getLoans().subscribe(data => this.loan = data.Loans.Loan );
  }

}
