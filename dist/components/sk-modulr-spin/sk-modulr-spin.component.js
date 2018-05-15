"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var abstract_loader_component_1 = require("../abstract.loader.component");
var SkModulrSpinComponent = (function (_super) {
    __extends(SkModulrSpinComponent, _super);
    function SkModulrSpinComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkModulrSpinComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sk-modulr-spin',
                    template: "<div class=\"sk-modulr-spin\" [class.colored]=\"!backgroundColor\"><div class=\"sk-rect sk-rect1\" [style.background-color]=\"backgroundColor\"></div><div class=\"sk-rect sk-rect2\" [style.background-color]=\"backgroundColor\"></div><div class=\"sk-rect sk-rect3\" [style.background-color]=\"backgroundColor\"></div><div class=\"sk-rect sk-rect4\" [style.background-color]=\"backgroundColor\"></div><div class=\"sk-rect sk-rect5\" [style.background-color]=\"backgroundColor\"></div></div>",
                    styles: [".sk-modulr-spin{position:relative;top:50%;margin:auto;width:50px;height:40px;text-align:center;font-size:10px}.sk-modulr-spin .sk-rect{float:left;margin-right:1px;height:100%;width:6px;display:inline-block;-webkit-animation:sk-modulr-spinStretchDelay 1.2s infinite ease-in-out;animation:sk-modulr-spinStretchDelay 1.2s infinite ease-in-out}.sk-modulr-spin .sk-rect1{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.sk-modulr-spin .sk-rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-modulr-spin .sk-rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-modulr-spin .sk-rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-modulr-spin .sk-rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes sk-modulr-spinStretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes sk-modulr-spinStretchDelay{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}"]
                },] },
    ];
    return SkModulrSpinComponent;
}(abstract_loader_component_1.AbstractLoader));
exports.SkModulrSpinComponent = SkModulrSpinComponent;
//# sourceMappingURL=sk-modulr-spin.component.js.map