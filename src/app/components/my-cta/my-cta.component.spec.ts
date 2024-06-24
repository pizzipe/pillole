import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCtaComponent } from './my-cta.component';

describe('MyCtaComponent', () => {
  let component: MyCtaComponent;
  let fixture: ComponentFixture<MyCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
