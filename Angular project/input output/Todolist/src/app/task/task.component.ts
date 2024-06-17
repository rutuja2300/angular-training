import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input() taskItem :any;
@Output() onRemove =new EventEmitter();
onRemoveTask(id:number){
  this.onRemove.emit(id)
}
}
