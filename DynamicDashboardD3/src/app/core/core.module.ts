import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { EventBusService } from './event-bus.service';
import { D3Service } from './d3.service';
import { CensusDataService } from './census-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [EventBusService, D3Service, CensusDataService],
  declarations: []
})
export class CoreModule { }
