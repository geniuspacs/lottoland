import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinningNumbersService {

  constructor(
    private http: HttpClient
  ) { }

  getWinningNumbers(): Promise<WinningNumbersService> {
    return this.http.jsonp<WinningNumbersService>('https://lottoland.com/api/drawings/euroJackpot', 'callback').toPromise();
  }
}
