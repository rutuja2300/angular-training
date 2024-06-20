import { Component } from '@angular/core';
import { Product } from '../models/product-interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectProductState } from '../Store/product/product.selector';
import { AppState } from '../Store/app.state';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css'
})
export class ReaderComponent {
product:Product[]=[];
product$:Observable<AppState> | undefined
constructor(private store:Store){}
ngOnInit():void{
  this.product$=this.store.pipe(select(selectProductState));
  this.product$.subscribe((data)=>this.product=data.product);
}
}
