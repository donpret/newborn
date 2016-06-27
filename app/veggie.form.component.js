"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var veggie_1 = require('./veggie');
var VeggieFormComponent = (function () {
    function VeggieFormComponent() {
        this.types = ['Organic', 'Non-GMO',
            'GMO', 'Un-Classified'];
        this.model = new veggie_1.Veggie();
        this.submitted = false;
        this.active = true;
    }
    VeggieFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(VeggieFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    VeggieFormComponent.prototype.newVeggie = function () {
        var _this = this;
        this.model = new veggie_1.Veggie();
        this.active = false;
        this.submitted = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    VeggieFormComponent = __decorate([
        core_1.Component({
            selector: 'veggie-form',
            templateUrl: 'app/veggie-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], VeggieFormComponent);
    return VeggieFormComponent;
}());
exports.VeggieFormComponent = VeggieFormComponent;
//# sourceMappingURL=veggie.form.component.js.map