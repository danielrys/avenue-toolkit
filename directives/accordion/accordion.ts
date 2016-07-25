import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[accordion]', // Attribute selector
})
export class Accordion {
  @Input() openedIndex:number;
  items:any;
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (typeof this.openedIndex == "number" && this.items.length === this.openedIndex) {
      item.active = true;
    }
    this.items.push(item);
  }

  /**
   * @description Closes all accordion items except the one specified in param
   * @param {Object} exceptItem to be kept open
   */
  closeOthers(exceptItem) {
    this.items.forEach((item) => {
      if (item === exceptItem) return;
      item.active = false;
    });
  }
}
