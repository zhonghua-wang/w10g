import {Component, OnInit} from '@angular/core';
import {Menu, MenuService} from '../menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  error: any;
  menuList: Menu[];

  // TODO add private menu cause error.
  constructor(
    private menuService: MenuService
  ) {};

  // set menuList(mlist) {
  //   this._menuList = mlist;
  // }
  //
  // get menuList(): Menu[] {
  //   return this._menuList;
  // }

  subMenu(parent: Menu): void{
    this.menuService.getChildren(parent)
      .then(menu => this.menuList = menu)
      .catch(error => this.error = error);
  }

  ngOnInit() {
  }

}
