import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightComponentComponent } from './right-component.component';

describe('RightComponentComponent', () => {
  let component: RightComponentComponent;
  let fixture: ComponentFixture<RightComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
