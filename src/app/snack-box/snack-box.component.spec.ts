import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBoxComponent } from './snack-box.component';

describe('SnackBoxComponent', () => {
  let component: SnackBoxComponent;
  let fixture: ComponentFixture<SnackBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
