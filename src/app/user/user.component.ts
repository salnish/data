import { DataFetchService } from './../data-fetch.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subject}from 'rxjs'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  userData:any;

  constructor(private _dataService:DataFetchService){}

  ngOnInit(): void {
    this._dataService.getUsers()
    .subscribe((response:any)=>{
      this.userData=response
      this.dtTrigger.next(this.userData);
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
