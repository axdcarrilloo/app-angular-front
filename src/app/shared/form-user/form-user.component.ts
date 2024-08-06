import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userSvc: UserService) {}
  ngOnInit(): void {
    this.userForm = this.loadFormUser();
  }

  emitForm(): void {
    if(this.userForm.valid) {
      const user = this.userForm.value;
      this.userSvc.register(user).subscribe({
        next: data => {
          console.log('Registro Exitoso', data);
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
        }
      });
    }
    this.userForm.reset();
  }

  loadFormUser(): FormGroup {
    return this.fb.group({
      numberCC: ['',  [Validators.required]],
      name: ['',  [Validators.required]],
      lastName: ['',  [Validators.required]],
      email: ['',  [Validators.required, Validators.email]],
      userName: ['',  [Validators.required]],
      password: ['',  [Validators.required]]
    });
  }

}
