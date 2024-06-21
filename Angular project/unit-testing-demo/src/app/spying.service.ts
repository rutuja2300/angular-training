import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpyingService {

  constructor() { }
  loadData(){
    console.log("I'm spying!!!!");
    
  }
}
