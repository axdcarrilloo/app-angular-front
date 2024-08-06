import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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

  constructor(private fb: FormBuilder, private userSvc: UserService, private locaStorageSvc: LocalStorageService) {}
  ngOnInit(): void {
    this.loginForm = this.loadLoginForm();
  }

  cleanForm(): void {
    this.loginForm.reset();
    this.userMain = { _id: '', numberCC: '', name: '', lastName: '', email: '', userName: '', password: '' };
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
          this.locaStorageSvc.uploadItem('userLogeado', this.userMain);
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.error);
        }
      });
    }
  }

}
