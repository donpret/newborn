import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Veggie }    from './veggie';
@Component({
  selector: 'veggie-form',
  templateUrl: 'app/veggie-form.component.html'
})
export class VeggieFormComponent {
  types = ['Organic', 'Non-GMO',
            'GMO', 'Un-Classified'];
  model = new Veggie();
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  
  active = true;
  newVeggie() {
    this.model = new Veggie();
    this.active = false;
	this.submitted = false;
    setTimeout(() => this.active = true, 0);
  }
   
}
