import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosCompComponent } from './contactos-comp.component';

describe('ContactosCompComponent', () => {
  let component: ContactosCompComponent;
  let fixture: ComponentFixture<ContactosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactosCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
