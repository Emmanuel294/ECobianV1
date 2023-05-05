import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollEventsService {

  constructor() { }

  public checkScroll(el: ElementRef, distance: number = 600): string {
    const componentPosition = el.nativeElement.offsetTop
    const scrollPosition = window.scrollY
    if (scrollPosition >= componentPosition - distance) {
      return 'show'
    } else {
      return 'hide'
    }
  }
}
