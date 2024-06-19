import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowMoviesComponent } from "./show-movies/show-movies.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ShowMoviesComponent]
})
export class AppComponent {
  title = 'MoviesApp';
}
