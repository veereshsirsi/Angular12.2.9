import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { OneComponent } from './main/one/one.component';
import { ParentComponent } from './main/one/parent/parent.component';
import { ChildComponent } from './main/one/child/child.component';
import { Children1Component } from './main/one/children1/children1.component';
import { Children2Component } from './main/one/children2/children2.component';
import { FiltersPipe } from './filters.pipe';
import { CrudComponent } from './main/two/crud/crud.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OneComponent,
    ParentComponent,
    ChildComponent,
    Children1Component,
    Children2Component,
    FiltersPipe,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
