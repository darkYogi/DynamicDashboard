import { element } from 'protractor';
import { IWidgetParams } from './interfaces';
import { Type, Component } from '@angular/core';
export interface INavItem {
    id: number;
    name: string;
    path: string;
}

export interface IWidgetComponent {
    columnWidth: number;
    data: string[][];
    destroy: () => void;
}

export interface IPackerySizes {
    singleWidth: number;
    doubleWidth: number;
    fullWidth: number;
}

export interface Message {
    fromId: number;
    from: string;
    to: string;
    timeStamp: string;
    message: string;
}

export interface IWidgetMetadata {
    type: Type<{}>;
    size: string;
}

export interface IWidgetParams {
    id: number;
    widgetName: string;
    dataParams: any;
    position: IPosition
}

export interface IWidgetMenuItem {
    display: string;
    widgetParams: IWidgetParams
}

export interface IPosition {
    x: number;
    y: number
}

export interface IPositionParam {
    element: HTMLElement;
    position: IPosition;
}
