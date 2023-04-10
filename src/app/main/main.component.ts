import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LinkT } from '../types/components/links.type';
import { ButtonT } from '../types/components/button.type';
import { PresentationT } from '../types/components/presentation.type';
import { ProfileService } from '../services/profile/profile.service';
import { ProfileDocument } from '../entities/profile.types';
import { Observable, Subscription, map } from 'rxjs';
import { TechnologyService } from '../services/technology/technology.service';
import { TechnologyDocument } from '../entities/technologie.types';
import { WorkService } from '../services/work/work.service';
import { WorkDocument } from '../entities/work.types';
import { ConfigurationService } from '../services/configuration/configuration.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit, OnDestroy {

  public profilesSubscription: Subscription | undefined = undefined;
  public technologiesSubscription: Subscription | undefined = undefined;
  public worksSubscription: Subscription | undefined = undefined;

  public profileDocument: ProfileDocument | undefined = undefined;
  public technologiesDocuments: Array<TechnologyDocument> = [];
  public worksDocuments: Array<WorkDocument> = [];

  public navVarLinks: Array<LinkT> = [
    {
      link: 'About',
      href: 'aboutMe',
      tooltip: 'About me'
    },
    {
      link: 'Experience',
      href: 'workExperience',
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
      link: 'https://firebasestorage.googleapis.com/v0/b/ecobian-5b0be.appspot.com/o/ecobian%2Fresume%2F01_Emmanuel_Cobian_-_Software_Engineer.pdf?alt=media&token=3d53eb74-8f66-496d-816e-3d8a43d30a29',
      tooltip: 'Download Resume'
    },
  ];

  public presentationContent: PresentationT = {
    presentation: '',
    mainContent: '',
    content: ''
  }

  public worksObservable$!: Observable<Array<WorkDocument>>;

  constructor(
    private readonly configurationService: ConfigurationService,
    private readonly profileService: ProfileService,
    private readonly technologyService: TechnologyService,
    private readonly workService: WorkService,
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
      );

    this.worksObservable$ = this.workService.getWorksObservable()
      .pipe(
        map(
          (documents: Array<WorkDocument>): Array<WorkDocument> => {
            return documents.sort(
              (a: WorkDocument, b: WorkDocument): number => {
                return b.time[0] - a.time[0];
              }
            )
          }
        )
      );
  }

  public ngOnDestroy(): void {
    this.profilesSubscription?.unsubscribe();
    this.technologiesSubscription?.unsubscribe();
  }

}
