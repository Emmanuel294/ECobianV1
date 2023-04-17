import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './custom-modules/angularMaterialModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './services/firebase/firebase.service';
import { ProfileService } from './services/profile/profile.service';
import { EcNavBarComponent } from './custom-components/ec-nav-bar/ec-nav-bar.component';
import { MainComponent } from './main/main.component';
import { EcPresentationComponent } from './custom-components/ec-presentation/ec-presentation.component';
import { EcSeparatorComponent } from './custom-components/ec-separator/ec-separator.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EcItemsListComponent } from './custom-components/ec-items-list/ec-items-list.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EcDetailsListComponent } from './custom-components/ec-details-list/ec-details-list.component';
import { WorkExperienceDetailsComponent } from './work-experience-details/work-experience-details.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { EcCardComponent } from './custom-components/ec-card/ec-card.component';
import { PersonalProjectCardComponent } from './personal-project-card/personal-project-card.component';
import { ContactComponent } from './contact/contact.component';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { EcSpinnerComponent } from './custom-components/ec-spinner/ec-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    EcNavBarComponent,
    EcPresentationComponent,
    EcSeparatorComponent,
    EcItemsListComponent,
    EcCardComponent,
    MainComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    EcDetailsListComponent,
    EcSpinnerComponent,
    WorkExperienceDetailsComponent,
    PersonalProjectsComponent,
    PersonalProjectCardComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(
      environment.firebase,
      environment.firebase.projectId,
    ),
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    HeadroomModule,
  ],
  providers: [
    FirebaseService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
