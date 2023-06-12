import { animate, state, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener } from '@angular/core';
import { SlideInBottomUpS, SlideOutUpBottomS } from '../styleObjects/slide.style';
import { ScrollEventsService } from '../services/events/scroll.events.service';

@Component({
  animations: [
    trigger('slide', [
      state('show', SlideInBottomUpS),
      state('hide', SlideOutUpBottomS),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ],
  selector: 'contact',
  styleUrls: ['./contact.component.css'],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  public state: string = 'hide';

  public constructor(
    public el: ElementRef,
    private readonly scrollService: ScrollEventsService
  ) { }

  @HostListener('window:scroll', ['$event'])
  public checkScroll(): void {
    this.state = this.scrollService.checkScroll(this.el, 800);
  }
}
