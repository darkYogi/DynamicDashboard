import { IWidgetComponent } from './interfaces';
import { Directive, ViewContainerRef, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import * as Packery from 'packery';
import * as Draggabilly from 'draggabilly';

import { EventBusService } from '../core/event-bus.service';
import { IPackerySizes } from 'app/shared/interfaces';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[dd-packery]',
})
export class PackeryDirective implements OnDestroy {

  private packery: Packery;
  private draggabillySubscription: Subscription;
  private gutter = 2;

  constructor(private viewContainerRef: ViewContainerRef, private eventBusService: EventBusService) {
  }

  public onItemsReady(itemSelector: string, columnWidth: number) {
    this.initializePackery(itemSelector, columnWidth);
    this.draggabillySubscription = this.eventBusService.getDraggabillyInstance()
      .subscribe((draggabilly: Draggabilly) => this.setDraggabillyEvents(draggabilly));
  }

  public getPackyerColmunWidths(container: ElementRef, itemsCount: number): IPackerySizes {
    const rowSize = Math.min(3, itemsCount);
    const computedStyle = window.getComputedStyle(container.nativeElement);
    const dashboardPadding = parseFloat(computedStyle.getPropertyValue('padding'));
    const dashboardWidth = parseFloat(computedStyle.getPropertyValue('width'));
    const defaultColumnWidth = Math.ceil(dashboardWidth / rowSize - dashboardPadding * 2);
    this.gutter = Math.floor((dashboardWidth - defaultColumnWidth * rowSize - dashboardPadding * 2) / (rowSize - 1));
    const packerySizes: IPackerySizes = {
      singleWidth: defaultColumnWidth,
      doubleWidth: defaultColumnWidth * 2 + this.gutter,
      fullWidth: defaultColumnWidth * 3 + this.gutter * 2
    }
    return packerySizes;
  }

  private initializePackery(itemSelector: string, columnWidth: number) {
    const nativeElement = this.viewContainerRef.element.nativeElement;
    this.packery = new Packery(nativeElement, {
      itemSelector: itemSelector,
      gutter: this.gutter,
      percentPosition: true,
      columnWidth: columnWidth,
      transitionDuration: '.8s'
    });
  }

  private setDraggabillyEvents(draggabilly: Draggabilly) {
    this.packery.bindDraggabillyEvents(draggabilly);
  }

  onItemAppend(element: ElementRef) {
    this.packery.appended(element.nativeElement);
  }

  onItemRemove(element: ElementRef) {
    this.packery.remove(element.nativeElement);
  }

  refreshLayout() {
    this.packery.shiftLayout();
  }

  ngOnDestroy(): void {
    this.draggabillySubscription.unsubscribe();
  }
}
