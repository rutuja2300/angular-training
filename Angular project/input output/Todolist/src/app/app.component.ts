import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent,PipesExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todolist';
}
