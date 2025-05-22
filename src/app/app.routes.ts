import { Routes } from '@angular/router';
import { CasinoComponent } from './components/casino/casino.component';
import { LiveComponent } from './components/live/live.component';
import { CasinoLiveComponent } from './components/casino-live/casino-live.component';
import { SportsComponent } from './components/sports/sports.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'casino', component: CasinoComponent },
  { path: 'live', component: LiveComponent },
  { path: 'casino-live', component: CasinoLiveComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
