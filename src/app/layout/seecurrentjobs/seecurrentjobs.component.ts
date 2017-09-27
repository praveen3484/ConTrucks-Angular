import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "../../dataservice.service";

@Component({
  selector: 'app-seecurrentjobs',
  templateUrl: './seecurrentjobs.component.html',
  styleUrls: ['./seecurrentjobs.component.css']
})
export class SeecurrentjobsComponent implements OnInit {

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
