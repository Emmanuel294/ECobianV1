import { Component, Input, OnInit } from '@angular/core';
import { ProfileDocument } from '../entities/profile.types';
import { TechnologyDocument } from '../entities/technologie.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  @Input('profile') profile: ProfileDocument | undefined = undefined;
  @Input('technologies') technologies: Array<TechnologyDocument> | undefined = undefined;
  @Input('profilePicture') profilePicture: string | undefined | null = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public getTechnologiesStringArray(): Array<string> {
    if (!this.technologies) return [];
    return this.technologies?.map(
      (technology: TechnologyDocument): string => {
        return technology.name;
      }
    );
  }

}
