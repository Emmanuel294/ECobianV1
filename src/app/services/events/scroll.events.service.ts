import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollEventsService {
  public checkScroll(el: ElementRef, distance: number = 600): string {
    const componentPosition: number = el.nativeElement.offsetTop
    const scrollPosition: number = window.scrollY
    if (scrollPosition >= componentPosition - distance) {
      return 'show'
    } else {
      return 'hide'
    }
  }
}
