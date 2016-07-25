"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AccordionItem = (function () {
    function AccordionItem(accordion) {
        this.accordion = accordion;
        this.active = false;
    }
    AccordionItem.prototype.setStyles = function () {
        var height = this.containerElement.nativeElement.scrollHeight;
        var styles = {
            'height': (this.active) ? height + 'px' : '0px'
        };
        return styles;
    };
    AccordionItem.prototype.ngOnInit = function () {
        this.active = false;
        this.accordion.addItem(this);
    };
    AccordionItem.prototype.click = function () {
        this.active = !this.active;
        this.accordion.closeOthers(this);
    };
    __decorate([
        core_1.ViewChild('containerElement')
    ], AccordionItem.prototype, "containerElement");
    __decorate([
        core_1.Input()
    ], AccordionItem.prototype, "group");
    AccordionItem = __decorate([
        core_1.Component({
            selector: 'accordion-item',
            template: "\n    <div (click)=\"click()\" class=\"accordion-item-head\" tappable>\n      <ng-content select=\"accordion-item-head\"></ng-content>\n      <ion-icon *ngIf=\"!active\" name=\"ios-arrow-down\" item-right></ion-icon>\n      <ion-icon *ngIf=\"active\" name=\"ios-arrow-up\" item-right primary></ion-icon>\n    </div>\n    <div class=\"container\" #containerElement [ngStyle]=\"setStyles()\">\n      <ng-content select=\"accordion-item-content\"></ng-content>\n    </div>\n  ",
            //styles: [require('./accordion-item.scss')], //TODO make this work
            directives: []
        })
    ], AccordionItem);
    return AccordionItem;
}());
exports.AccordionItem = AccordionItem;
