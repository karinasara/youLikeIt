import { Component, Input } from '@angular/core';

@Component({
  template: `
    <div style="color: white;">
      <span>{{data.page}}</span>
    </div>
  `
})
export class ToolbarComponent {
  @Input() data: any;

  goBack(): void {
    this.data.location.back();
  }
}
