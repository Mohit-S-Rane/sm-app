import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthUtils } from "../utility/auth-utils";


@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        console.log('im here');
        
        if(!!AuthUtils.getAuthToken()){
            // debugger
            return true;
        } else {
            this.router.navigate([''])
        }
    }
    
}