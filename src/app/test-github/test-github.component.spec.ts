import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGithubComponent } from './test-github.component';

describe('TestGithubComponent', () => {
  let component: TestGithubComponent;
  let fixture: ComponentFixture<TestGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
