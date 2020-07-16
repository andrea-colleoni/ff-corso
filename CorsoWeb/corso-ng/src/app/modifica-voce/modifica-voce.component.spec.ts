import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaVoceComponent } from './modifica-voce.component';

describe('ModificaVoceComponent', () => {
  let component: ModificaVoceComponent;
  let fixture: ComponentFixture<ModificaVoceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaVoceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaVoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
