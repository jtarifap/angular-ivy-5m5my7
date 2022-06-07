import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { formUsersComponent } from './formUsers.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, formUsersComponent ],
                  bootstrap:    [ AppComponent, formUsersComponent ]
})
export class AppModule { }
