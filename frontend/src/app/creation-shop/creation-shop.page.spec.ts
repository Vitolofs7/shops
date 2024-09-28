import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationShopPage } from './creation-shop.page';

describe('CreationShopPage', () => {
  let component: CreationShopPage;
  let fixture: ComponentFixture<CreationShopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
