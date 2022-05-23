import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../../adminService/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  listPromotion : Array<any> = [];

  constructor(private promotionService : PromotionService) { }

  ngOnInit(): void {
    // this.promotionService.get().subscribe(res => {
    //   this.listPromotion = res.content;
    //   console.log(this.listPromotion);
    //   console.log(res);
    // })
  }

}
