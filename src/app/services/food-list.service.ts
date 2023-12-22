import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  public emit = new EventEmitter();

  private list: Array<string> = ['Arroz', 'massa', 'Feijao'];
  constructor() {}
  public getList() {
    return this.list;
  }
  addItem(itemName: string) {
    this.foodInfo(itemName);
    return this.list.push(itemName);
  }

  public foodInfo(value: string) {
    return this.emit.emit(value);
  }
}
