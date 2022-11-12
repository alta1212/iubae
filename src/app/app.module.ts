import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {JwtModule} from "@auth0/angular-jwt";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './heart/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { KhumphaibaeComponent } from './auth/khumphaibae/khumphaibae.component';
export function returnToken()
{
    return localStorage.getItem('token')
}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    KhumphaibaeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:returnToken,
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
