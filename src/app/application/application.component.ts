import { Http,Response } from "@angular/http"; 
import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { DataserviceService } from "../dataservice.service";

@Component({
  selector: 'app-application',
  templateUrl : './application.component.html',
  styleUrls: ['./application.component.css']

 
})
export class ApplicationComponent
{

   
    // data:any = [];
    // data1:any=[];
    ngOnInit() 
    {}

    complexForm : FormGroup;

    // constructor(fb: FormBuilder,private service:DataserviceService,private http:Http)
    constructor(fb: FormBuilder,private http: Http)
  {
     
      this.complexForm = fb.group
      ({
      
      'cover' : [null, Validators.required],
      'price': [null, Validators.required],
       'time' : [null, Validators.required],
       
      })
  }

//to get the load information
//  getLoadInfo()
//   {
//        this.service.getLoadData().subscribe(data => 
//        {
//           //console.log(data);
//           this.data = data
//        })
//   } 
  
 //to get the truck information
  // getTruckInfo(){
  //    this.service.getTruckData().subscribe(data1 => 
  //      {
  //         //console.log(data);
  //         this.data1 = data1
  //      })
  // }

element:any[];

  submitForm(complexForm:NgForm)
  {
    this.element=complexForm.value;
    console.log(this.element);
    // this.service.submitForm(this.element)
    //  .subscribe (
    //      Newdata=>{
    //            console.log(Newdata);
    //            this.element=Newdata;
    //  }) ;    
  }
 }

  
