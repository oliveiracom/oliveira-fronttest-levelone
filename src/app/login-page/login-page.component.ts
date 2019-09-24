import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndataService } from '../indata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  items;
  loginForm;

  constructor(
    private route: ActivatedRoute,
    private indataService: IndataService,
    private formBuilder: FormBuilder
  ) {
  this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', Validators.required),
      password: this.formBuilder.control('', Validators.required),
    }); 
  }

  onSubmit(customerData) {
    // Process checkout data here
      console.warn('Login Feito', customerData);
      //addToFile(customerData);
      window.location.href = "/como"
      return;
  }

  ngOnInit() {
  }

}