import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  communityLogo: any = "../assets/img/city.jpg";
  loggedInUserName: any = "";

  goToHome(){
    this.router.navigate(['/home']);
  }

  goToAboutUs(){
    this.router.navigate(['/about-us']);
  }

  goToProdServices(){
    this.router.navigate(['/product-services']);
  }

  goToGallery(){
    this.router.navigate(['/gallery']);
  }

  goToContactUs(){
    this.router.navigate(['/contact-us']);
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  goToDonation(){
    this.router.navigate(['/donation']);
  }

}
