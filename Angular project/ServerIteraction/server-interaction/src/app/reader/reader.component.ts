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
    this.getData();
    this.fisrtService.dataChanged$.subscribe(() => {
      this.getData();
    });
  }
  getData(): void {
    this.fisrtService.getMission().subscribe((data: any) => {
      this.missions = data;
    });
  }
  removeNewMission(id: number) {
    this.fisrtService.removeMission(id).subscribe((data) => {
      console.log('Mission removed', data);
      this.getData();
    });
  }
}
