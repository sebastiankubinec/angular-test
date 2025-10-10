import { Component } from '@angular/core';
import { QuestsComponent } from './quests/quests';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, QuestsComponent],
  template: `
   <div class="button-container">
   
   <button class="add-quest-btn" (click)="toggleQuests()">
      {{showQuests ? 'Hide Quests' : 'Show Quests' }}
    </button>
    </div>

    <app-quests *ngIf="showQuests"></app-quests>
  `,
  styleUrls: ['./quests/quests.css'],
  standalone: true,
})
export class App {
  showQuests = true;

  toggleQuests() {
    this.showQuests = !this.showQuests;
  }
}
