import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyHomeComponent } from './typography-home.component';

describe('TypographyHomeComponent', () => {
  let component: TypographyHomeComponent;
  let fixture: ComponentFixture<TypographyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypographyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
