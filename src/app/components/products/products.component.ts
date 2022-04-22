import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    //Inyección de dependencias
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }
  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe(data => {
    this.products = data;
      });
  }

  myShoppingCart: Product[] = [];
  total: number = 0;
  products: Product[] = []
  today: Date = new Date();
  date: Date = new Date(2021, 1, 21);

  onAddToShoppingCart(product: Product) {
    this.storeService.addToShoppingCart(product);
    this.total = this.storeService.getTotal();
  }

}
