import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrutoresComponent } from './construtores.component';

describe('ConstrutoresComponent', () => {
  let component: ConstrutoresComponent;
  let fixture: ComponentFixture<ConstrutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstrutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
