import { Component, ElementRef, HostListener } from '@angular/core';
import { ScrollEventsService } from '../services/events/scroll.events.service';
import { trigger, state, animate, transition } from '@angular/animations';
import { SlideInBottomUpS, SlideOutUpBottomS } from '../styleObjects/slide.style';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('slide', [
      state('show', SlideInBottomUpS),
      state('hide', SlideOutUpBottomS),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})
export class ContactComponent {

  public state = 'hide';

  constructor(
    public el: ElementRef,
    private readonly scrollService: ScrollEventsService
  ) { }

  @HostListener('window:scroll', ['$event'])
  public checkScroll(): void {
    this.state = this.scrollService.checkScroll(this.el, 800);
  }

}
