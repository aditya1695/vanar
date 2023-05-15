import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeastHeaderComponent } from './ceast-header.component';

describe('CeastHeaderComponent', () => {
  let component: CeastHeaderComponent;
  let fixture: ComponentFixture<CeastHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeastHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeastHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
