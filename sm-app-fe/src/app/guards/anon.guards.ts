import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthUtils } from "../utility/auth-utils";


@Injectable()

export class AnonGuard implements CanActivate{
    constructor(private router: Router){}
    canActivate(): any {
        // console.log('Token ' +AuthUtils.getAuthToken())
        if(!AuthUtils.getAuthToken()){
            return true
        } else {
            this.router.navigate(['login'])
        }
    }

}