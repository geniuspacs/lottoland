import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { WinningNumber } from 'src/app/model/winning_numbers.class';
import { WinningNumbersService } from 'src/app/services/winning-numbers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  readonly ROMAN_NUMBERS = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    11: 'XI',
    12: 'XII'
  };

  list: WinningNumber[] = [];

  winningOdds: any[] = [];

  date: any;

  constructor(private winningNumbersService: WinningNumbersService) { }

  ngOnInit(): void {
    this.winningNumbersService.getWinningNumbers().then((result: any) => {
      this.list.push(result.last);
      this.date = moment(result.last.date.day + '/' + result.last.date.month + '/' + result.last.date.year).format('DD/MM/yyyy');
      this.winningOdds = Object.values(result.last.odds).filter((value: any) => value.winners > 0);
      this.winningOdds.sort((a: any, b: any) => {
        if (a.winners > b.winners) {
          return 1;
        }
        if (a.winners < b.winners) {
          return -1;
        }

        return 0;
      })
    }, error => {
      console.error(error);
    })
      .catch(error => {
        console.error(error);
      });
  }

}
