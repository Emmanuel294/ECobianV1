import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LinkT } from '../types/components/links.type';
import { ButtonT } from '../types/components/button.type';
import { PresentationT } from '../types/components/presentation.type';
import { ProfileService } from '../services/profile/profile.service';
import { ProfileDocument } from '../entities/profile.types';
import { Subscription } from 'rxjs';
import { TechnologyService } from '../services/technology/technology.service';
import { TechnologyDocument } from '../entities/technologie.types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit, OnDestroy {

  public profilesSubscription: Subscription | undefined = undefined;
  public technologiesSubscription: Subscription | undefined = undefined;

  public profileDocument: ProfileDocument | undefined = undefined;
  public technologiesDocuments: Array<TechnologyDocument> | undefined = undefined;

  public navVarLinks: Array<LinkT> = [
    {
      link: 'About',
      href: '#',
      tooltip: 'About me'
    },
    {
      link: 'Experience',
      href: '#',
      tooltip: 'Experience'
    },
    {
      link: 'Contact',
      href: '#',
      tooltip: 'Contact me'
    }
  ];

  public navVarButtons: Array<ButtonT> = [
    {
      title: 'Resume',
      link: '#',
      tooltip: 'Download Resume'
    },
  ];

  public presentationContent: PresentationT = {
    presentation: '',
    mainContent: '',
    content: ''
  }

  constructor(
    private readonly profileService: ProfileService,
    private readonly technologyService: TechnologyService,
  ) { }

  public async ngAfterViewInit(): Promise<void> {
    this.profilesSubscription = this.profileService
      .getProfiles()
      .subscribe(
        (profileDocuments: Array<ProfileDocument>): void => {
          profileDocuments.forEach(
            (profileDocument: ProfileDocument): void => {
              this.presentationContent = {
                presentation: 'Hi my name is',
                mainContent: `${profileDocument.firstName} ${profileDocument.lastName}.`,
                content: profileDocument.description
              };
            }
          );
          this.profileDocument = {
            ...profileDocuments[0],
            aboutMe: profileDocuments[0].aboutMe.replace('\\n', '<br>')
          };
        }
      );

    this.technologiesSubscription = this.technologyService.getTechnologiesObservable()
      .subscribe(
        (technologies: Array<TechnologyDocument>): void => {
          this.technologiesDocuments = technologies;
        }
      )
  }

  public ngOnDestroy(): void {
    this.profilesSubscription?.unsubscribe();
  }

}
