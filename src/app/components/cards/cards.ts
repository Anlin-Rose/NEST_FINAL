import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service';

@Component({
  selector: 'app-cards',
    imports: [CommonModule],
  templateUrl: './cards.html',  
  styleUrls: ['./cards.css'], 
  standalone:true, 

})
export class Cards implements OnInit {  
  cards: any[] = [];

  constructor(
    private api_service: ApiService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
   
      this.api_service.getFakeStoreItems().subscribe((res: any) => {
  this.cards = res.products; 
  this.cdr.detectChanges();
});
 }

  viewProductDetail(product: any): void {
   
    this.router.navigate(['/product', product.id]);
    
  }
}
