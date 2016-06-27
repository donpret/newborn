import { Component } from '@angular/core';
import { Veggie } from './veggie';
import { VeggieFormComponent } from './veggie.form.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [VeggieFormComponent]
})
export class AppComponent {
title = 'Newly Born Organic Neighbors!';
welcomeMsg = 'Welcome to Organic Farms!';
veggies = [new Veggie(1,'Carrot','Un-Classified','Red', 12),
	new Veggie(2,'Beans','Un-Classified','Red', 12),
	new Veggie(3, 'Spinach','Un-Classified','Red', 12),
	new Veggie(4, 'Watermelon','Un-Classified','Red', 12),
	new Veggie(5, 'Berries','Un-Classified','Red', 12)];
selectedVeggie = this.veggies[0];

addVeggie(newVeggie:any){
	this.veggies.push(new Veggie(this.veggies.length, newVeggie.value,'Un-Classified','Red', 12));
	newVeggie.value = '';
}
}
