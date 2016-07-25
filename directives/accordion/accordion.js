"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Accordion = (function () {
    function Accordion() {
        this.items = [];
    }
    Accordion.prototype.addItem = function (item) {
        if (typeof this.openedIndex == "number" && this.items.length === this.openedIndex) {
            item.active = true;
        }
        this.items.push(item);
    };
    /**
     * @description Closes all accordion items except the one specified in param
     * @param {Object} exceptItem to be kept open
     */
    Accordion.prototype.closeOthers = function (exceptItem) {
        this.items.forEach(function (item) {
            if (item === exceptItem)
                return;
            item.active = false;
        });
    };
    __decorate([
        core_1.Input()
    ], Accordion.prototype, "openedIndex");
    Accordion = __decorate([
        core_1.Directive({
            selector: '[accordion]'
        })
    ], Accordion);
    return Accordion;
}());
exports.Accordion = Accordion;
