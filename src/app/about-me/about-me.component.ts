
import { animate, state, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { SlideInS, SlideOutS } from '../styleObjects/slide.style';
import { ProfileDocument } from '../entities/profile.types';
import { ScrollEventsService } from '../services/events/scroll.events.service';
import { TechnologyDocument } from '../entities/technologie.types';
@Component({
  animations: [
    trigger('slide', [
      state('show', SlideInS),
      state('hide', SlideOutS),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ],
  selector: 'about-me',
  styleUrls: ['./about-me.component.css'],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  public state: string = 'hide';

  @Input('profile') public profile: ProfileDocument | undefined = undefined;
  @Input('technologies') public technologies: Array<TechnologyDocument> | undefined = undefined;
  @Input('profilePicture') public profilePicture: string | undefined | null = undefined;

  public constructor(
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
