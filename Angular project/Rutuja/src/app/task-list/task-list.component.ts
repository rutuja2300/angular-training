import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: any[] = [
    {
      id: 1,
      desc: 'come to office',
      priority: 2,
      status: 'completed',
    },
    {
      id: 2,
      desc: 'study angular',
      priority: 1,
      status: 'in_progress',
    },
    {
      id: 3,
      desc: 'go home',
      priority: 3,
      status: 'pending',
    },
  ];
  onRemove($event:number):void{
    alert($event);
    //this.tasks.splice($event,1);
    //splice is used for removing by index number
    //here we have to remove by id , so we use filter.
    this.tasks=this.tasks.filter((el)=>el.id!==$event)
  }
}
