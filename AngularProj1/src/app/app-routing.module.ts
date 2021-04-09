import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatCarouselModule } from '@ngmodule/material-carousel';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MymodelsComponent } from './components/mymodels/mymodels.component';


const routes: Routes = [
  { path: 'mymodels', component: MymodelsComponent },
  { path: '**', component: MymodelsComponent }
];

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(routes),
    MatCarouselModule.forRoot()
  ],
  exports: [RouterModule],
  //declarations: [ AppComponent ], 
  bootstrap: [AppComponent]
})

export class AppRoutingModule {
}
