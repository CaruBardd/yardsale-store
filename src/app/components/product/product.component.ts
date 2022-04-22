import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() addedProduct = new EventEmitter<Product>();
  @Input('productInList') product!: Product;
  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

}
