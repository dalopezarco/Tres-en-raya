import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TresenrayaComponent } from './tresenraya/tresenraya.component';

@NgModule({
  declarations: [
    AppComponent,
    TresenrayaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
