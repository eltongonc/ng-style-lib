import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHomeComponent } from './data-home.component';

describe('DataHomeComponent', () => {
  let component: DataHomeComponent;
  let fixture: ComponentFixture<DataHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
