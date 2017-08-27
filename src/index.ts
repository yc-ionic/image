import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from './component';

export * from './component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Image
  ],
  exports: [
    Image
  ]
})
export class ImageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ImageModule,
      providers: []
    };
  }
}
