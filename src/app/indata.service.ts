import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndataService {
  items = [];

  addToFile(customerData) {
    this.items.push(customerData);
  }

  constructor() { }

}