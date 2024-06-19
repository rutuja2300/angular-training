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
  
  
  id: any;
  name: any;
  constructor(private  fisrtService:FirstServiceService){}
  ngOnInit(){
   
  }
  addNewMission(){
 let data={id:this.id , name:this.name}
 this.fisrtService.addMission(data).subscribe(()=>{
  console.log("Mission added");
 })
  }
 
}
