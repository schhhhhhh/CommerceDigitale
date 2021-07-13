import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UsersService,
              private router: Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    return new Promise(
      (resolve, reject)=>{
        const isAuth = this.userService.isAuth;
        //const isAuth = this.userService.isAuth$;
        console.log(isAuth);
        if(isAuth){
          resolve(true);
        }else{
          this.router.navigate(["/newloginn"]);
          reject(false);
        }
      }
    );
  }
  
}
