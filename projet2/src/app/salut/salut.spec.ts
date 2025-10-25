import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salut } from './salut';

describe('Salut', () => {
  let component: Salut;
  let fixture: ComponentFixture<Salut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Salut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Salut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
