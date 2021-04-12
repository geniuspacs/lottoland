export class Rank {
  private _winners: number = 0;
  private _specialPrize: number = 0;
  private _prize: number = 0

  constructor() {

  }

  public get winners(): number {
    return this._winners;
  }

  public set winners(winners: number) {
    this._winners = winners;
  }


  public get specialPrize(): number {
    return this._specialPrize;
  }
  public set specialPrize(specialPrize: number) {
    this._specialPrize = specialPrize;
  }


  public get prize(): number {
    return this._prize;
  }
  public set prize(prize: number) {
    this._prize = prize;
  }



}
