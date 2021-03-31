import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../../components/product/product.service'
import { Router} from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {} as Product;

  constructor(
    private productService: ProductService, 
    private router: Router
  ){}

  ngOnInit(): void { }

  createProduct(): void {
    console.log(this.product)
    if (this.product.price && this.product.quantity){
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage('Produto cadastrado');
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
