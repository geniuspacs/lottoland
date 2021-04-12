import { DateModel } from "./date_model.class";
import { ODDS } from "./odds.class";

export class WinningNumber {
  _nr: number = 0;
  _currency: string = '';
  _date: DateModel = new DateModel();
  _closingDate: Date = new Date();
  _lateClosingDate: Date = new Date();
  _drawingDate: Date = new Date();
  _numbers: number[] = [];
  _euroNumbers: number[] = [];
  _jackpot: number = 0;
  _marketingJackpot: number = 0;
  _specialMarketingJackpot: number = 0;
  _climbedSince: number = 0;
  _winners: number = 0;
  _odds: ODDS = new ODDS();

  public get nr(): number {
    return this._nr;
  }

  public set nr(nr: number) {
    this._nr = nr;
  }

  public get currency(): string {
    return this._currency;
  }
  public set currency(currency: string) {
    this._currency = currency;
  }

  public get date(): DateModel {
    return this._date;
  }
  public set date(date: DateModel) {
    this._date = date;
  }

  public get closingDate(): Date {
    return this._closingDate;
  }
  public set closingDate(closingDate: Date) {
    this._closingDate = closingDate;
  }

  public get lateClosingDate(): Date {
    return this._lateClosingDate;
  }
  public set lateClosingDate(lateClosingDate: Date) {
    this._lateClosingDate = lateClosingDate;
  }

  public get drawingDate(): Date {
    return this._drawingDate;
  }
  public set drawingDate(drawingDate: Date) {
    this._drawingDate = drawingDate;
  }

  public get numbers(): number[] {
    return this._numbers;
  }
  public set numbers(numbers: number[]) {
    this._numbers = numbers;
  }

  public get euroNumbers(): number[] {
    return this._euroNumbers;
  }
  public set euroNumbers(euroNumbers: number[]) {
    this._euroNumbers = euroNumbers;
  }

  public get jackpot(): number {
    return this._jackpot;
  }
  public set jackpot(jackpot: number) {
    this._jackpot = jackpot;
  }

  public get marketingJackpot(): number {
    return this._marketingJackpot;
  }
  public set marketingJackpot(v: number) {
    this._marketingJackpot = v;
  }

  public get specialMarketingJackpot(): number {
    return this._specialMarketingJackpot;
  }
  public set specialMarketingJackpot(specialMarketingJackpot: number) {
    this._specialMarketingJackpot = specialMarketingJackpot;
  }

  public get climbedSince(): number {
    return this._climbedSince;
  }
  public set climbedSince(climbedSince: number) {
    this._climbedSince = climbedSince;
  }

  public get winners(): number {
    return this._winners;
  }
  public set winners(winners: number) {
    this._winners = winners;
  }

  public get odds(): ODDS {
    return this._odds;
  }
  public set odds(odds: ODDS) {
    this._odds = odds;
  }


}
