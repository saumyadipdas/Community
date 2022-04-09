import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/community/home/home.component';
import { AboutUsComponent } from './components/community/about-us/about-us.component';
import { ContactUsComponent } from './components/community/contact-us/contact-us.component';
import { DonationComponent } from './components/community/donation/donation.component';
import { GalleryComponent } from './components/community/gallery/gallery.component';
import { ProductServicesComponent } from './components/community/product-services/product-services.component';
import { RegisterComponent } from './components/community/register/register.component';



const routes: Routes = [
  //{ path: '/', component: HomeComponent },
  //{ path: '/',redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'product-services', component: ProductServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'donation', component: DonationComponent },
  { path: '**', component: HomeComponent }
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
