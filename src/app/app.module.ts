import { AppBootstrapModule } from './app-bootstrap/app.bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TrainComponent } from './train/train.component';
import { BusComponent } from './bus/bus.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrainComponent,
    BusComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'flights',component: SearchComponent},
      {path:'trains', component:TrainComponent},
      {path:'bus', component:BusComponent},
      {path:'',redirectTo:'flights', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
