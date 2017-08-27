import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, SimpleChange } from '@angular/core';

import { ImageModule, Image } from '../src/';

describe('SampleComponent', () => {
  let fixture: ComponentFixture<Image>;
  let comp: Image;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ImageModule.forRoot()
      ]
    });

    fixture = TestBed.createComponent(Image);
    comp = fixture.componentInstance;
  });

  it('Should display flex', () => {
    expect(fixture.nativeElement.style.display).toBe('flex');
  });

  it('Should have changed', fakeAsync(() => {
    comp.src = 'abc';
    comp.image.nativeElement.getBoundingClientRect = () => {
      return {
        width: 100
      }
    }
    comp.ngOnChanges({
      src: new SimpleChange(undefined, 'abc', false)
    });
    fixture.detectChanges();
    expect(comp.image.nativeElement.style.height).toBe('100px');
  }));

  it('Should have oss style', fakeAsync(() => {
    comp.src = 'abc';
    comp.style = 'wap';
    comp.ngOnChanges({
      src: new SimpleChange(undefined, 'abc', false),
      style: new SimpleChange(undefined, 'wap', false)
    });
    fixture.detectChanges();
    const src = 'url(abc?x-oss-process=style/wap)'; 
    expect(comp.image.nativeElement.style.backgroundImage).toBe(src);
  }));
});
