import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  myFunction1(): void {

    this._router.navigate(['Book']);
  }
  myFunction2(): void {

    this._router.navigate(['WorkBench']);
  }
  onLogout() {
    this.userService.deleteToken();
    this._router.navigate(['/login']);
  }
}
