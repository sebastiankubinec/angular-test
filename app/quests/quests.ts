import { Component } from '@angular/core';

type Quest = {
  name: string;
  description: string;
  complete: boolean;
  xp: number;
};

@Component({
  selector: 'app-quests',
  standalone: true,
  templateUrl: './quests.html',
  styleUrls: ['./quests.css'],
})
export class Quests {
  quests: Quest[] = [
    { name: "Rescue", description: "Rescue the princess", xp: 50, complete: false },
    { name: "Find the rarest gem", description: "Find the green gem", xp: 70, complete: true },
    { name: "Kill the bandits", description: "Kill all Bandits", xp: 150, complete: true },
  ];

  addQuest() {
    const newQuest: Quest = {
      name: 'New Quest',
      description: 'This is a static description',
      xp: 80,
      complete: false,
    };
    this.quests.push(newQuest);
  }

  deleteQuest(index: number) {
    this.quests.splice(index, 1);
  }
}
