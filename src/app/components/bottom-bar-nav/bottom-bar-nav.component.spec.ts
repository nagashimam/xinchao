import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarNavComponent } from './bottom-bar-nav.component';

describe('BottomBarNavComponent', () => {
  let component: BottomBarNavComponent;
  let fixture: ComponentFixture<BottomBarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomBarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
