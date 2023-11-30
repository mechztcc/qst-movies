import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenInformationService {
  innerHeight: number = 0;
  innerWidth: number = 0;

  
  constructor() {}
}
