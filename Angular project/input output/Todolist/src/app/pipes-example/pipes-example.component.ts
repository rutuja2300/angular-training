import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FilterPipe } from '../../Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes-example',
  standalone: true,
  imports: [CurrencyPipe,DatePipe,JsonPipe,PercentPipe,LowerCasePipe,UpperCasePipe,TitleCasePipe,FilterPipe,FormsModule],
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.css'
})
export class PipesExampleComponent {
  price: number = 12345.6789;
  currentDate: Date = new Date();
  isChecked=false;
  myString: string = 'This is a STRING in Mixed CASE';
  myObject: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };
  myNumber: number = 0.23;
  arrObj:any[]=[
      {fname:"Sachin",lname:"Tendulkar"},
      {fname:"Rahul",lname:"Dravid"}
    ]
  
}