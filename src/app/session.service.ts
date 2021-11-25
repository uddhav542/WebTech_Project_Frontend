import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {
    
   }
   save(email:any){

    sessionStorage.setItem('user',email);

  }
  get(){

    return sessionStorage.getItem('user');
  
    }
  
  removeUser(){
  
    sessionStorage.removeItem('user');
  
  }
  
  clearAll(){
      sessionStorage.clear();
    }
}
