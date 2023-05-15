import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeastAboutComponent } from './ceast-about.component';

describe('CeastAboutComponent', () => {
  let component: CeastAboutComponent;
  let fixture: ComponentFixture<CeastAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeastAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeastAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
