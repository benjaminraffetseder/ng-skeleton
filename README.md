![alt text](https://api.benjamin-raffetseder.com/storage/uploads/2020/10/07/5f7d63fac6831ngskeleton.gif "Ng-Skeleton Preview")
<h1 align="center">Ng-Skeleton</h1>

#### Stackblitz Example 

[https://stackblitz.com/edit/ng-skeleton-demo](https://stackblitz.com/edit/ng-skeleton-demo) 

## Overview

* [Install](#install)
* [Usage](#usage)
* [Options](#options)

# Install

```
npm install ng-skeleton --save
```

## Usage

Add ```NgSkeletonModule``` to your module's ```imports```

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { NgSkeletonModule } from 'ng-skeleton';

@NgModule({
  imports: [BrowserModule, NgSkeletonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

```

And then use it in your component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `<ng-skeleton></ng-skeleton>`
})
export class AppComponent {
}
```

## Options
* [[skelCircle]](#skelCircle)
* [[skelWidth]](#skelWidth)
* [[skelHeight]](#skelHeight)

#### [skelCircle]

| Property | Type | Required | |
| --- | ---- | --- | --- |
| [skelCircle] | *boolean* | Optional | Displays the component as a circle |

#### [skelWidth]

| Property | Type | Required |  |
| --- | ---- | --- | --- |
| [skelWidth] | *number* | Optional | Defines the width in px (default: 100%) |

#### [skelHeight]

| Property | Type | Required |  |
| --- | ---- | --- | --- |
| [skelHeight] | *number* | Optional | Defines the width in px (default: 20px) |

## Donation
If this project help you reduce time to develop, you can donate me a cup of hot chocolate (:

[Buy Me A Coffee](https://www.buymeacoffee.com/benraffetseder)


## License

[MIT](https://tldrlegal.com/license/mit-license) © [Benjamin Raffetseder](https://github.com/benjaminraffetseder)
