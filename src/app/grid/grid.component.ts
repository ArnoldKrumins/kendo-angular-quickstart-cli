import { Component, OnInit } from '@angular/core';
import { GridDataService } from '../grid-data.service'

@Component({
  selector: 'app-grid',
  providers: [GridDataService],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  private gridData: any[];

  constructor(private gridDataService: GridDataService) { }

  ngOnInit() {
    this.gridData = this.gridDataService.getData();
  }

}
