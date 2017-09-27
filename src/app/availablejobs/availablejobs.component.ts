import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "../dataservice.service";

@Component({
  selector: 'app-availablejobs',
  templateUrl: './availablejobs.component.html',
  styleUrls: ['./availablejobs.component.css']
})
export class AvailablejobsComponent implements OnInit {

  data:any[];
   
    constructor(private service:DataserviceService){

  }
  ngOnInit(){
    debugger;
      this.getData();
    }
  getData() {
    debugger;
    this.service. getAllData().subscribe(
      
    data => { 
       console.log(data);  
      this.data = data 
     
    },

     
    );

}
}
