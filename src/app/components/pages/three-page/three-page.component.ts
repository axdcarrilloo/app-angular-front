import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/dtos/user.dto';

@Component({
  selector: 'three-page',
  templateUrl: './three-page.component.html',
  styleUrls: ['./three-page.component.scss']
})
export class ThreePageComponent implements OnInit {
  loginForm!: FormGroup;
  userMain!: IUser;
  validateUserMain = false;

  constructor(private fb: FormBuilder, private userSvc: UserService) {}
  ngOnInit(): void {
    this.loginForm = this.loadLoginForm();
  }

  cleanForm(): void {
    this.loginForm.reset();
    this.userMain = { id: '', numberCC: '', name: '', lastName: '', email: '', userName: '', password: '' };
    this.validateUserMain = false;
  }

  loadLoginForm(): FormGroup {
    return this.fb.group({
      userName: ['',  [Validators.required]],
      password: ['',  [Validators.required]],
    });
  }

  emitForm(): void {
    if(this.loginForm.valid) {
      this.userSvc.getByLogin(this.loginForm.value).subscribe({
        next: data => {
          this.userMain = data;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error);
        }
      });
      this.validateUserMain = true;
    }
  }

}
