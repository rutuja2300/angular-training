import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateForm1Component } from './template-form1/template-form1.component';
import { ReativeForm1Component } from "./reative-form1/reative-form1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, TemplateForm1Component, ReativeForm1Component]
})
export class AppComponent {
  title = 'Routing-demo';
}
