
import { AboutMeComponent } from './about-me/about-me.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'
import { AngularMaterialModule } from './custom-modules/angularMaterialModule';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import { CustomComponentsModule } from './custom-components/custom-components.module';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase/firebase.service';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { PersonalProjectCardComponent } from './personal-project-card/personal-project-card.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { ProfileService } from './services/profile/profile.service';
import { ScrollEventsService } from './services/events/scroll.events.service';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WorkExperienceDetailsComponent } from './work-experience-details/work-experience-details.component';


@NgModule({
  bootstrap: [AppComponent],
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
})
export class AppModule { }
