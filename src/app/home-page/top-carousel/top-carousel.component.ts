import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top-carousel',
  templateUrl: './top-carousel.component.html',
  styleUrls: ['./top-carousel.component.css']
})
export class TopCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions : OwlOptions = {
    loop: true,
    autoplayHoverPause : true,
    autoplay: true,
    autoplayTimeout : 6000,
    mouseDrag : true,
    touchDrag : true,
    pullDrag : true,
    dotsEach : true,
    navText : ['<span class="carousel-nav-left"><i class="fa fa-chevron-left grey-text text-lighten-2"></i></span>','<span class="carousel-nav-right"><i class="fa fa-chevron-right grey-text text-lighten-2"></i></span>'],
    items : 1
  }

  slideImages = [
      { title : '30mins Delivery!', message : 'Eat good food while you are alive, eat your foods as medicines.', pic : '../../../assets/images/slider/artem-beliaikin-TSS-1aqoRXE-unsplash.jpg'},

      { title : 'Tasty Snacks', message : 'Pizza that will make your tounge fall off.', pic : '../../../assets/images/slider/baked-pepperoni-pizza-774487.jpg'},

      { title : 'Ice, with Cream', message : 'Flavours from frozen disney land, all flavors and cobos of ice-cream', pic : '../../../assets/images/slider/fries-and-sauce-dip-1893555.jpg'},

      { title : 'Fruits Drink', message : 'Tropical fruits combo, drink freshly made juice with zero sugar', pic : '../../../assets/images/slider/jason-leung-poI7DelFiVA-unsplash.jpg'},
    ]

}
