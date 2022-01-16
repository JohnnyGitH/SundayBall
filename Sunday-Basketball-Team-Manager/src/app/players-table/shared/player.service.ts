import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

const spreadsheetId = "1d-uLwFvHVxS79gtRm3h2UvBYg_htzIP-1aHTTbHovC0";
const apiResourcePath = "/v4/spreadsheets/";
const baseUrl = "https://sheets.googleapis.com";

export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    console.log("service.getPlayers()");
    return this.http.get<Player[]> (baseUrl.concat(apiResourcePath,spreadsheetId))
  }
}
