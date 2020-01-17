import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByebyeComponent } from './byebye.component';

describe('ByebyeComponent', () => {
  let component: ByebyeComponent;
  let fixture: ComponentFixture<ByebyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByebyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByebyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
