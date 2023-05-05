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
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WorkExperienceDetailsComponent } from './work-experience-details/work-experience-details.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { PersonalProjectCardComponent } from './personal-project-card/personal-project-card.component';
import { ContactComponent } from './contact/contact.component';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { CustomComponentsModule } from './custom-components/custom-components.module';
import { ScrollEventsService } from './services/events/scroll.events.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutMeComponent,
    WorkExperienceComponent,
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
    CustomComponentsModule,
    HeadroomModule,
  ],
  providers: [
    FirebaseService,
    ProfileService,
    ScrollEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
