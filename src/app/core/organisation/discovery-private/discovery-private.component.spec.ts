import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryPrivateComponent } from './discovery-private.component';

describe('DiscoveryPrivateComponent', () => {
  let component: DiscoveryPrivateComponent;
  let fixture: ComponentFixture<DiscoveryPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
