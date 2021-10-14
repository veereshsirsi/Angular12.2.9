import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  public details:any;

  constructor() { }

  ngOnInit(): void {
    this.details = [
      {id:111, name:'veeru', number:234, email:'veeru@gmail.com'},
      {id:112, name:'veeresh', number:235, email:'veeresh@gmail.com'},
      {id:113, name:'kumar', number:236, email:'kumar@gmail.com'},
      {id:114, name:'sirsi', number:237, email:'sirsi@gmail.com'},
      {id:115, name:'praveen', number:238, email:'praveen@gmail.com'},
    ]
  }

}
