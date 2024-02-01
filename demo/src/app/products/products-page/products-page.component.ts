import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProductsPageActions } from '../state/products.actions';
import { selectProducts, selectProductsErrorMessage, selectProductsLoading, selectProductsShowProductCode, selectProductsTotal } from '../state/products.selectors';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  total = 0;

  showProductCode$ = this.store.select(selectProductsShowProductCode);
  loading$ = this.store.select(selectProductsLoading);
  products$ = this.store.select(selectProducts)
  total$ = this.store.select(selectProductsTotal)
  errorMessage$ = this.store.select(selectProductsErrorMessage)

  constructor(
    private store: Store
    ) {}

  toggleShowProductCode() {
    this.store.dispatch(ProductsPageActions.toggleShowProductCode())
  }
}
