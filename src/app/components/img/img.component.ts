import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  constructor() {
    // Runs before render
    // NO async - - runs once time
    console.log('Construcción de app-img', '\n Valor de imagen : ', this.img);
    this.img = 'Inserte URL de imagen';
   }

  ngOnChanges(changes: SimpleChanges): void {
    // Runs before render - during render
    // runs once time for every input change
    console.log('ngOnChanges de app-img', '\n Valor de imagen : ', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    //Runs before render
    // Async - fetch, API, promises
    //runs once time
    console.log('ngOnInit de app-img', '\n Valor de imagen : ', this.img);
    /* CONTADOR DE EJEMPLO
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('running counter');
    }, 1000)
    */
  }

  ngAfterViewInit(): void {
    // runs after render
    // children handler
    // Directivas
    console.log('ngAfterViewInit de app-img');
  }

  ngOnDestroy(): void {
    // Detele component
    console.log('ngOnDestroy de app-img');
    // window.clearInterval(this.counterFn);
  }


  img: string = '';
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgNotFound: string = "./assets/images/image-not-found-300x225.jpg";
  counter = 0;
  counterFn: number | undefined;

  @Input() set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img : ', this.img);
    // Puedo aplicar un código
  }

  imgError() {
    this.img = this.imgNotFound;
  }

  imgLoaded() {
    console.log('loaded - child');
    this.loaded.emit(this.img);
  }

}
