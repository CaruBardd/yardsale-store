import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgNotFound: string = "./assets/images/image-not-found-300x225.jpg";

  imgError() {
    this.img = this.imgNotFound;
  }

  imgLoaded() {
    console.log('loaded - child');
    this.loaded.emit(this.img);
  }

}
