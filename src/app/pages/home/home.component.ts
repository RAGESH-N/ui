import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userId: string = '';
  profilePhoto: string = '';
  dishes: any[] = [];
  selectedType: string = '';
  priceSort: string = '';
  restaurantSearch: string = '';

  constructor(
    private router: Router,
    private dishService: DishService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId') || 'Guest';
    this.profilePhoto = localStorage.getItem('profilePhoto') || 'assets/default-profile.png';
    if (this.userId === 'Guest') {
      this.router.navigate(['/login']);
      return;
    }

    // Fetch all dishes
    this.dishService.getAllDishes().subscribe(
      (data) => this.dishes = data,
      (error) => console.error('Error fetching dishes:', error)
    );
  }

  get filteredDishes() {
    let filtered = this.dishes;

    // Restaurant name search filter (case-insensitive, partial match)
    if (this.restaurantSearch && this.restaurantSearch.trim() !== '') {
      filtered = filtered.filter(d =>
        d.restaurantName && d.restaurantName.toLowerCase().includes(this.restaurantSearch.toLowerCase())
      );
    }

    // Veg/Non-Veg filter
    if (this.selectedType) {
      filtered = filtered.filter(d =>
        d.type && d.type.toLowerCase() === this.selectedType.toLowerCase()
      );
    }

    // Price Sort
    if (this.priceSort === 'asc') {
      filtered = filtered.slice().sort((a, b) => Number(a.price) - Number(b.price));
    } else if (this.priceSort === 'desc') {
      filtered = filtered.slice().sort((a, b) => Number(b.price) - Number(a.price));
    }

    return filtered;
  }

  goToProfile(): void {
    this.router.navigate(['/profile']);
  }

  onSignout(): void {
    localStorage.clear();
    this.router.navigate(['/welcome']);
  }
}