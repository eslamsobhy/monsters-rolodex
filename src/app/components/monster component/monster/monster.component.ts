import { Component, Input } from '@angular/core';
import { Monster } from 'src/app/models/monster';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css'],
})
export class MonsterComponent {
  @Input() mData?: Monster;
}
