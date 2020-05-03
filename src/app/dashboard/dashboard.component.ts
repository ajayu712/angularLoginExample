import { Component, OnInit } from '@angular/core';
import { UserLogService } from '../user-log.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
value:any;
  constructor(private user:UserLogService) { }

  ngOnInit(){
    // Code goes here
  }
}