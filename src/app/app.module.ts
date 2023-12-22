import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayBindComponent } from './components/two-way-bind/two-way-bind.component';
import { FoodListComponent } from './shared/food-list/food-list.component';
import { FooAddComponent } from './shared/foo-add/foo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DirectivasComponent,
    IfRenderComponent,
    EventosComponent,
    EmiterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    TwoWayBindComponent,
    FoodListComponent,
    FooAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
