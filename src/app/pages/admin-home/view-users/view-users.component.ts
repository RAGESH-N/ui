import { Component } from '@angular/core';

@Component({
  selector: 'app-view-users',
  template: `
    <div class="view-users">
      <h2>View Users</h2>
      <p>Here you can manage the list of users.</p>
    </div>
  `,
  styles: [
    `
      .view-users {
        text-align: center;
        padding: 20px;
      }
    `,
  ],
})
export class ViewUsersComponent {}