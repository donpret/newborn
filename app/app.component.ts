import { Component } from '@angular/core';
import { Veggie } from './veggie';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
title = 'Newly Born Organic Neighbors!';
welcomeMsg = 'Welcome to Organic Farms!';
veggies = [new Veggie(1,'Carrot'),
	new Veggie(2,'Beans'),
	new Veggie(3, 'Spinach'),
	new Veggie(4, 'Watermelon'),
	new Veggie(5, 'Berries')];
selectedVeggie = this.veggies[0];

addVeggie(newVeggie:any){
	this.veggies.push(new Veggie(this.veggies.length, newVeggie.value);
	newVeggie.value = '';
}
}
