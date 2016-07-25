import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Accordion } from '../../directives/accordion/accordion';


@Component({
  selector: 'accordion-item',
  template: `
    <div (click)="click()" class="accordion-item-head" tappable>
      <ng-content select="accordion-item-head"></ng-content>
      <ion-icon *ngIf="!active" name="ios-arrow-down" item-right></ion-icon>
      <ion-icon *ngIf="active" name="ios-arrow-up" item-right primary></ion-icon>
    </div>
    <div class="container" #containerElement [ngStyle]="setStyles()">
      <ng-content select="accordion-item-content"></ng-content>
    </div>
  `,
  //styles: [require('./accordion-item.scss')], //TODO make this work
  directives: []
})
export class AccordionItem {
  @ViewChild('containerElement') containerElement:any;

  @Input() group:any;
  acordion:Accordion;
  active:boolean = false;
  visible:boolean;
  constructor(private accordion:Accordion) {
  }

  setStyles() {
    var height = this.containerElement.nativeElement.scrollHeight;

    let styles = {
      'height':  (this.active) ? height+'px' : '0px',
    };
    return styles;
  }

  ngOnInit() {
    this.active = false;
    this.accordion.addItem(this);


  }

  click() {
    this.active = !this.active;
    this.accordion.closeOthers(this);
  }
}
