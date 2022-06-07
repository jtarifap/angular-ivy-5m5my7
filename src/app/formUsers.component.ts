import { Component, Input } from '@angular/core';

@Component({
  selector: 'formUsers',
  template: `<h1>Lista Usuarios!</h1><br>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class formUsersComponent {
  @Input() name: string;
}
