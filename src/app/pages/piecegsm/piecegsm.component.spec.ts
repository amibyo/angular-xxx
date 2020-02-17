import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecegsmComponent } from './piecegsm.component';

describe('PiecegsmComponent', () => {
  let component: PiecegsmComponent;
  let fixture: ComponentFixture<PiecegsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecegsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecegsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
