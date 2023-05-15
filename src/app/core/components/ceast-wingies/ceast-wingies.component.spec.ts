import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeastWingiesComponent } from './ceast-wingies.component';

describe('CeastWingiesComponent', () => {
  let component: CeastWingiesComponent;
  let fixture: ComponentFixture<CeastWingiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeastWingiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeastWingiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
