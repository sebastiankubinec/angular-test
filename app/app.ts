import { Component } from '@angular/core';
import { Quests } from './quests/quests';

@Component({
  selector: 'app-root',
  imports: [Quests],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'default';
}

