import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MonstersServiceService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private myClient: HttpClient) {}

  getAllMonsters() {
    return this.myClient.get(this.BASE_URL);
  }

  getMonsterById(id: any) {
    return this.myClient.get(`${this.BASE_URL}/${id}`);
  }
}
