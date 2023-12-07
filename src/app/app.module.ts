import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { EditComponent } from './edit/edit.component';
import { UrlConfig } from 'src/env/UrlConfig';
import { SpinningComponent } from './shared/spinning/spinning.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    FooterComponent,
    HeaderComponent,
    EditComponent,
    SpinningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UrlConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
