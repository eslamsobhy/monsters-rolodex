import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonstersServiceService } from 'src/app/services/monsters-service.service';

@Component({
  selector: 'app-monster-details',
  templateUrl: './monster-details.component.html',
  styleUrls: ['./monster-details.component.css'],
})
export class MonsterDetailsComponent implements OnInit {
  id: any;
  monster: any;

  constructor(
    myRoute: ActivatedRoute,
    private monstersService: MonstersServiceService
  ) {
    this.id = myRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.monstersService.getMonsterById(this.id).subscribe(
      (data) => {
        this.monster = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
