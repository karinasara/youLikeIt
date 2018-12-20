import { Type } from '@angular/core';

export class ToolbarItem{
  constructor(public component: Type<any>, public data: any) {}
}
