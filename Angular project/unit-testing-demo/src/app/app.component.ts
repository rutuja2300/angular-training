
import { Component } from '@angular/core';
import { SpyingService } from './spying.service';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyCustomDirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private _spying:SpyingService, ){}
  title = 'unit-testing-demo';
  user="Rutuja"
myFunction(){
  this._spying.loadData()
}
}
