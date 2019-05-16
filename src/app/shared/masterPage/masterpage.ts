import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-page>',
  template: '<app-navbar></app-navbar><router-outlet></router-outlet>'
})
export class MasterPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
