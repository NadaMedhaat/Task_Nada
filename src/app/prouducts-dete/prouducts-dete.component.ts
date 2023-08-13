import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-dete',
  templateUrl: './prouducts-dete.component.html',
  styleUrls: ['./prouducts-dete.component.css']
})
export class ProductDeteComponent implements OnInit {
  productId: string | null = null;
  productDetails: any = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      if (this.productId) {
        this.http.get(`https://dummyjson.com/products/${this.productId}`)
          .subscribe((data: any) => {
            this.productDetails = data;
          });
      }
    });
  }
}
