import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AroundcontentComponent } from './aroundcontent.component';

describe('AroundcontentComponent', () => {
  let component: AroundcontentComponent;
  let fixture: ComponentFixture<AroundcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AroundcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AroundcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
