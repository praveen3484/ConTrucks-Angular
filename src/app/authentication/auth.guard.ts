import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router: Router){}

        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        {
            if(localStorage.getItem('currentUser'))
            {
                //logged in so True
                return true;
            }
            this.router.navigate(['/login'],
                {   
                    queryParams:   {returnUrl : state.url}
                }
                );
            return false;            
        }
}