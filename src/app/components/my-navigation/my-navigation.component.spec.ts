import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavigationComponent } from './my-navigation.component';

describe('MyNavigationComponent', () => {
  let component: MyNavigationComponent;
  let fixture: ComponentFixture<MyNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
