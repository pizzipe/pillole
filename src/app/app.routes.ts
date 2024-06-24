import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { MyHomeComponent } from './pages/my-home/my-home.component';
import { MyAboutComponent } from './pages/my-about/my-about.component';
import { MyServiceComponent } from './pages/my-service/my-service.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';
import { MyContactComponent } from './pages/my-contact/my-contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MyHomeComponent},
  { path: 'about', component: MyAboutComponent},
  { path: 'service', component: MyServiceComponent},
  { path: 'work', component: MyWorkComponent},
  { path: 'contact', component: MyContactComponent},
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];

export const appRouterProviders = [
  provideRouter(routes)
];

