import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-skeleton',
  templateUrl: 'ng-skeleton.component.html',
  styleUrls: ['ng-skeleton.component.css']
})
export class NgSkeletonComponent implements OnInit {

  @Input() skelWidth: number;
  @Input() skelHeight: number;
  @Input() skelCircle: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getStyles() {
    const myStyles = {
      'width.px': this.skelWidth ? this.skelWidth : '',
      'height.px': this.skelHeight ? this.skelHeight : '',
      'border-radius': this.skelCircle ? '50%' : ''
    };
    return myStyles;
  }

}
