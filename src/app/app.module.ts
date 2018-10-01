import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
