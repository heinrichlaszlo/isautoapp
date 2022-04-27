import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {IsmenetlevelService} from "./ismenetlevel.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {IsautoService} from "./isauto.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [IsmenetlevelService, IsautoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
