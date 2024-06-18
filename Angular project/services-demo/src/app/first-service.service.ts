import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {
//  private mission:string[]=[ "Mission1","Mission2","Mission3","Mission4"];
private missionSubject = new BehaviorSubject<string[]>([
  "Mission1","Mission2","Mission3","Mission4"
]);

missionObservable=this.missionSubject.asObservable();
  constructor() { }
  // getMission():string[]{
  // return this.mission;
  // }


  addMission(data:string):void{
    // this.mission.push(data);
    let newValue=[...this.missionSubject.value,data]
    console.log(newValue);
    this.missionSubject.next(newValue)
  }

  removeMission(id:number):void{
      let newValue=[...this.missionSubject.value]
      newValue.splice(id,1)
      this.missionSubject.next(newValue)
  }
}
