import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nofound',
  templateUrl: './nofound.component.html',
  styleUrls: ['./nofound.component.scss']
})
export class NofoundComponent implements OnInit {

  constructor(private router: Router) {   
  }

  ngOnInit(): void {
   
  }

  onSubmit(){

    this.router.navigate(['/home'])
    .then(() => {
      window.location.reload();
    });

  }
}
