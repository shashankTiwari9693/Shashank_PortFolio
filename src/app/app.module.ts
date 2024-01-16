import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { LeftComponentComponent } from './components/left-component/left-component.component';
import { RightComponentComponent } from './components/right-component/right-component.component';
import { BodyComponentComponent } from './components/body-component/body-component.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectComponent } from './components/project/project.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    LeftComponentComponent,
    RightComponentComponent,
    BodyComponentComponent,
    AboutComponent,
    WorkComponent,
    ProjectComponent,
    GetInTouchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
