import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.scss']
})
export class NavbarLateralComponent implements OnInit {

  token = sessionStorage.getItem('token');
  user = sessionStorage.getItem('user');
  userprofile = sessionStorage.getItem('userprofile');
  profile = sessionStorage.getItem('profile');

  constructor() { }

  ngOnInit(): void {
    //console.log(sessionStorage);
  }

}
