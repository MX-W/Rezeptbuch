import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllaroundComponent } from './allaround.component';

describe('AllaroundComponent', () => {
  let component: AllaroundComponent;
  let fixture: ComponentFixture<AllaroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllaroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllaroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
