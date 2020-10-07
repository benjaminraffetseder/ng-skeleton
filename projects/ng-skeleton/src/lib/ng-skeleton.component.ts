import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-skeleton',
  templateUrl: 'ng-skeleton.component.html',
  styleUrls: ['ng-skeleton.component.css']
})
export class NgSkeletonComponent implements OnInit {

  @Input() skelBackground: string;

  @Input() skelWidth: number;
  @Input() skelHeight: number;
  @Input() skelSpeed: number;

  @Input() skelCircle: boolean;
  @Input() skelLight: boolean;
  @Input() skelDark: boolean;


  constructor() { }

  ngOnInit(): void { }

  skeletonOptions() {
    const skeletonOptions = {
      'width.px': this.skelWidth ? this.skelWidth : '',
      'height.px': this.skelHeight ? this.skelHeight : '',
      'border-radius': this.skelCircle ? '50%' : '',
      'background-color': this.skelBackground ? this.skelBackground : ''
    };
    return skeletonOptions;
  }
  loadingOptions() {
    const loadingOptions = {
      animation: this.skelSpeed
        ? `loading ease-in-out ${this.skelSpeed}ms infinite`
        : 'loading 1s infinite ease-in-out',
    };
    return loadingOptions;
  }
}
