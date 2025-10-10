import { Component, OnInit, OnDestroy } from "@angular/core";
import { QuestsService, Quest } from "./service";

@Component({
  selector: "app-quests",
  templateUrl: "./quests.html",
  styleUrls: ["./quests.css"],
  standalone: true,
})
export class QuestsComponent implements OnInit, OnDestroy {
  quests: Quest[] = [];
  addQuest() {
    const newQuest: Quest = {
      name: "New Quest",
      description: "Quest Description",
      xp: 100,
      complete: false,
    };
    this.quests.push(newQuest);
  }

  constructor(private questsService: QuestsService) {}

  ngOnInit(): void {
    this.quests = this.questsService.getQuests();
    console.log("Quests created.");
  }

  ngOnDestroy(): void {
    console.log("Quest destroyed.");
  }
  deleteQuest(index: number) {
    this.quests.splice(index, 1);
  }
}
