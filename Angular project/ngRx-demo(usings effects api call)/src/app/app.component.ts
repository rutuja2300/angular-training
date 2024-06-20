import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WriterComponent } from "./writer/writer.component";
import { ReaderComponent } from "./reader/reader.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, WriterComponent, ReaderComponent]
})
export class AppComponent {
  title = 'ngRx-demo';
}
