import { Component } from '@angular/core';
import { FirstServiceService } from '../first-service.service';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css',
})
export class ReaderComponent {
  missions: any;
  constructor(private fisrtService: FirstServiceService) {}
  ngOnInit() {
    this.fisrtService.getMission().subscribe((data: any) => {
      this.missions = data;
    });
  }
  // removeNewMission(id:number){
  //   this.fisrtService.removeMission(id)
  // }
}
