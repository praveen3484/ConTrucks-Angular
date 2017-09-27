import { Component, OnInit } from '@angular/core';
import { DataserviceService } from "../../../dataservice.service";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {


  data: any[];
  data1: any[];
  
 public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "class";
    public sortOrder = "asc";
  constructor(private service: DataserviceService) { }
  ngOnInit(){
     this.getData();
  }
   
getData(){
 this.service.getAllData().subscribe(posts => {
      console.log(posts);
      this.data = posts;
      this.data1 = posts;
      
},
 );
}


   
  
     public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.class.length;
    }
  }

