import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Made in hemp';
  email = 'juan.mato@lignumresources.com';
  copyright = 'Copyright &copy; Lignum Resources 2021'


  imageObject: Array<object> = [{
    image: 'assets/img/slider/IMG_1358.jpg',
    thumbImage: 'assets/img/slider/IMG_1358.jpg',
    alt: 'alt of image',
    title: 'title of image'
  },
 
];
}


