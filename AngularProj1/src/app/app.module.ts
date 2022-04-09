import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommunityComponent } from './components/community/community.component';
import { HomeComponent } from './components/community/home/home.component';
import { AboutUsComponent } from './components/community/about-us/about-us.component';
import { ProductServicesComponent } from './components/community/product-services/product-services.component';
import { GalleryComponent } from './components/community/gallery/gallery.component';
import { ContactUsComponent } from './components/community/contact-us/contact-us.component';
import { RegisterComponent } from './components/community/register/register.component';
import { DonationComponent } from './components/community/donation/donation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CommunityComponent,
    HomeComponent,
    AboutUsComponent,
    ProductServicesComponent,
    GalleryComponent,
    ContactUsComponent,
    RegisterComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatCarouselModule.forRoot(),
    //NgbModule.forRoot(),
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
