import { ViewChild, ElementRef, Input, Component, OnChanges } from '@angular/core';

@Component({
  selector: 'yci-image',
  template: '<div #image></div>'
})
export class Image implements OnChanges {
  @Input() src: string;
  @Input() ratio: number = 1;
  @Input() width: string = '100%';
  @Input('oss-style') style: string;
  @ViewChild('image') image: ElementRef;

  constructor(el: ElementRef) { 
    el.nativeElement.style.display = 'flex';
  }

  ngOnChanges(changed: any): void {
    this.image.nativeElement.style.width = this.width;
    let width: number = this.image.nativeElement.getBoundingClientRect().width;
    this.image.nativeElement.style.height = width * this.ratio + 'px';
    let src = this.src;
    if(this.style) src += `?x-oss-process=style/${this.style}`;
    this.image.nativeElement.style.backgroundImage = `url(${src})`;
    this.image.nativeElement.style.backgroundRepeat = 'no-repeat';
    this.image.nativeElement.style.backgroundSize = 'cover';
  }
}
