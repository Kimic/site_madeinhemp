import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  arrayImagenes: Array<object>;
  imagenObject: object;
  constructor() { }

  ngOnInit(): void {
    this.arrayImagenes = [];
    this.cargarImagenes();
  }

  cargarImagenes(){
    let contador = 1357;
   
    for (let index = 0; index < 19; index++) {
      contador++;
      if(index == 15){
        contador = 1392;
      }
      this.imagenObject = {
        image: 'assets/img/slider/IMG_' + contador +'.JPG',
        thumbImage: 'assets/img/slider/IMG_' + contador +'-min.JPG',
        alt: '',
        title: ''
      }

      this.arrayImagenes.push(this.imagenObject);
     
    }
  }
}
