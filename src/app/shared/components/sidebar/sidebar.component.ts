import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  sidebarOptions = [
    // { link: '', title: 'Home' },
    // { link: 'about', title: 'About' },
    // { link: 'contact', title: 'Contact' },
    { link: 'countries/by-capital', title: 'Capitals' },
    { link: 'countries/by-country', title: 'Countries' },
    { link: 'countries/by-region', title: 'Regions' },
  ]

  constructor() {}

}
