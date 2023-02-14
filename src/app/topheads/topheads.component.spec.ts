import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheadsComponent } from './topheads.component';

describe('TopheadsComponent', () => {
  let component: TopheadsComponent;
  let fixture: ComponentFixture<TopheadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopheadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
