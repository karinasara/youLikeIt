import { Component, Input } from '@angular/core';

import {ToolbarComponent} from './toolbar.component';
import {EditionComponent} from '../../edition.component';

@Component({
  template: `
    <div style="width: 100%;color: white;">
      <mat-icon class="toolbar-icon" (click)="goBack()">keyboard_backspace</mat-icon>
      <span *ngIf="data.elem.id; else newComp">{{data.titleEdit}}</span>
      <ng-template #newComp>{{data.titleNew}}</ng-template>
      <span fxFlex></span>
      <mat-icon *ngIf="data.elem.id" class="toolbar-icon" (click)="delete()">delete</mat-icon>
      <mat-icon class="toolbar-icon" (click)="save()">check</mat-icon>
    </div>
  `,
  styles: [`
    :host {width: 100%;}
    .toolbar-icon {padding: 0 14px; margin-top: 5px;} `
  ]
})
export class ToolbarEditionComponent extends ToolbarComponent{
  @Input() data: any;

  public save(): void {
    (<EditionComponent>this.data.comp).save();
  }

  public delete(): void {
    (<EditionComponent>this.data.comp).delete(this.data.elem.id, this.data.elem.name);
  }

}

