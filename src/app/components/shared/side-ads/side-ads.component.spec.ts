import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAdsComponent } from './side-ads.component';

describe('SideAdsComponent', () => {
  let component: SideAdsComponent;
  let fixture: ComponentFixture<SideAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
