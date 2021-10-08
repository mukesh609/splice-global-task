import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] = [{
    accountNo: 1000,
    description: "ABB",
    accountType: "Saving",
    filter: "General"
  },
  {
    accountNo: 1000,
    description: "ABB",
    accountType: "Saving",
    filter: "General"
  },
  {
    accountNo: 1000,
    description: "ABB",
    accountType: "Saving",
    filter: "General"
  },
  {
    accountNo: 1000,
    description: "ABB",
    accountType: "Saving",
    filter: "General"
  },
  {
    accountNo: 1000,
    description: "ABB",
    accountType: "Saving",
    filter: "General"
  },
  {
    accountNo: 1000,
    description: "ABB",
    accountType: "Saving",
    filter: "General"
  },
  {
    accountNo: 1000,
    description: "ABB",
    accountType: "Saving",
    filter: "General"
  },
  {
    accountNo: 1000,
    description: "ABB",
    accountType: "Saving",
    filter: "General"
  },
  {
    accountNo: 1000,
    description: "ABB",
    accountType: "Saving",
    filter: "General"
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
