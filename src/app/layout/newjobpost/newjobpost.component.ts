import { Http,Response } from "@angular/http"; 
import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DataserviceService } from "../../dataservice.service";

@Component({
  selector: 'app-newjobpost',
  templateUrl : './newjobpost.component.html'

 
})
export class NewjobpostComponent
{

   
    data:any = [];
    data1:any=[];
    ngOnInit() 
    {}

    complexForm : FormGroup;

    constructor(fb: FormBuilder,private service:DataserviceService,private http:Http)
  {
      this.getLoadInfo();
      this.getTruckInfo();
      this.complexForm = fb.group
      ({
      
       'JobTitle' :           [null, Validators.required],
       'JobDescription':      [null, Validators.required],
       'budget' :             [null, Validators.required],
       'EstimatedTime' :      [null, Validators.required],
       'LoadTypeId' :         [null, Validators.required],
       'distance':            [null, Validators.required],
       'LoadWeight' :         [null, Validators.required],
       'SourceAddress' :      [null, Validators.required],
       'DestinationAddress' : [null, Validators.required],
       'JobStartDate' :       [null, Validators.required],
       'JobEndDate' :         [null, Validators.required],
       'TruckTypeId' :        [null, Validators.required],
      
      })
  }

//to get the load information
 getLoadInfo()
  {
       this.service.getLoadData().subscribe(data => 
       {
          //console.log(data);
          this.data = data
       })
  } 
  
 //to get the truck information
  getTruckInfo(){
     this.service.getTruckData().subscribe(data1 => 
       {
          //console.log(data);
          this.data1 = data1
       })
  }

element:any[];

  submitForm(complexForm:NgForm)
  {
    this.element=complexForm.value;
    console.log(this.element)
    this.service.submitForm(this.element)
     .subscribe (
         Newdata=>{
               console.log(Newdata);
               this.element=Newdata;
     }) ;    
  }
 }

  
