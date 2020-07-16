import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaVociComponent } from './visualizza-voci.component';

describe('VisualizzaVociComponent', () => {
  let component: VisualizzaVociComponent;
  let fixture: ComponentFixture<VisualizzaVociComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaVociComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaVociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
