import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'testing';
  formLogin!: FormGroup
  formValues = { username: '', password: '' };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
    }
    onSubmit() {
      this.formValues = this.formLogin.value;
    }
  }
