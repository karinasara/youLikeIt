import { Component, Input }  from '@angular/core';
import {MatSidenav} from '@angular/material';
import {ToolbarComponent} from './toolbar.component';

@Component({
  template: `
    <div style="width: 100%; color: white;">
      <mat-icon class="toolbar-icon" (click)="goBack()">keyboard_backspace</mat-icon>
      <span>{{data.page}}</span>
      <span fxFlex></span>
    </div>
  `,
  styles: [`
    :host {width: 100%;}
    .toolbar-icon {padding: 0 14px;margin-top: 5px;} `
  ]
})
export class ToolbarBasicComponent extends ToolbarComponent{
  @Input() data: any;

}
