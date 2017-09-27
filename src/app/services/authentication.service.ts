import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
        public token : string;
        public headers : Headers;
 
 
 
 constructor(@Inject(Http) private http: Http) 
    {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.token = currentUser && currentUser.token;

     } 

    login(UserEmail: string, UserPassword: string) {
        debugger;
        console.log(UserEmail);
        
        //let headers= new Headers();
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers:headers});
        var data = "grant_type=password&username="+UserEmail+"&password="+UserPassword;
       return this.http.post('http://localhost:51071/Token',data ,options)
            .map((response: Response) => {
                let user = response.json();
                let token = response.json() && response.json().access_token;
                 console.log(user);
                if (user && token) 
                {
                    localStorage.setItem('currentUser', JSON.stringify(token));  
                    return true;                                        
                }
                else
                {   
                    return false;   
                }             
            });
    }

    logout=function() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}




        //headers.append('Content-type','application/x-www-form-urlencoded');
    //    username: username, password: password, grant_type:pass
                // login successful if there's a identity token in the response
               // let token = response.json() && response.json().access_token;
                    // store user details and identity token in local storage to keep user logged in between page refreshes
                    // token = user.token
