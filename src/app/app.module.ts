import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgxMaskModule} from 'ngx-mask';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

export const options: Partial<IConfig> | (() => Partial<IConfig>);

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { IndataService } from './indata.service';
import { PlansComponent } from './plans/plans.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
  NgxMaskModule.forRoot(),
  ShowHidePasswordModule,
  RouterModule.forRoot([
      { path: '', component: LoginPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'cadastro', component: CadastroComponent },
      { path: 'como', component: PlansComponent },
    ])
    ],
  declarations: [ AppComponent, HelloComponent, FooterComponent, HeaderComponent, LoginPageComponent, PlansComponent, CadastroComponent ],
  bootstrap:    [ AppComponent ],
  providers: [IndataService]
})
export class AppModule { }
