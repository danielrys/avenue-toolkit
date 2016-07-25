import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Accordion } from '../../directives/accordion/accordion';


@Component({
  selector: 'accordion-item',
  templateUrl: 'build/components/accordion-item/accordion-item.html',
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
