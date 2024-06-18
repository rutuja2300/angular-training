import { Component } from '@angular/core';
import { FirstServiceService } from '../first-service.service';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css'
})
export class ReaderComponent {
  missions:string[] | undefined;
constructor(private  fisrtService:FirstServiceService){}
ngOnInit(){
  // this.missions=this.fisrtService.getMission();
  this.fisrtService.missionObservable.subscribe((data)=>{
    this.missions=data;
  })
}
removeNewMission(id:number){
  this.fisrtService.removeMission(id)
}
}
