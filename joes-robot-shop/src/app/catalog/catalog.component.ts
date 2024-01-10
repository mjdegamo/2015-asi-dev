import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  productList!: IProduct[];
  filter: string = ''

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ){ }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => this.productList = products)
    
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? ''
    })
  }

  addToCart(product: IProduct) {
    this.cartService.add(product)
    this.router.navigate(['/cart'])
  }

  getFilteredProducts() {
    return this.filter?.trim() ? 
      this.productList?.filter(product => product.category === this.filter) :
      this.productList
  }
}
