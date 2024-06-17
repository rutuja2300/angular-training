import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  imports: [TaskComponent, AddTaskComponent],
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
  onRemove($event: number) {
    this.tasks = this.tasks.filter((task) => task.id !== $event);
  }

  addTask($event: any) {
    console.log($event)
   this.tasks.push($event)
  }
}
