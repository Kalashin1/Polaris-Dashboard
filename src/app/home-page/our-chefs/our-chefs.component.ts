import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Chef } from '../../interface/chef'
import { ChefService } from '../../services/chef.service'

@Component({
  selector: 'app-our-chefs',
  templateUrl: './our-chefs.component.html',
  styleUrls: ['./our-chefs.component.css']
})
export class OurChefsComponent implements OnInit {

  public chefs : Chef[];
  title = 'Meet Our Chefs';
  constructor(private chefService : ChefService) { }

  ngOnInit(): void {

  	this.chefService.getChefs().toPromise().then(obj => {
      this.chefs = obj;
      console.log(obj)
    })
  };

 customOptions : OwlOptions = {
    loop: true,
    autoplayHoverPause : true,
    autoplay: true,
    margin : 10,
    autoplayTimeout : 6000,
    mouseDrag : true,
    touchDrag : true,
    pullDrag : true,
    dotsEach : true,
    responsive : {
        0 : {
            items : 1
        },
        600 : {
            items : 2
        },
        1000 : {
            items : 3
        }
    }
  }

}
