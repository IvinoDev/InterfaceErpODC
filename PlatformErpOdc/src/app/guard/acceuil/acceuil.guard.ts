import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcceuilGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('utilisateur')!=null){
      return true;
    }else{
      this.router.navigate(['/login'])
    }
  }
  
}
