import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  onToggle() {
    const html = document.querySelector('html').classList;
    if (!html.contains('dark')) {
      html.add('dark');
    } else {
      html.remove('dark');
    }
  }
}
