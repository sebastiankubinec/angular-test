import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home';
import { QuestsComponent } from './quests/quests';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, QuestsComponent],
  template: `
    <nav>
      <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="quests" routerLinkActive="active">Quests</a>
    </nav>

    <div class="button-container">
      <button class="add-quest-btn" (click)="toggleQuests()">
        {{ showQuests ? 'Hide Quests' : 'Show Quests' }}
      </button>
    </div>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./quests/quests.css']
})
export class App {
  showQuests = true;
  toggleQuests() {
    this.showQuests = !this.showQuests;
  }
}
