import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { IUser } from 'src/dtos/user.dto';

@Component({
  selector: 'app-five-page',
  templateUrl: './five-page.component.html',
  styleUrls: ['./five-page.component.scss']
})
export class FivePageComponent implements OnInit {
  userMain!: IUser;

  constructor(private localStorageSvc: LocalStorageService) {}
  ngOnInit(): void {
    this.userMain = this.localStorageSvc.getItem('userLogeado');
    this.localStorageSvc.removeItem('userLogeado');
  }

}
