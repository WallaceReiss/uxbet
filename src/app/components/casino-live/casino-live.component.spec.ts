import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoLiveComponent } from './casino-live.component';

describe('CasinoLiveComponent', () => {
  let component: CasinoLiveComponent;
  let fixture: ComponentFixture<CasinoLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasinoLiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasinoLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
