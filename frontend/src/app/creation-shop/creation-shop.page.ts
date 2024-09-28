import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-creation-shop',
  templateUrl: './creation-shop.page.html',
  styleUrls: ['./creation-shop.page.scss'],
})
export class CreationShopPage implements OnInit {

  shopForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private shopService: ShopService,
    private route: Router) { 
      this.shopForm = this.formBuilder.group({
        address: ['', Validators.compose([Validators.required])],
        telephone: ['', Validators.compose([Validators.required])]
      })
    }

  ngOnInit() {
  }

  createShop() {
    if(this.shopForm.valid){
      console.log('Valid Form: ', this.shopForm.value);
      this.shopService.create(this.shopForm.value).subscribe(response => {
        this.route.navigateByUrl("/creation-shop");
      })
    } else {
      console.log('Invalid Form');
    }
  }

  getFormControl(field: string){
    return this.shopForm.get(field);
  }

  goHome(){
    this.route.navigateByUrl("/");
  }
}

