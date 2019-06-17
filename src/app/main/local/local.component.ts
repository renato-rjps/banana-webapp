import { Component, OnInit } from '@angular/core';
import { LocalDataService } from 'src/app/core/local-data.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  dataSource: any[];
  constructor(private localDataService: LocalDataService) { }

  ngOnInit() {
    this.getAllLocals();
  }

  getAllLocals() {
    this.localDataService.getAll<any[]>('/locals')
      .subscribe((result: any) => {
        this.dataSource = result.body._embedded.locals;
      });
  }

}
