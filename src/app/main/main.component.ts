import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LinkT } from '../types/components/links.type';
import { ButtonT } from '../types/components/button.type';
import { PresentationT } from '../types/components/presentation.type';
import { ProfileService } from '../services/profile/profile.service';
import { ProfileDocument } from '../entities/profile.types';
import { Observable, Subscription, map, tap } from 'rxjs';
import { TechnologyService } from '../services/technology/technology.service';
import { TechnologyDocument } from '../entities/technologie.types';
import { WorkService } from '../services/work/work.service';
import { WorkDocument } from '../entities/work.types';
import { ConfigurationService } from '../services/configuration/configuration.service';
import { PersonalProjectsService } from '../services/personal-projects/personal-projects.service';
import { PersonalProjectDocument } from '../entities/personalProject.types';

type TechnologiesMapT = {
  [key: string]: TechnologyDocument
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit, OnDestroy {

  public profilesSubscription: Subscription | undefined = undefined;
  public resumeSubscription: Subscription | undefined = undefined;

  public profileDocument!: ProfileDocument;
  public technologiesDocuments: Array<TechnologyDocument> = [];
  public worksDocuments: Array<WorkDocument> = [];

  public profilePicture$!: Observable<string>;
  public technologiesObservable$!: Observable<Array<TechnologyDocument>>;

  public technologiesMapById: TechnologiesMapT = {};

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
      link: 'Projects',
      href: 'personalProjects',
      tooltip: 'Projects'
    },
    {
      link: 'Contact',
      href: '#',
      tooltip: 'Contact me'
    }
  ];

  public navVarButtons: Array<ButtonT> = [
  ];

  public presentationContent: PresentationT = {
    presentation: '',
    mainContent: '',
    content: ''
  }

  public worksObservable$!: Observable<Array<WorkDocument>>;
  public personalProjectsObservable$!: Observable<Array<PersonalProjectDocument>>;

  constructor(
    private readonly profileService: ProfileService,
    private readonly personalProjectsService: PersonalProjectsService,
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
          this.profilePicture$ = this.profileService.getProfilePicture(this.profileDocument?.profilePicture);

          this.resumeSubscription = this.profileService.getResume(this.profileDocument?.resumeLink)
            .subscribe(
              (resume: string): void => {
                this.navVarButtons = [
                  {
                    title: 'Resume',
                    link: resume,
                    tooltip: 'Download Resume'
                  },
                ]
              }
            );
        }
      );



    this.technologiesObservable$ = this.technologyService.getTechnologiesSnapshot()
      .pipe(
        tap(
          (technologies: Array<TechnologyDocument>): void => {
            this.technologiesDocuments = technologies;
            this.technologiesMapById = technologies.reduce(
              (currentMap: TechnologiesMapT, currentTechnology: TechnologyDocument): TechnologiesMapT => {
                currentMap[currentTechnology.id] = currentTechnology;
                return currentMap;
              },
              {}
            );
          }

        )
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

    this.personalProjectsObservable$ = this.personalProjectsService.getPersonalProjects().pipe(
      map(
        (personalProjects: Array<PersonalProjectDocument>): Array<PersonalProjectDocument> => {
          return personalProjects.map(
            (personalProject: PersonalProjectDocument): PersonalProjectDocument => {
              const technologiesMapped: Array<string> = !personalProject.technologies ? [] : personalProject.technologies.map(
                (technology: string): string => {
                  if (!(technology in this.technologiesMapById)) return '';
                  return this.technologiesMapById[technology].name;
                }
              );
              const mappedPersonalProject: PersonalProjectDocument = {
                ...personalProject,
                technologies: technologiesMapped
              }
              return mappedPersonalProject;
            }
          )
        }
      )
    );
  }

  public ngOnDestroy(): void {
    this.profilesSubscription?.unsubscribe();
    this.resumeSubscription?.unsubscribe();
  }

}
