import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodetails.html',
  styleUrls: ['./prodetails.css'],
})
export class ProductDetail implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      if (id) {
        this.api.getSingleProduct(id).subscribe(res => {
          this.product = res;
          this.cdr.detectChanges(); // 🔥 CRITICAL FOR REFRESH
        });
      }
    });
  }
}
