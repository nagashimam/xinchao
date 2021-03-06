import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { BottomBarNavComponent } from './components/bottom-bar-nav/bottom-bar-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StoryComponent } from './components/story/story.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DishSummaryCardComponent } from './components/dish-summary-card/dish-summary-card.component';
import { DishDetailComponent } from './components/dish-detail/dish-detail.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BottomBarNavComponent,
    ContactComponent,
    DishCardComponent,
    HeaderComponent,
    HomeComponent,
    MemberComponent,
    MenuComponent,
    SpinnerComponent,
    StoryComponent,
    WelcomeComponent,
    DishSummaryCardComponent,
    DishDetailComponent,
    ReviewComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DishDetailComponent],
})
export class AppModule {}
