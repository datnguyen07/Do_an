import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PromotionService } from '../../adminService/promotion.service';
import { Promotion } from '../../model/promotion.model';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component-demo.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {
  // form = this.fb.group({
  //   name: [''],
  //   startDate: [''],
  //   endDate: ['',],
  //   applyDay: [''],
  //   discount: [''],
  //   maxdiscount:[''],
  //   remainapply: [''],
  // });
  // submitted = false;
  // constructor(private fb: FormBuilder,
  //    private promotionService: PromotionService,
  //    private http: HttpClient) {  }
  promotion: Promotion = new Promotion();
  submitted = false;
  constructor(private promotionService: PromotionService,
    private router: Router){}

  ngOnInit(): void {

  }
// addpro(){
//   this.promotionService.add(this.form.value).subscribe(res=>{
//     console.log("them moi");
//   })
// }
  onSubmit() {
    this.submitted = true;
    this.promotionService.createPromotion(this.promotion).subscribe(
      data => console.log(data)
    );
    this.promotion = new Promotion();
    this.router.navigate(['/promotion']);
  }


}
