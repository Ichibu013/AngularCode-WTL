import {Component, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  LoginFrom: any;

  constructor(private fb: FormBuilder, private service: CommonService) {
    this.LoginFrom = this.fb.group({
      Name: [''],
      Email: [''],
      Mobile: [''],
      Password: ['']
    })
  }

  SubmitForm() {
    debugger
    console.log("Login Form Submitted", this.LoginFrom);
    this.service.submitData(this.LoginFrom.value).subscribe(data => {
      alert(
        "Data Submitted");
    })
  }

  ngOnInit(): void {
    // Initialization logic here
  }
}
