import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogiComponent } from './logi.component';

describe('LogiComponent', () => {
  let component: LogiComponent;
  let fixture: ComponentFixture<LogiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogiComponent]
    });
    fixture = TestBed.createComponent(LogiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
