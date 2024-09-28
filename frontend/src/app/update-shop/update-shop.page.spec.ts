import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateShopPage } from './update-shop.page';

describe('UpdateShopPage', () => {
  let component: UpdateShopPage;
  let fixture: ComponentFixture<UpdateShopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
