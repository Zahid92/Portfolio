import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGyanComponent } from './random-gyan.component';

describe('RandomGyanComponent', () => {
  let component: RandomGyanComponent;
  let fixture: ComponentFixture<RandomGyanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomGyanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomGyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
