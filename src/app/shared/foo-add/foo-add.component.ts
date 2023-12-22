import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo-add',
  templateUrl: './foo-add.component.html',
  styleUrls: ['./foo-add.component.scss'],
})
export class FooAddComponent implements OnInit {
  constructor(private foodListService: FoodListService) {}
  public addItem(value: string) {
    this.foodListService.addItem(value);
  }

  ngOnInit(): void {}
}
