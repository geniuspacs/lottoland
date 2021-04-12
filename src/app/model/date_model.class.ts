export class DateModel {
  private _full: string = '';
  private _day: number = 0;
  private _month: number = 0;
  private _year: number = 0;
  private _hour: number = 0;
  private _minute: number = 0;
  private _dayOfWeek: string = '';

  constructor() { }

  set full(full: string) {
    this._full = full;
  }

  get full(): string {
    return this._full;
  }

  set day(day: number) {
    this._day = day;
  }

  get day(): number {
    return this._day;
  }

  set month(month: number) {
    this._month = month;
  }

  get month(): number {
    return this._month;
  }

  set year(year: number) {
    this._year = year;
  }

  get year(): number {
    return this._year;
  }

  set hour(hour: number) {
    this._hour = hour;
  }

  get hour(): number {
    return this._hour;
  }

  set minute(minute: number) {
    this._minute = minute;
  }

  get minute(): number {
    return this._minute;
  }

  set dayOfWeek(dayOfWeek: string) {
    this._dayOfWeek = dayOfWeek;
  }

  get dayOfWeek(): string {
    return this._dayOfWeek;
  }
}
