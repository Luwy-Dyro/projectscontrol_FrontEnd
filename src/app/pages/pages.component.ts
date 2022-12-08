import { Component, OnInit } from '@angular/core';

// declare function customInitSlim(): void;
// declare function customInitCount(): void;
// declare function customInitWaves(): void;
declare function customInitAdmin(): void;
declare function customInitIndex(): void;
declare function customInitDemo(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // customInitSlim();
    // customInitWaves();
    // customInitIndex();
    // customInitDemo();
    // customInitAdmin();
    //customInitCount();

  }

}


