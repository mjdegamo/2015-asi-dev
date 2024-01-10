import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();
  
  buyButtonClicked() {
    this.buy.emit()
  }

  getDiscountedClass(product: IProduct) {
    if(product.discount) {
      return 'strike-through'
    } 

    return ''
  }

  getImageUrl(product: IProduct): string {
    return '/assets/images/robot-parts/' + product.imageName
  }
}
