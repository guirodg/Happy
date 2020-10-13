import { APP_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageMapRoutingModule } from './page-map-routing.module';
import { PageMapComponent } from './page-map/page-map.component';

import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [PageMapComponent],
  imports: [
    CommonModule,
    PageMapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.APP_ID
    })
  ]
})
export class PageMapModule { }
