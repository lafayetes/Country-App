import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';



@NgModule({
  declarations: [

    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
