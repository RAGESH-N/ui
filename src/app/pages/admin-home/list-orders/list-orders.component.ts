import { Component } from '@angular/core';

@Component({
  selector: 'app-list-orders',
  template: `
    <div class="list-orders">
      <h2>List of Orders</h2>
      <p>Here you can see and manage all orders.</p>
    </div>
  `,
  styles: [
    `
      .list-orders {
        text-align: center;
        padding: 20px;
      }
    `,
  ],
})
export class ListOrdersComponent {}