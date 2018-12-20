import {Injectable} from '@angular/core';
import {ToolbarItem} from '../navigation-bar/toolbar/toolbar.item';
import {ToolbarEditionComponent} from '../navigation-bar/toolbar/toolbar.edition.component';
import {ToolbarComponent} from '../navigation-bar/toolbar/toolbar.component';
import {ToolbarBasicComponent} from '../navigation-bar/toolbar/toolbar.basic.component';
import {ToolbarMenuComponent} from '../navigation-bar/toolbar/toolbar.menu.component';

@Injectable({
  providedIn: 'root',
})

export class ToolbarService {

  public toolbarMap = new Map();

  constructor() {
    this.toolbarMap.set('login', new ToolbarItem(ToolbarComponent, {page: 'You like it'}));
    this.toolbarMap.set('home', new ToolbarItem(ToolbarMenuComponent, {page: 'Inicio'}));
  }

  public addBasicToolbar(page: string, title: string): void {
    this.toolbarMap.set(page, new ToolbarItem(ToolbarBasicComponent, {page: title }));
  }

  public addEditionToolbar(page: string, titleNew: string, titleEdit: string, comp: any, elem: any): void {
    this.toolbarMap.set(page, new ToolbarItem(ToolbarEditionComponent,
      {titleNew: titleNew,titleEdit: titleEdit,comp:comp,elem:elem }));
  }


}
