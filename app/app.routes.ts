import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';    // Adjust path and filenames if needed
import { QuestsComponent } from './quests/quests';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quests', component: QuestsComponent }
];
