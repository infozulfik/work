import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DmtService {

empDatas = [
    {
      name: 'karthikeyan',
      experiance: '0.5',
      designation: 'Systems Engineer',
      account: 'Citi Private Bank',
      project: 'Flex to Angular Migration'
    },
    {
      name: 'Manikandan',
      experiance: '4',
      designation: 'Senior Systems Engineer',
      account: 'Citi Private Bank',
      project: 'Flex to Angular Migration'
    },
    {
      name: 'Kanniga',
      experiance: '4',
      designation: 'Senior Systems Engineer',
      account: 'Citi Private Bank',
      project: 'Flex to Angular Migration'
    },
    {
      name: 'Josephine',
      experiance: '4',
      designation: 'Senior Systems Engineer',
      account: 'Citi Private Bank',
      project: 'Flex to Angular Migration'
    },
    {
      name: 'Anju',
      experiance: '4',
      designation: 'Senior Systems Engineer',
      account: 'Citi Private Bank',
      project: 'Flex to Angular Migration'
    },
    {
      name: 'Shruthi',
      experiance: '0.5',
      designation: 'Systems Engineer',
      account: 'Citi Private Bank',
      project: 'Flex to Angular Migration'
    },
    {
      name: 'Vaisnavi',
      experiance: '0.5',
      designation: 'Systems Engineer',
      account: 'Citi Private Bank',
      project: 'Flex to Angular Migration'
    },
    {
      name: 'Ayyappan',
      experiance: '4',
      designation: 'Senior Systems Engineer',
      account: 'Citi Private Bank',
      project: 'Flex to Angular Migration'
    }
  ];

empCols = [
    { field: 'name', header: 'Name' },
    { field: 'experiance', header: 'Experiance' },
    { field: 'designation', header: 'Designation' },
    { field: 'account', header: 'Account' },
    { field: 'project', header: 'Project' }
];

selDatas = [
  {
    name: 'karthikeyan',
    experiance: '0.5',
    designation: 'Systems Engineer'
  },
  {
    name: 'Manikandan',
    experiance: '4',
    designation: 'Senior Systems Engineer'
  },
  {
    name: 'Kanniga',
    experiance: '4',
    designation: 'Senior Systems Engineer'
  },
  {
    name: 'Josephine',
    experiance: '4',
    designation: 'Senior Systems Engineer'
  },
  {
    name: 'Anju',
    experiance: '4',
    designation: 'Senior Systems Engineer'
  },
  {
    name: 'Shruthi',
    experiance: '0.5',
    designation: 'Systems Engineer'
  },
  {
    name: 'Vaisnavi',
    experiance: '0.5',
    designation: 'Systems Engineer'
  },
  {
    name: 'Ayyappan',
    experiance: '4',
    designation: 'Senior Systems Engineer'
  }
];

selCols = [
  { field: 'name', header: 'Name' },
  { field: 'experiance', header: 'Experiance' },
  { field: 'designation', header: 'Designation' }
];

constructor() { }

getEmpDatas(): Observable<any> {
  return of(this.empDatas);
}

getEmpCols(): Observable<any> {
  return of(this.empCols);
}

getSelDatas(): Observable<any> {
  return of(this.selDatas);
}

getSelCols(): Observable<any> {
  return of(this.selCols);
}

}
