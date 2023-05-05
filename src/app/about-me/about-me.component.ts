import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ProfileDocument } from '../entities/profile.types';
import { TechnologyDocument } from '../entities/technologie.types';
import { trigger, state, animate, transition } from '@angular/animations';
import { SlideInS, SlideOutS } from '../styleObjects/slide.style';
import { ScrollEventsService } from '../services/events/scroll.events.service';
@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('slide', [
      state('show', SlideInS),
      state('hide', SlideOutS),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})
export class AboutMeComponent {

  public state = 'hide';

  @Input('profile') profile: ProfileDocument | undefined = undefined;
  @Input('technologies') technologies: Array<TechnologyDocument> | undefined = undefined;
  @Input('profilePicture') profilePicture: string | undefined | null = undefined;

  constructor(
    public el: ElementRef,
    private readonly scrollService: ScrollEventsService
  ) { }

  public getTechnologiesStringArray(): Array<string> {
    if (!this.technologies) return [];
    return this.technologies?.map(
      (technology: TechnologyDocument): string => {
        return technology.name;
      }
    );
  }

  @HostListener('window:scroll', ['$event'])
  public checkScroll(): void {
    this.state = this.scrollService.checkScroll(this.el);
  }

}
