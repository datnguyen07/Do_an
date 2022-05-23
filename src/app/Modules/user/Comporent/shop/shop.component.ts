import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  listProduct : Array<any> = [];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.get().subscribe(data => {
      this.listProduct = data;
    })
  }

}
