import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  nav: any;
  constructor() { 
    this.nav = document.getElementsByClassName('page');
  }

  ngOnInit() {
  }

  expandMenu() {
    this.nav[0].classList.add('navExpanded');
  }

  collapseMenu() {
    this.nav[0].classList.remove('navExpanded');
  }
}
