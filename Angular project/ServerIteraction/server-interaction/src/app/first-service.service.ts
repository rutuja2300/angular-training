import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirstServiceService {
  //  private mission:string[]=[ "Mission1","Mission2","Mission3","Mission4"];
  // private missionSubject = new BehaviorSubject<string[]>([
  //   "Mission1","Mission2","Mission3","Mission4"
  // ]);

  // missionObservable=this.missionSubject.asObservable();
  private url = 'http://localhost:3000/missions';
  constructor(private httpclient: HttpClient) {}

  ngOnInit() {}

  getMission(): any {
    return this.httpclient.get(this.url);
  }

  addMission(data: any): any {
    console.log(data);
    return this.httpclient.post(this.url, data);
  }

  // removeMission(id:number):void{
  //     let newValue=[...this.missionSubject.value]
  //     newValue.splice(id,1)
  //     this.missionSubject.next(newValue)
  // }
}
