import { Injectable } from '@angular/core';

export type Quest = {
  name: string;
  description: string;
  complete: boolean;
  xp: number;
};

@Injectable({
  providedIn: 'root',
})
export class QuestsService {
  private quests: Quest[] = [
    { name: "Rescue", description: "Rescue the princess", xp: 50, complete: false },
    { name: "Find the rarest gem", description: "Find the green gem", xp: 70, complete: true },
    { name: "Kill the bandits", description: "Kill all Bandits", xp: 150, complete: true },
  ];

  constructor() {
    console.log('Service instance created.');
  }

  getQuests(): Quest[] {
    return this.quests;
  }
}
