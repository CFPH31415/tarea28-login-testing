import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ FormBuilder ]
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

  it('should have a valid formLogin', () => {
    expect(component.formLogin.valid).toBeFalsy();
  });
  
  it('should have a title', () => {
    expect(component.title).toBe('testing');
  });

  it('form should be invalid', () => {
    component.formLogin.controls['username'].setValue('');
    component.formLogin.controls['password'].setValue('');
    expect(component.formLogin.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.formLogin.controls['username'].setValue('testuser');
    component.formLogin.controls['password'].setValue('testpass');
    expect(component.formLogin.valid).toBeTruthy();
  });

  it('form values should match', () => {
    component.formLogin.controls['username'].setValue('testuser');
    component.formLogin.controls['password'].setValue('testpass');
    component.onSubmit();
    expect(component.formValues).toEqual({username: 'testuser', password: 'testpass'});
  });

});

