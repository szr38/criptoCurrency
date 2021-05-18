import { Component, OnInit, AfterViewInit, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { graphicInterface } from 'src/app/shared/redux-graphic/graphic.reducer';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() dataTable: graphicInterface;

  displayedColumns: string[] = ['name', 'price', 'rise'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.dataTable);
    let temp: table[] = [];
    const riseA = this.dataTable.criptoA.amounts.length > 2 ? this.dataTable.criptoA.amounts[this.dataTable.criptoA.amounts.length - 1] - this.dataTable.criptoA.amounts[this.dataTable.criptoA.amounts.length - 2] : 0;
    const riseB = this.dataTable.criptoB.amounts.length > 2 ? this.dataTable.criptoB.amounts[this.dataTable.criptoB.amounts.length - 1] - this.dataTable.criptoB.amounts[this.dataTable.criptoB.amounts.length - 2] : 0;
    const riseC = this.dataTable.criptoC.amounts.length > 2 ? this.dataTable.criptoC.amounts[this.dataTable.criptoC.amounts.length - 1] - this.dataTable.criptoC.amounts[this.dataTable.criptoC.amounts.length - 2] : 0;
    temp = [{
      name: "criptoA",
      price: this.dataTable.criptoA.amounts[this.dataTable.criptoA.amounts.length - 1],
      rise: riseA
    },
    {
      name: "criptoB",
      price: this.dataTable.criptoB.amounts[this.dataTable.criptoB.amounts.length - 1],
      rise: riseB
    },
    {
      name: "criptoC",
      price: this.dataTable.criptoC.amounts[this.dataTable.criptoC.amounts.length - 1],
      rise: riseC
    }]
    this.dataSource.data = temp;
  }

}

interface table {
  name: string,
  price: number,
  rise: number
}