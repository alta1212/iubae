import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhumphaibaeComponent } from './khumphaibae.component';

describe('KhumphaibaeComponent', () => {
  let component: KhumphaibaeComponent;
  let fixture: ComponentFixture<KhumphaibaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhumphaibaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhumphaibaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
