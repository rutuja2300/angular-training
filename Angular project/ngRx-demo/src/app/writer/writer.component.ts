import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Product } from '../models/product-interface';
import { add } from '../Store/product/product.actions';

@Component({
  selector: 'app-writer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './writer.component.html',
  styleUrl: './writer.component.css',
})
export class WriterComponent {
  constructor(private store: Store) {}

  product: Product = {
    id: 0,
    name: '',
    price: 0,
  };
  addToProduct() {
    console.log('dispatched');
    this.store.dispatch(add({ product: this.product }));
  }
}
