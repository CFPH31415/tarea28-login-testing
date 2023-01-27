import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBe('testing');
  });

  it('should have a valid formLogin', () => {
    expect(component.formLogin.valid).toBeFalsy();
  });

  it('should require username and password fields', () => {
    let username = component.formLogin.controls['username'];
    let password = component.formLogin.controls['password'];

    username.setValue('');
    password.setValue('');

    expect(username.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });

  it('should validate minimum length of 5 for username and password fields', () => {
    let username = component.formLogin.controls['username'];
    let password = component.formLogin.controls['password'];

    username.setValue('user');
    password.setValue('pass');

    expect(username.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });

  it('should show form values on submit', () => {
    let username = component.formLogin.controls['username'];
    let password = component.formLogin.controls['password'];

    username.setValue('testuser');
    password.setValue('testpass');

    let formValues = fixture.debugElement.query(By.css('.a'));
    let formButton = fixture.debugElement.query(By.css('button'));
    formButton.triggerEventHandler('click', null);

    expect(formValues.nativeElement.textContent).toContain('testuser');
    expect(formValues.nativeElement.textContent).toContain('testpass');
  });
});

