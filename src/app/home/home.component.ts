import { Component, OnInit } from '@angular/core';
import { GetImagesService } from '../get-images.service';
import { Images } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carousels: Images[];
  constructor(private imageService: GetImagesService) {}

  ngOnInit(): void {
    this.carousels = this.imageService.getImages();
  }

  setClasses(carousel) {
    const classes = {
      'carousel-img': true,
      'carousel-active': carousel.active,
    };
    return classes;
  }
}
