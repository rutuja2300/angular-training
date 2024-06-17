// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'supergirl';
//   newName:string=""
//   names:string[]=['Rutuja','Akash','Pooja']

  
//   remove(n1:number):void{
// this.names.splice(n1,1)
//   }

//   add(){
//     this.names.push(this.newName);
//     this.newName="";
//   }

//   Sorter(): void {
//     this.names.sort((a, b) => {
//       if (a > b) {
//         return 1;
//       } else if (a < b) {
//         return -1;
//       }
//       return 0;
//     });
//   }
// }
// ==========================================

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
interface Person {
  firstName: string;
  lastName: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet,FormsModule],
})
export class AppComponent {
  title = 'supergirl';
  newFirstName: string = "";
  newLastName: string = "";

  people: Person[] = [
    { firstName: 'Rutuja', lastName: 'Deshmukh' },
    { firstName: 'Akash', lastName: 'Gupta' },
    { firstName: 'Pooja', lastName: 'Singh' }
  ];
  filteredPeople: Person[] = [];
  remove(index: number): void {
    this.people.splice(index, 1);
  }

  add(): void {
    if (this.newFirstName && this.newLastName) {
      this.people.push({ firstName: this.newFirstName, lastName: this.newLastName });
      this.newFirstName = "";
      this.newLastName = "";
    }
  }

  sorter(): void {
    this.people.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }
    // sortedFilter=this.people.filter(s=>s.firstName.includes('u'));
  // filter(){
  //   const sortedFilter=this.people.filter(s=>s.firstName.includes('u'));
  //   console.log(sortedFilter);
    
  // }
  filter(): void {
    this.filteredPeople = this.people.filter(person => person.firstName.includes('u')).map(person => {
      console.log(this.filteredPeople);
      return { firstName: person.firstName, lastName: person.lastName };
      
      ``
    });
  }
  
}