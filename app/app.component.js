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
var veggie_form_component_1 = require('./veggie.form.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Newly Born Organic Neighbors!';
        this.welcomeMsg = 'Welcome to Organic Farms!';
        this.veggies = [new veggie_1.Veggie(1, 'Carrot', 'Un-Classified', 'Red', 12),
            new veggie_1.Veggie(2, 'Beans', 'Un-Classified', 'Red', 12),
            new veggie_1.Veggie(3, 'Spinach', 'Un-Classified', 'Red', 12),
            new veggie_1.Veggie(4, 'Watermelon', 'Un-Classified', 'Red', 12),
            new veggie_1.Veggie(5, 'Berries', 'Un-Classified', 'Red', 12)];
        this.selectedVeggie = this.veggies[0];
    }
    AppComponent.prototype.addVeggie = function (newVeggie) {
        this.veggies.push(new veggie_1.Veggie(this.veggies.length, newVeggie.value, 'Un-Classified', 'Red', 12));
        newVeggie.value = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [veggie_form_component_1.VeggieFormComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map