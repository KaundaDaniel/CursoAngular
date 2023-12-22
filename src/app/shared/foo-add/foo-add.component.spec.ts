import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooAddComponent } from './foo-add.component';

describe('FooAddComponent', () => {
  let component: FooAddComponent;
  let fixture: ComponentFixture<FooAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
