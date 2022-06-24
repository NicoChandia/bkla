import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosCompComponent } from './nosotros-comp.component';

describe('NosotrosCompComponent', () => {
  let component: NosotrosCompComponent;
  let fixture: ComponentFixture<NosotrosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
