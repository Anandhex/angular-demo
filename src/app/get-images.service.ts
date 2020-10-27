import { Injectable } from '@angular/core';

// interface Images {
//   url: string;
//   pos: number;
// }
@Injectable({
  providedIn: 'root',
})
export class GetImagesService {
  constructor() {}

  getImages() {
    const images = [];
    for (let i = 0; i < 12; i++) {
      images.push({
        url: `https://source.unsplash.com/random?sig=${Math.random() * 1010}`,
      });
    }
    return images;
  }
}
