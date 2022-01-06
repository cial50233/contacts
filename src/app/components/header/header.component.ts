import { Component, OnInit } from '@angular/core';
//import { dependencies } from '../../../../package.json';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //version = dependencies['@angular/core'].substring(1);
  version = 10;
  constructor() { }

  ngOnInit(): void {
  }

}
