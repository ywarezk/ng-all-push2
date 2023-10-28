import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestOnPushComponent } from './test-on-push/test-on-push.component';
import { TestOnPush2Component } from './test-on-push2/test-on-push2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestOnPushComponent,
    TestOnPush2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
