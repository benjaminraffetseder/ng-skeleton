import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSkeletonComponent } from './ng-skeleton.component';



@NgModule({
  declarations: [NgSkeletonComponent],
  imports: [
    CommonModule
  ],
  exports: [NgSkeletonComponent]
})
export class NgSkeletonModule { }
