import { Injectable } from '@angular/core';
import { Http ,Headers} from "@angular/http";



@Injectable()
export class DataserviceService {



  constructor(private http:Http) { }

//to get all current job posts
 getAllData(){
   debugger;
     return this.http.get('http://localhost:51071/api/ContractorDashboard/GetAllData')
    .map(response=>response.json());


}





//to submit the job post details
  
submitForm(resourses)
{
	debugger;
 var headers=new Headers();
 headers.append('Content-Type', 'application/json');
 
   	 return this.http.post("http://localhost:51071/api/ContractorDashboard/SetData",JSON.stringify(resourses),{headers:headers})
		.map(response=>response.json());
			  
}

//to get the load details dropdown
  getLoadData()
  {
    return this.http.get('http://localhost:51071/api/ContractorDashboard/GetLoadType')
    .map(response => response.json());
  }
  
  //to get the truck details dropdown
   getTruckData()
  {
    return this.http.get('http://localhost:51071/api/ContractorDashboard/GetTruckType')
    .map(response => response.json());
  }
  
                    
}


              
  
			 
                         
  
                         

                         


