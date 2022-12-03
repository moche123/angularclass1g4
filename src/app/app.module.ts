import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PipedirectivaComponent } from './pipedirectiva/pipedirectiva.component';
import { OrderAgeDirective } from './directivas/order-age.directive';
import { OrderAgePipe } from './pipe/order-age.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './parent/children/children.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [ //! COMPONENTES
    AppComponent,
    PipedirectivaComponent,
    OrderAgeDirective,
    OrderAgePipe,
    ParentComponent,
    ChildrenComponent
  ],
  imports: [//! MODULOS
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
