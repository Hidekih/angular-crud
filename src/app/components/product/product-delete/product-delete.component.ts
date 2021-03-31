import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  param: string = '';
  product: Product = {} as Product;

  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { 
    activeRoute.params.subscribe(param => {
      this.param = param.id;
    })
  }

  ngOnInit(): void {
    this.productService.readById(this.param).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.param).subscribe();
    this.productService.showMessage('Produto Deletado');
    this.router.navigate(['/products']);
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
