import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodlist: Array<string> = [];
  constructor(private foodListService: FoodListService) {}

  ngOnInit() {
    this.foodlist = this.foodListService.getList();
  }
}
