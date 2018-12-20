import { Component, Input }  from '@angular/core';
import {MatSidenav} from '@angular/material';
import {ToolbarComponent} from './toolbar.component';

@Component({
  template: `
    <div style="width: 100%;color: white;">
      <mat-icon class="toolbar-icon" (click)="toggle()">menu</mat-icon>
      <span>{{data.page}}</span>
      <span fxFlex></span>
      <mat-icon class="toolbar-icon" routerLink="/profile" style="cursor: pointer;">account_circle</mat-icon>
    </div>
  `,
  styles: [`
  :host {width: 100%;}
  .toolbar-icon {padding: 0 14px; margin-top: 5px;} `
  ]
})
export class ToolbarMenuComponent extends ToolbarComponent {
  @Input() data: any;

  public toggle(): void {
    (<MatSidenav>this.data.sideNav).toggle();
  }

}
