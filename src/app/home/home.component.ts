import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public foods: any;

  constructor(private apiService: ServicesService) { }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods() {
    this.apiService.getFoods().subscribe(
      data => { this.foods = data },
      err => console.error(err),
      () => console.log('done loading foods', this.foods)
    );
    console.log('%c Oh my heavens! ', 'background: green; color: #bada55', this.foods);
  }
}
