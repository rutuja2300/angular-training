import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  data = {};
  status: any;
  priority: any;
  description: any;
  @Output() onAdd = new EventEmitter();
  

  add(): void {
    this.data = {
      id: 1,
      desc: this.description,
      priority: this.priority,
      status: this.status,
    };
    console.log();
    this.onAdd.emit(this.data);
  
  }
}
