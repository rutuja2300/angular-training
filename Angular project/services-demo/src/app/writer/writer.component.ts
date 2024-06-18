import { Component } from '@angular/core';
import { FirstServiceService } from '../first-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-writer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './writer.component.html',
  styleUrl: './writer.component.css'
})
export class WriterComponent {
  missions:string[] | undefined;
  newMission:string="" 
  constructor(private  fisrtService:FirstServiceService){}
  ngOnInit(){
   
  }
  addNewMission(){
    this.fisrtService.addMission(this.newMission);
    this.newMission="";
  }
 
}
