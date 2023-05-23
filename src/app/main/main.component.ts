import { AfterViewInit, Component } from '@angular/core';
import { combineLatest, map, Observable, Subscription, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ButtonT } from '../types/components/button.type';
import { LinkT } from '../types/components/links.type';
import { LoaderService } from '../services/loader/loader.service';
import { PersonalProjectDocument } from '../entities/personalProject.types';
import { PersonalProjectsService } from '../services/personal-projects/personal-projects.service';
import { PresentationT } from '../types/components/presentation.type';
import { ProfileDocument } from '../entities/profile.types';
import { ProfileService } from '../services/profile/profile.service';
import { SideBarItem } from '../types/components/sideBarItem.type';
import { TechnologyDocument } from '../entities/technologie.types';
import { TechnologyService } from '../services/technology/technology.service';
import { WorkDocument } from '../entities/work.types';
import { WorkService } from '../services/work/work.service';

type TechnologiesMapT = {
  [key: string]: TechnologyDocument
}

type GeneralDocumentsResponseT = [
  profileDocuments: Array<ProfileDocument>,
  technologyDocuments: Array<TechnologyDocument>,
  workDocuments: Array<WorkDocument>,
  personalProjectDocuments: Array<PersonalProjectDocument>
];

@UntilDestroy()
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html',
})
export class MainComponent implements AfterViewInit {
  public profilesSubscription: Subscription | undefined = undefined;
  public resumeSubscription: Subscription | undefined = undefined;

  public profileDocument!: ProfileDocument;
  public technologiesDocuments: Array<TechnologyDocument> = [];
  public worksDocuments: Array<WorkDocument> = [];
  public personalProjectsDocuments: Array<PersonalProjectDocument> = []

  public profilePicture$!: Observable<string>;

  public technologiesMapById: TechnologiesMapT = {};

  public isLoading: boolean = true;

  public navVarLinks: Array<LinkT> = [
    {
      href: 'aboutMe',
      link: 'About',
      tooltip: 'About me'
    },
    {
      href: 'workExperience',
      link: 'Experience',
      tooltip: 'Experience'
    },
    {
      href: 'personalProjects',
      link: 'Projects',
      tooltip: 'Projects'
    },
    {
      href: 'contact',
      link: 'Contact',
      tooltip: 'Contact me'
    }
  ];

  public sideBarItems: Array<SideBarItem> = [
    {
      icon: 'twitter',
      label: 'twitter',
      link: '',
    },
    {
      icon: '',
      label: 'Git',
      link: '',
    }
  ]

  public navVarButtons: Array<ButtonT> = [
  ];

  public presentationContent: PresentationT = {
    content: '',
    mainContent: '',
    presentation: '',
  }

  public slideComponents: NodeListOf<HTMLDivElement> | undefined = undefined;

  public constructor(
    public readonly loaderService: LoaderService,
    private readonly profileService: ProfileService,
    private readonly personalProjectsService: PersonalProjectsService,
    private readonly technologyService: TechnologyService,
    private readonly workService: WorkService,
  ) { }


  public async ngAfterViewInit(): Promise<void> {
    this.loaderService.setLoading(true);
    const profileObservable$: Observable<Array<ProfileDocument>> = this.profileService
      .getProfiles()
      .pipe(
        tap(
          (profileDocuments: Array<ProfileDocument>): void => {
            profileDocuments.forEach(
              (profileDocument: ProfileDocument): void => {
                this.presentationContent = {
                  content: profileDocument.description,
                  mainContent: `${profileDocument.firstName} ${profileDocument.lastName}.`,
                  presentation: 'Hi my name is',
                };
              }
            );
            this.profileDocument = {
              ...profileDocuments[0],
              aboutMe: profileDocuments[0].aboutMe.replace('\\n', '<br>')
            };
            this.profilePicture$ = this.profileService.getProfilePicture(this.profileDocument?.profilePicture);

            this.profileService.getResume(this.profileDocument?.resumeLink)
              .subscribe(
                (resume: string): void => {
                  this.navVarButtons = [
                    {
                      link: resume,
                      title: 'Resume',
                      tooltip: 'Download Resume'
                    },
                  ]
                }
              );
          }
        )
      );

    const technologiesObservable$: Observable<Array<TechnologyDocument>> = this.technologyService.getTechnologiesSnapshot()
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

    const worksObservable$: Observable<Array<WorkDocument>> = this.workService.getWorksObservable()
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

    const personalProjectsObservable$: Observable<Array<PersonalProjectDocument>> = this.personalProjectsService.getPersonalProjects().pipe(
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

    combineLatest(
      profileObservable$,
      technologiesObservable$,
      worksObservable$,
      personalProjectsObservable$,
    ).pipe(
      untilDestroyed(this),
    ).subscribe(
      ([profileDocuments, technologyDocuments, workDocuments, personalProjectDocuments]: GeneralDocumentsResponseT): any => {
        this.technologiesDocuments = technologyDocuments;
        this.worksDocuments = workDocuments;
        this.personalProjectsDocuments = personalProjectDocuments;
        this.loaderService.setLoading(false);
      }
    )
  }
}
