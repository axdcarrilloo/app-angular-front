import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/dtos/user.dto';

@Component({
  selector: 'table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {
  usersMain: IUser[] = [];

  constructor(private userSvc: UserService) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.userSvc.getAll().subscribe({
      next: data => {
        this.usersMain = data;
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      }
    });
  }

}
