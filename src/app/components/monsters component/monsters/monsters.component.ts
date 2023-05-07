import { Component, OnInit } from '@angular/core';
import { MonstersServiceService } from 'src/app/services/monsters-service.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css'],
})
export class MonstersComponent implements OnInit {
  // injecting the service
  constructor(public monsterService: MonstersServiceService) {}

  monstersData: any;

  ngOnInit(): void {
    this.monsterService.getAllMonsters().subscribe(
      (data) => {
        this.monstersData = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
