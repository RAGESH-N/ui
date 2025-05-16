import { Component } from '@angular/core';

@Component({
  selector: 'app-add-restaurants',
  template: `
    <div class="add-restaurants">
      <h2>Add Restaurants</h2>
      <p>Here you can add new restaurants to the system.</p>
    </div>
  `,
  styles: [
    `
      .add-restaurants {
        text-align: center;
        padding: 20px;
      }
    `,
  ],
})
export class AddRestaurantsComponent {}