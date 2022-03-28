import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveredListComponent } from './recovered-list.component';

describe('RecoveredListComponent', () => {
  let component: RecoveredListComponent;
  let fixture: ComponentFixture<RecoveredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveredListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
