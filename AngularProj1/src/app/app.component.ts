import { Component } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProj1';


  //Slider images
  slides = [
    {'image': './../assets/img/la.jpg'}, 
    {'image': './../assets/img/ny.jpg'},
    {'image': './../assets/img/chicago.jpg'}, 
    {'image': './../assets/img/city.jpg'}, 
    {'image': './../assets/img/profile_city.jpg'}
  ];

}
