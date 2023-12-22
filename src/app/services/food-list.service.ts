import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = ['Arroz', 'massa', 'Feijao'];
  constructor() {}
  public getList() {
    return this.list;
  }
}
