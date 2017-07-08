import { NgModule, Component, Type } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { CommonModule } from '@angular/common';

import { WidgetHostDirective } from './widget-host.directive';
import { DisplayWidgetComponent } from './display-widget/display-widget.component';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WidgetHostDirective
  ],
  declarations: [WidgetHostDirective, DisplayWidgetComponent, ChartWidgetComponent],
  entryComponents: [DisplayWidgetComponent, ChartWidgetComponent]
})
export class WidgetModule {
  static WidgetComponents: { [key: string]: Type<{}> } = {
    "DisplayWidgetComponent": DisplayWidgetComponent,
    "ChartWidgetComponent": ChartWidgetComponent
  }
}
