import { Component, OnInit } from '@angular/core';

import {Menu, MenuService} from '../menu';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  menu: Menu[];

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  getMenu(): void{
    this.menuService
      .getMenu()
      .then(menu => this.menu = menu);
  }
  ngOnInit() {
    this.getMenu();
  }

}
