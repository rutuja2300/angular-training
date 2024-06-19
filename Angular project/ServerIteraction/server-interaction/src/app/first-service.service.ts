import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirstServiceService {
  private url = 'http://localhost:3000/missions';
  constructor(private httpclient: HttpClient) {}
  dataChanged = new Subject();
  dataChanged$ = this.dataChanged.asObservable();//$ means its a observable
  ngOnInit() {}

  getMission(): any {
    return this.httpclient.get(this.url);
  }

  addMission(data: any): any {
    console.log(data);
    return this.httpclient
      .post(this.url, data)
      .pipe(map((data) => this.dataChanged.next(data)));
  }

  removeMission(id: number) {
    return this.httpclient.delete(this.url + `/${id}`);
  }
}
