import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  names: Array<string> = ['June', 'August', 'April', 'Paris'];
  constructor() { }
}
