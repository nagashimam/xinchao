import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
