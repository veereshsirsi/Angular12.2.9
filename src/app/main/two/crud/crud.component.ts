import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  public details:any;
  public id:any;
  public name:any;
  public number:any;
  public email:any;
  private saveIndex:any;
  

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
  add(){
    this.details.push({
      id:this.id,
      name:this.name,
      number:this.number,
      email:this.email,
    })
    this.empty();
    
  }
  save(){
    this.details[this.saveIndex].id = this.id;
    this.details[this.saveIndex].name = this.name;
    this.details[this.saveIndex].number = this.number;
    this.details[this.saveIndex].email = this.email;
    this.empty();
  }
  edit(index:number){
    this.saveIndex = index;
    this.id = this.details[index].id;
    this.name = this.details[index].name;
    this.number = this.details[index].number;
    this.email = this.details[index].email;
  }
  del(index:number){
    this.details.splice(index, 1);
  }
  empty(){
    this.id = '';
    this.name = '';
    this.number = '';
    this.email = '';
  }
}
